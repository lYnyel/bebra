import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export default function logout() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/')
      }, []);

  return <></>;
}
