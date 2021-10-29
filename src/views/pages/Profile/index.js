import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { properName } from "../../../chest/utils";
import { PageContainer, BackgroundGradient, UserInfo, EditInfo } from "./styles";
import { RiFileEditFill } from "react-icons/ri";

export default function Profile({}) {
    const user = useSelector(state=> state.users.data);


    return (
        <PageContainer>
            <BackgroundGradient />
            <section>
                <img src={user?.fileUrl}/>
                <UserInfo>
                    <span></span>
                    {user && <div>
                        <p>{properName(user.name, user.lastName)}</p>
                        <p>{user.email}</p>
                        {user.about && <p>Sobre {properName(user.name, user.lastName)}: {user.about}</p>}
                    </div>}
                    <span></span>
                </UserInfo>
            </section>

            <EditInfo>
                <Link to={"/profile/"+user.userId}>
                    <p>Editar informacion</p><RiFileEditFill size={30}/>
                </Link>
            </EditInfo>
        </PageContainer>
    );
}