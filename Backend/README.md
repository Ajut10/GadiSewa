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