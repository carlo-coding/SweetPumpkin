import React, { useState, useEffect } from "react";
import { PageContainer } from "./styles";
import { useDispatch, useSelector, connect } from "react-redux";
import { theyMatch, properName, createId } from "../../../chest/utils";
import { getAllUsers } from "../../../application/actions/users";
import { sendFriendRequest } from "../../../application/actions/friends";
import { Grid, UserCard } from "./styles";
import { Link } from "react-router-dom";
import AutoComplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


function SearchUser({ users , friends }) {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    useEffect(()=> { dispatch(getAllUsers()) }, []);

    return (
        <PageContainer>
            {users && (
                <AutoComplete 
                    id="combo-box-demo"
                    options={ users?.map(u=>({label: properName(u.name, u.lastName)}))}
                    sx={{ width: 400 }}
                    value={query}
                    onChange={(_, newValue)=> setQuery(newValue)}
                    renderInput={(params) => <TextField {...params} label="Buscar" />}
                />
            )}
            <Grid>
            {users?.filter(u=>theyMatch(properName(u.name, u.lastName), query?.label || "")).map(user=> {
                return (
                    <UserCard key={createId()}>
                        <img src={user.fileUrl}/>
                        <p>{properName(user.name, user.lastName)}</p>
                        <p>{
                            (user.about)
                            ? user.about?.slice(0, 100) + (user.about?.length>100 ? "..." : "")
                            : ""
                        }</p>
                        {!user.emailVerified && <small>Email sin verificar</small>}
                        <div>
                            <Link to={"/profile/"+user.userId} >Visitar</Link>
                            {!(friends?.find(friend => friend.userId === user.userId))
                            ?<Link to={"/"} onClick={e=>{
                                e.preventDefault();
                                dispatch(sendFriendRequest(user.userId));
                            }}>Agregar</Link>
                            :<></> 
                        }
                        </div>
                    </UserCard>
                )
            })}
            </Grid>
        </PageContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.all,
        friends: state.friends.friends
    }
}

export default connect(mapStateToProps)(SearchUser);