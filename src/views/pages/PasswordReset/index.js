import React, { useState } from 'react';
import { PageContainer, PasswordResetButton } from "./styles";
import pumpkin from "../../../chest/files/pumpkin-logo.png";
import { useDispatch } from "react-redux";
import { requestPasswordReset } from "../../../application/actions/users";

export default function PasswordReset() {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    
    const handlePasswordReset = (e)=> {
        e.preventDefault();
        dispatch(requestPasswordReset(email))
    }

    return (
        <PageContainer>
            <section>
                <img alt="app-image" src={pumpkin}/>

                <h4>Cambio de contraseña</h4>

                <input 
                value = { email }
                onChange = { e=>setEmail(e.target.value) }
                placeholder = "Ingresa tu email para continuar."/>

                <PasswordResetButton onClick={handlePasswordReset}>
                    Solicitar reinicio de contraseña
                </PasswordResetButton>
            </section>
        </PageContainer>
    );
}