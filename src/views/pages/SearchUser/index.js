import React, { useState, useEffect } from "react";
import { PageContainer } from "./styles";
import { useDispatch, useSelector, connect } from "react-redux";
import { theyMatch, properName, createId } from "../../../chest/utils";
import Search from "../../components/Search";
import { getAllUsers } from "../../../application/actions/users";
import { Grid, UserCard } from "./styles";
import { Link } from "react-router-dom"

function SearchUser({users}) {
    const allUsers = useSelector(state=>state.users.all);
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    useEffect(()=> { dispatch(getAllUsers) }, []);


    return (
        <PageContainer>
            <Search {...{query, setQuery, items: users?.map(u=>properName(u.name, u.lastName))}}></Search>
            <Grid>
            {users?.filter(u=>theyMatch(properName(u.name, u.lastName), query)).map(user=> {
                return (
                    <UserCard key={createId()}>
                        <img src={user.fileUrl}/>
                        <p>{properName(user.name, user.lastName)}</p>
                        <p>{user.about.slice(0, 100) + (user.about.length>100 ? "..." : "")}</p>
                        {!user.emailVerified && <small>Email sin verificar</small>}
                        <div>
                            <Link to={"/profile/"+user.userId} >Visitar</Link>
                            <Link to={"/profile/"+user.userId} >Agregar</Link>
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
        users: state.users.all
    }
}

export default connect(mapStateToProps)(SearchUser);