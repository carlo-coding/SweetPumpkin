import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { properName } from "../../../chest/utils";
import { PageContainer, FRequests, UserInfo, EditInfo, BlogsContainer } from "./styles";
import { RiFileEditFill, RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineArticle } from "react-icons/md";
import ReactTooltip from 'react-tooltip';
import { acceptFriend, declineFriend, deleteFriend } from "../../../application/actions/friends";

export default function Profile({}) {
    const user = useSelector(state=> state.users.data);


    const { friendRequests } = useSelector(state=> state.friends);

    
    const dispatch = useDispatch();


    return <>
        
        <PageContainer> 
            <HandleFriends {...{user, friendRequests, dispatch}}/>
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
                <Link to={"/write-blog"} data-tip="Crear blog">
                    <MdOutlineArticle size={30}/>
                </Link>
            </EditInfo>

            <HandleBlogs/>

            <ReactTooltip />
        </PageContainer>
    </>;
}


function HandleBlogs() {
    const blogs = useSelector(state=> state.blogs.all);
    return (
        <BlogsContainer>
            <p>Publicaciones</p>
            {blogs && (
                blogs.map(blog=> <>
                    {blog.date && <p>Fecha: {blog.date}</p>}
                    <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
                </>)
                )
            }
        </BlogsContainer>
    );
}

function HandleFriends({user, friendRequests, dispatch}) {
    return (
        <FRequests>
                <div>
                    <p>Amigos</p>
                    {(user?.friends?.length > 0 ) && (
                        <div>
                            {user.friends.map((fr, i)=> (
                                <div key={i}>
                                    <img src={fr.fileUrl} alt="friend-image"/> 
                                    <Link to={"/profile/"+fr.userId}>{fr.name}</Link>
                                    <button onClick={_=>dispatch(deleteFriend(fr))}>Eliminar</button>
                                </div>
                            ))}
                        </div>
                    ) }
                </div>
                <div>
                <p>Solicitudes de amistad</p>
                    {(friendRequests?.length > 0 ) && (
                        <div>
                            {friendRequests.map((fr, i)=> (
                                <div key={i}>
                                    <Link to={"/profile/"+fr?.fromUser.userId}>{fr?.fromUser.name}</Link>
                                    <button onClick={_=>dispatch(acceptFriend(fr))}>Aceptar</button>
                                    <button onClick={_=>dispatch(declineFriend(fr))}>Denegar</button>
                                </div>
                            ))}
                        </div>
                    ) }
                </div>
            </FRequests>
    );
}