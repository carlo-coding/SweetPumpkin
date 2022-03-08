import 
    React, { 
    useEffect 
} from "react";
import { 
    useDispatch,
    connect
} from "react-redux";
import { 
    Link ,
    useHistory
} from "react-router-dom";
import { 
    properName, warningMessage
} from "../../../chest/utils";
import { 
    PageContainer, 
    FRequests, 
    UserInfo, 
    EditInfo, 
    BlogsContainer,
    ProfileSection,
    BlogContent
} from "./styles";
import {
     RiFileEditFill, 
     RiLockPasswordFill 
    } from "react-icons/ri";
import { 
    MdOutlineArticle 
} from "react-icons/md";
import ReactTooltip from 'react-tooltip';
import { 
    acceptFriend, 
    declineFriend, 
    deleteFriend, 
    getFriendRequests,
    getFriends 
} from "../../../application/actions/friends";
import {
    getBlogs,
} from "../../../application/actions/blogs";
import {
    getCurrentUser
} from "../../../application/actions/users";

import Avatar from "@mui/material/Avatar";

import { createId } from "../../../chest/utils";

import Swal from "sweetalert2";
import Blog from "../../components/Blog";

import { BsFillChatLeftTextFill } from "react-icons/bs";

import LiveChat from "../../components/LiveChat";


function Profile({ friendRequests, friends, blogs, user }) {

    useEffect(()=> { 
        dispatch(getCurrentUser());
        dispatch(getFriendRequests());
        dispatch(getBlogs());
        dispatch(getFriends());
     }, []);
    
    const dispatch = useDispatch();


    return <>
        <PageContainer> 
            <div>
                <EditInfo>
                    <Link to={"/edit-info"} data-tip="Editar información">
                        <RiFileEditFill size={25}/>
                    </Link>
                    <Link to={"/change-password"} data-tip="Cambiar contraseña">
                        <RiLockPasswordFill size={25}/>
                    </Link>
                    <Link to={"/write-blog"} data-tip="Crear blog">
                        <MdOutlineArticle size={25}/>
                    </Link>
                </EditInfo>

                <ProfileSection>
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
                </ProfileSection>

                <HandleFriends {...{ friendRequests, friends, user }}/>

                <HandleBlogs {...{blogs}}/>

                <ReactTooltip />
            </div>
        </PageContainer>
    </>;
}

function HandleBlogs({ blogs }) {
    return (
        <BlogsContainer>
            <p>Publicaciones</p>
            {blogs && (
                blogs.map((blog)=> <Blog key={createId()} {...{blog}}/>)
                )
            }
        </BlogsContainer>
    );
}

function HandleFriends({ friendRequests, friends, user }) {

    const [openModal, setOpenModal] = React.useState(false);

    const [receiver, setReceiver] = React.useState({});

    const handleChatClick = (fr)=> {
        setReceiver(fr);
        setOpenModal(true)
    }

    const dispatch = useDispatch();

    const handleDeleteFriend = async (fr) => {
        let msg = `¿ Seguro que quieres eliminar a ${fr.name} ?`
        const confirmed = await warningMessage(msg)
        if (confirmed) {
            dispatch(deleteFriend(fr))
        }
    }

    return (
        <FRequests>
            {user && (
                <LiveChat 
                    {...{
                        receiver,
                        openModal, 
                        setOpenModal
                    }}
                />
            )}
                <div> 
                    <p>Amigos</p>
                    {(friends?.length > 0 ) && (
                        <div>
                            {friends.map((fr, i)=> (
                                <div key={i}>
                                    <img src={fr.fileUrl} alt="friend-image"/> 
                                    <Link to={"/profile/"+fr.userId}>{fr.name}</Link>

                                    <button 
                                        onClick={_=>handleDeleteFriend(fr)}
                                    >Eliminar</button>

                                    <BsFillChatLeftTextFill 
                                        onClick={_=>handleChatClick(fr)}
                                    />

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
                                    <Avatar src={fr?.fromUser.fileUrl}/>
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

function mapStateToProps(state) {
    return {
        friendRequests: state.friends.friendRequests, 
        friends: state.friends.friends,
        user: state.users.data,
        blogs: state.blogs.all,
    }
}

export default connect(mapStateToProps)(Profile);