import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { properName } from "../../../chest/utils";
import { PageContainer, BackgroundGradient, UserInfo, EditInfo } from "./styles";
import { RiFileEditFill, RiLockPasswordFill } from "react-icons/ri";
import ReactTooltip from 'react-tooltip';

export default function Profile({}) {
    const user = useSelector(state=> state.users.data);

    console.log("USUARIO: ", user);
    return (
        
        <PageContainer> 
            <section>
                <span>
                    <img src={user?.fileUrl} alt="profile picture"/>
                </span>
                {!(user?.emailVerified) && <span>Verifica tu email</span>}
                <UserInfo>
                    <span></span>
                    {user && <div>
                        <p>{properName(user.name, user.lastName)}</p>
                        <p>{user.email}</p>
                        {user.about && <p>Sobre {properName(user.name)}: {user.about}</p>}
                        {user.date && <p>Fecha de nacimiento {user.date}</p>}
                    </div>}
                    <span></span>
                </UserInfo>
            </section>

            <EditInfo>
                <Link to={"/edit-info"} data-tip="Editar información">
                    <RiFileEditFill size={30}/>
                </Link>
                <Link to={"/change-password"} data-tip="Cambiar contraseña">
                    <RiLockPasswordFill size={30}/>
                </Link>
            </EditInfo>
            <ReactTooltip />
        </PageContainer>
    );
}