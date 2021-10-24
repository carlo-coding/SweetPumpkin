import React from "react";
import { useSelector } from "react-redux";
import { PageContainer, BackgroundGradient, UserInfo } from "./styles";

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
                        <p>{user.name+" "+user.lastName}</p>
                        <p>{user.email}</p>
                    </div>}
                    <span></span>
                </UserInfo>
            </section>
        </PageContainer>
    );
}