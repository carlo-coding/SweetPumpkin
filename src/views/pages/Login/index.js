import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';
import { loginUser } from "../../../application/actions/users";
import Text from "../../components/Validations/Text";
import { PageContainer, SubmitButton } from "./styles";
import { useHistory } from "react-router-dom";


export default function RegisterUser({}) {

    const dispatch = useDispatch();

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (data) => {
            dispatch(loginUser(data));
        },
        validationSchema: Yup.object({
            email: Yup.string().required("El email es requerido"),
            password: Yup.string().required("La contraseña es requerida"),
        })
    });


    return (
        <PageContainer>
            <h4>Ingrese sus datos</h4>
            <form className="form-reg-user" onSubmit={formik.handleSubmit}>
                <Text type="email" name="email" placeholder="Ingrese email" onChange={formik.handleChange} error={formik.errors.email}/>
                <Text type="password" name="password" placeholder="Ingrese su contraseña" onChange={formik.handleChange} error={formik.errors.password}/>
                <SubmitButton type="submit">Entregar</SubmitButton>
            </form>
        </PageContainer>
    );
}

