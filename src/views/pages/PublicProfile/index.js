import React, { useEffect, } from "react";
import { getUserById } from "../../../application/actions/users";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { properName } from "../../../chest/utils";
import { PageContainer, BackgroundGradient, UserInfo, EditInfo } from "./styles";
import { RiFileEditFill } from "react-icons/ri";
 
export default function Profile({}) {
    const user = useSelector(state=> state.users.foundUser);
    const dispatch = useDispatch();
    const { id } = useParams();

    console.log(user)

    useEffect(()=> {
        dispatch(getUserById(id))
    }, [id]);


    return <>
        {user?.name? <PageContainer>
            <section>
            <span>
                    <img src={user?.fileUrl} alt="profile picture"/>
                </span>
                <UserInfo>
                    <span></span>
                    <div>
                        <p>{properName(user.name, user.lastName)}</p>
                        <p>{user.email}</p>
                        {user.about && <p>Sobre {properName(user.name, user.lastName)}: {user.about}</p>}
                        {user.date && <p>Fecha de nacimiento {user.date}</p>}
                    </div>
                    <span></span>
                </UserInfo>
            </section>

        </PageContainer>
        
        :
        <PageContainer>Usuario no encontrado</PageContainer>}
    </>
}