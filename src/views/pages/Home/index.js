import React from 'react';
import jejlogo from "../../../chest/files/jejlogo.png";
import { PageContainer } from "./styles";
export default function Home({}) {


    return (
        <PageContainer>
            <img src={jejlogo}/>
            <p>¿Estás en busca de una plataforma de socialización diferente?. Has llegado a tu destino así que puedes bajar del tren y crear una nueva cuenta para empezar a disfrutar de JEJ. Aquí tienes todas las funcionalidades básicas de una red social; crear y publicar blogs, chatear con tus amigos en tiempo real y crear grupos.</p>
            <span>// AÚN EN DESARROLLO ASÍ QUE MUCHAS FUNCIONALIDADES NO ESTÁN ACTIVAS</span>
        </PageContainer>
    );
}