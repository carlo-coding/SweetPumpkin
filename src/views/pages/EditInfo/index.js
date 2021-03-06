import React, { useEffect } from "react";
import {useUpdateEffect} from "../../../chest/CustomHooks";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, updateProfileImage } from "../../../application/actions/users";
import Text from "../../components/Validations/Text";
import {Image, USLImage, validImageExtension} from "../../components/Validations/Image";
import { PageContainer, SubmitButton, Textarea } from "./styles";



export default function RegisterUser({}) {
    const user = useSelector(state => state.users.data);
    
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            photo: "",
            name: "",
            lastName: "",
            email: "",
        },
        onSubmit: (data) => {
            const {userId} = user;
            dispatch(updateUser({...data, userId}))
            if (data.photo?.[0]) {
                dispatch(updateProfileImage(data.photo?.[0]));
            }
        },
        validationSchema: Yup.object({
            photo: Yup.array().nullable().test(
                "validate-image",
                "El archivo no es válido",
                (value) => {
                    if (value?.[0].name) {
                        return validImageExtension(value?.[0].name);
                    }else if (user?.fileUrl){
                        return true
                    }
                }
            ),
            name: Yup.string().required("El nombre es requerido").min(3, "Minimo 3 letras"),
            lastName: Yup.string().required("El apellido es requerido").min(3, "Minimo 3 letras"),
            email: Yup.string().email("Ingresa un email válido").required("El email es requerido"),
            about: Yup.string(),
        })
    });

    
    return (
        <PageContainer>
            <h4>Editar informacion</h4>
            <form className="form-reg-user" onSubmit={formik.handleSubmit}>
                Foto de perfil
                {user &&<USLImage name="photo"
                onChange={e=>formik.setFieldValue("photo", [...e.target.files])} 
                {...{user, formik}}/>}
                
                <USLInput 
                    type="text" name="name" placeholder="Ingrese su nombre" 
                    {...{user, formik}}
                />

                <USLInput 
                    type="text" name="lastName" placeholder="Ingrese su nombre" 
                    {...{user, formik}}
                />

                <USLInput 
                    type="text" name="email" placeholder="Ingrese su nombre" 
                    {...{user, formik}}
                />

                <USLInput 
                    name="about" placeholder="Escribe un poco sobre ti" 
                    {...{user, formik, Component: Textarea}}
                />

                <SubmitButton type="submit">Editar</SubmitButton>
                
            </form>
        </PageContainer>
    );
}





function USLInput({user, formik, Component=Text,...args}) {

    /* Hago uso de un generador porque no puedo usar el estado de user como valor inicial de formik entonces opto
    por usarlo en la propiedad value de forma condicional haciendo que en las primeras renderizaciones se verifique 
    que el valor en el input esta vacio y siempre y cuando sea asi mandar el valor en el estado del user, cuando 
    se ingrese un valor se deja de ejecutar el primer bucle y pasa al segundo en donde siempre se manda el valor 
    del input manejado por formik, el generador lo guardo en un useRef para qye no se reinicie en cada renderizacion
     */
    function* counterGen() {
        let value = yield false;
        while (!value) {
            value = yield false;
        }
        while(true){
            yield true
        }
    }

    const counter = React.useRef(counterGen());
    
    return (
        <Component
        {...args} 
        onChange={formik.handleChange} 
        error={formik.errors[args.name]} 
        value={counter.current.next(formik.values[args.name]).value? formik.values[args.name] : user?.[args.name]}/>
    )
}
