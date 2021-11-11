import React, { useEffect } from 'react';
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchUser from "./pages/SearchUser";
import EffectsManagement from "./components/EffectsManagement";
import PublicProfile from "./pages/PublicProfile";
import PasswordReset from './pages/PasswordReset';
import EditInfo from "./pages/EditInfo";
import { HashRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MainView({}) {
    const user = useSelector(state=> state.users.data);

    return (
        <HashRouter>
            <Navbar />
                <EffectsManagement />
                <Switch>
                    <Route exact path="/"> 
                        <Home />
                    </Route>
                    <Route exact path="/signup" >
                        <RegisterUser />
                    </Route> 
                    <Route exact path="/login" >
                        <Login />
                    </Route>
                    <Route exact path="/change-password">
                        <PasswordReset />
                    </Route> 
                    {/*RUTAS RESERVADAS PARA CUANDO EL USUARIO ESTÉ LOGEADO.*/}
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Route exact path="/profile/:id">
                            <PublicProfile />
                        </Route>
                        <Route exact path="/search/user">
                            <SearchUser />
                        </Route>
                        <Route exact path="/edit-info">
                            <EditInfo />
                        </Route>    
                </Switch>
        </HashRouter>
    )
}  