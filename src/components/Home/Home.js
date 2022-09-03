import React from 'react'
import { authentication } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const handleLogout = () => {
        authentication
        .signOut()
        .then(() => {
            navigate("/")
        })
        .catch((error) => console.log(error));
    }
  return (
    <div>
        <h1>Welcome, {authentication.currentUser?.email}</h1>
        <button onClick={() => handleLogout()}>Logout</button>
    </div>
  )
}

export default Home