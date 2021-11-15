import React from 'react';
import pumpkin from "../../../chest/files/pumpkin-logo.png";
import { PageContainer } from "./styles";
export default function Home({}) {


    return (
        <PageContainer>
            <img src={pumpkin}/>
            <p>Una pequeña red social openSource que aspira a ser una alternativa que escucha a la comunidad.</p>
        </PageContainer>
    );
}