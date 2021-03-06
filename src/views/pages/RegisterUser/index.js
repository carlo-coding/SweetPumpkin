import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import { createNewUser } from "../../../application/actions/users";
import { uploadFile } from "../../../application/actions/files";
import Text from "../../components/Validations/Text";
import {Image} from "../../components/Validations/Image";
import { PageContainer, SubmitButton, Textarea, FormDiv } from "./styles";
import { useHistory } from "react-router-dom";

 
export default function RegisterUser({}) {
    const [userData, setUserData] = React.useState();

    const fileUrl = useSelector(state=> state.files.fileUrl);

    const dispatch = useDispatch();

    const history = useHistory();

    const atLeast17 = new Date(Date.now() - 536112000000); // Hoy menos 17 años en milisegundos

    const formik = useFormik({
        initialValues: {
            name: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: "",
            date: "",
        },
        onSubmit: (data) => {
            dispatch(uploadFile(data.photo[0]));
            delete data.photo;
            setUserData(data);
        },
        validationSchema: Yup.object({
            photo: Yup.array().nullable().test(
                "validate-image",
                "El archivo no es válido",
                (value) => {
                    return validImageExtension(value?.[0].name)
                }
            ),
            name: Yup.string().required("El nombre es requerido").min(3, "Minimo 3 letras"),
            lastName: Yup.string().required("El apellido es requerido").min(3, "Minimo 3 letras"),
            email: Yup.string().email("Ingresa un email válido").required("El email es requerido"),
            password: Yup.string().required("La contraseña es requerida").min(10, "Minimo 10 letras"),
            repeatPassword: Yup.string().oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir"),
            date: Yup.date("Ingresa una fecha válida")
            .required("La fecha es requerida")
            .max(atLeast17, "Debes tener al menos 17 años"),
            about: Yup.string().max(100, "Maximo 100 letras"),
        })
    });

    React.useEffect(()=> {
        //REPARAR
        if(userData) { 
            dispatch(createNewUser({...userData, fileUrl}));
            history.push("/login");
        }
    }, [fileUrl]);

    return (
        <PageContainer>
            <h4>Ingrese sus datos</h4>
            <form className="form-reg-user" onSubmit={formik.handleSubmit}>
                <FormDiv>
                    Foto de perfil
                    <Image name="photo" error={formik.errors.photo} onChange={e=>formik.setFieldValue("photo", [...e.target.files])}/>
                    Fecha de nacimiento
                    <Text type="date" name="date" placeholder="Fecha de nacimiento" onChange={formik.handleChange} error={formik.errors.date}/>
                </FormDiv>
                <FormDiv>
                    <Text type="text" name="name" placeholder="Ingrese su nombre" onChange={formik.handleChange} error={formik.errors.name}/>

                    <Text type="text" name="lastName" placeholder="Ingrese su Apellido" onChange={formik.handleChange} error={formik.errors.lastName}/>

                    <Text type="email" name="email" placeholder="Ingrese email" onChange={formik.handleChange} error={formik.errors.email}/>

                    <Text type="password" name="password" placeholder="Ingrese su contraseña" onChange={formik.handleChange} error={formik.errors.password}/>

                    <Text type="password" name="repeatPassword" placeholder="Repita su contraseña" onChange={formik.handleChange} error={formik.errors.repeatPassword}/>
                    
               
                    <Textarea 
                        name="about" 
                        placeholder="Escribe un poco sobre ti" 
                        onChange={formik.handleChange} 
                    ></Textarea>
                </FormDiv>
                
                <FormDiv>
                    <SubmitButton type="submit">Entregar</SubmitButton>
                </FormDiv>
            </form>
        </PageContainer>
    );
}


function validImageExtension(fname) {
    const extensions = ["gif", "png", "jpg", "tiff", "tif", "raw", "bmp", "psd", "pdf", "eps", "svg", "ai"];
    const fileExt = fname?.slice((Math.max(0, fname.lastIndexOf(".")) || Infinity) + 1)?.toLowerCase();
    return  extensions.includes(fileExt);
}