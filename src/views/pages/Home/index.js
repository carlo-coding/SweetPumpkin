import React from 'react';
import pumpkin from "../../../chest/files/pumpkin-logo.png";
import { PageContainer } from "./styles";
export default function Home({}) {


    return (
        <PageContainer>
            <img src={pumpkin}/>
        </PageContainer>
    );
}