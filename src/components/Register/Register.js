import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { authentication } from "../../firebase/firebase";
import { useNavigate} from "react-router-dom";

function Register() {
    const [ email, setEmail] = useState("");
    const [ passwd, setPasswd] = useState("");
    const navigate = useNavigate();

    const handleRegister = () => {
        createUserWithEmailAndPassword(authentication, email, passwd)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Registered with : ", user.email);
        })
        .catch((error) => console.log(error));
    }
    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged((user) => {
            if (user) {
                navigate("/home");
            }
        })
    })
  return (
    <div>
        <StyledDiv>
            <h1>Register</h1>
            <Input
                type = "text"
                placeholder = "Email"
                value = {email}
                onChange = {(event) => setEmail(event.target.value)}
            />
            <br></br>
            <Input 
                type = "password"
                placeholder = "password"
                value = {passwd}
                onChange = {(event) => setPasswd(event.target.value)}
            />
            <br></br>
            <Button onClick = {() => handleRegister()}>Register</Button>
            <h4>Already have an account?</h4>
            <Button onClick = {() => navigate("/login")}>Login</Button>
        </StyledDiv>

    </div>
  )
}

export default Register

const StyledDiv = styled.div`
    display: inline-block;
    padding: 3em;
    background: #fff;
    border-radius: 10px;
    position-relative;
    cursor: pointer;
    margin-top: 10%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0,2), 0, 6px 20px 0 rgba(0, 0, 0, 0.2);
`

const Input = styled.input`
    padding: 10px;
    margin: 5px;
    font-size: 17px;
    background: lightgray;
    outline: none;
    border: none;
    border-radius: 10px;
`;

const Button = styled.button`
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background: rgb(0, 89, 178);
    color: #fff;
    width: 90%;
    font-size: 16px;
    font-weight: 800;
`