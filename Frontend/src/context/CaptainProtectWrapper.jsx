import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from './CaptainContext';
import axios from 'axios';

const CaptainProtectWrapper = ({children}) => {
    const token = localStorage.getItem("token");
      const navigate = useNavigate();
      const { captain, setCaptain } = useContext(CaptainDataContext)
     const [ isLoading, setIsLoading ] = useState(true)
    
      useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }

    const fetchCaptain = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error fetching captain profile:", err);
        localStorage.removeItem('token');
        navigate('/captain-login');
      }
    };

    fetchCaptain();
  }, [token, navigate, setCaptain]);

      

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectWrapper