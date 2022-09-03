import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Default() {
    const navigate = useNavigate();
  return (
    <div>
        <StyledButton onClick = {() => navigate("/login")}>Login to Account</StyledButton>
    </div>
  )
}

export default Default

const StyledButton = styled.button`
    margin-top: 10px;
    padding: 10px;
    background: rgb(0, 89, 178);
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 10%;
`