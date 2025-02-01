# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body:
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: The first name of the user (minimum 3 characters).
  - `lastname`: The last name of the user (minimum 3 characters, optional).
- `email`: The email address of the user (must be a valid email).
- `password`: The password for the user account (minimum 6 characters).

### Example Request Body:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (201 Created):
- **Description**: User successfully registered.
- **Body**: A JSON object containing the authentication token and user details.
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Client Error (400 Bad Request):
- **Description**: Validation error or missing required fields.
- **Body**: A JSON object containing the validation errors.
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Notes:
- Ensure that the email provided is unique and not already registered.
- Passwords are hashed before being stored in the database.

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to authenticate a user and provide a JWT token.

### Request Body:
The request body should be a JSON object containing the following fields:
- `email`: The email address of the user (must be a valid email).
- `password`: The password for the user account (minimum 6 characters).

### Example Request Body:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (200 OK):
- **Description**: User successfully authenticated.
- **Body**: A JSON object containing the authentication token and user details.
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Client Error (400 Bad Request):
- **Description**: Validation error or missing required fields.
- **Body**: A JSON object containing the validation errors.
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be up to 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Unauthorized (401 Unauthorized):
- **Description**: Invalid email or password.
- **Body**: A JSON object containing the error message.
```json
{
  "error": "invalid email or password"
}
```

### Notes:
- Ensure that the email and password provided are correct.
- The JWT token is used for authenticating subsequent requests.

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:
This endpoint is used to retrieve the profile of the authenticated user.

### Headers:
- `Authorization`: Bearer token obtained from the login endpoint.

### Responses:

#### Success (200 OK):
- **Description**: User profile retrieved successfully.
- **Body**: A JSON object containing the user details.
```json
{
  "_id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Unauthorized (401 Unauthorized):
- **Description**: User is not authenticated.
- **Body**: A JSON object containing the error message.
```json
{
  "message": "Unauthorized"
}
```

### Notes:
- Ensure that the JWT token is valid and not expired.

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated user.

### Headers:
- `Authorization`: Bearer token obtained from the login endpoint.

### Responses:

#### Success (200 OK):
- **Description**: User successfully logged out.
- **Body**: A JSON object containing the success message.
```json
{
  "message": "logged out"
}
```

#### Unauthorized (401 Unauthorized):
- **Description**: User is not authenticated.
- **Body**: A JSON object containing the error message.
```json
{
  "message": "Unauthorized"
}
```

### Notes:
- The JWT token is invalidated and added to the blacklist.

# Captain Registration Endpoint

## Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body:
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: The first name of the captain (minimum 3 characters).
  - `lastname`: The last name of the captain (minimum 3 characters, optional).
- `email`: The email address of the captain (must be a valid email).
- `password`: The password for the captain account (minimum 6 characters).
- `vehicle`: An object containing:
  - `color`: The color of the vehicle (minimum 3 characters).
  - `plate`: The plate number of the vehicle (minimum 3 characters).
  - `capacity`: The capacity of the vehicle (minimum 1).
  - `vehicleType`: The type of the vehicle (must be one of 'car', 'motorcycle', 'van').

### Example Request Body:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses:

#### Success (201 Created):
- **Description**: Captain successfully registered.
- **Body**: A JSON object containing the authentication token and captain details.
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Client Error (400 Bad Request):
- **Description**: Validation error or missing required fields.
- **Body**: A JSON object containing the validation errors.
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Vehicle color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Vehicle plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Vehicle capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### Notes:
- Ensure that the email provided is unique and not already registered.
- Passwords are hashed before being stored in the database.