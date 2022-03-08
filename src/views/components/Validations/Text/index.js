import React from "react";
import { Input, InputContainer, Error } from "./styles.js"
import { TextField } from "@mui/material";
export default function Text({error, ...args}) {

    return (
        <InputContainer>
            <Input 
            {...args}
                autoComplete="off"
                className={error? "error" : "normal"}
            />
            {error && <Error>{error}</Error>}
        </InputContainer>
    )
}