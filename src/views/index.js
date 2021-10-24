import React, { useEffect } from 'react';
import { resetAlert } from "../application/actions/alert";
import { getCurrentUser } from "../application/actions/users";
import { useSelector, useDispatch } from 'react-redux';
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Swal from "sweetalert2";
const id = () =>"id" + Math.random().toString(16).slice(2);

export default function MainView({}) {
    const dispatch = useDispatch();
    const alert = useSelector((state)=>state.alert);
     
    useEffect(()=> {
        if (alert.show) {
            Swal.fire({
                position: 'top-end',
                icon: alert.type,
                html: `<p style="font-family:'Poppins',sans-serif;font-size:1.3rem">${alert.message}</p>`,
                showConfirmButton: false,
                timer: 1500
            }).then(()=> {
                dispatch(resetAlert);
            })
        }
    }, [alert]);

    useEffect(()=> { dispatch(getCurrentUser) }, []);
    return (
        <BrowserRouter>
            <Navbar />
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
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                </Switch>
        </BrowserRouter>
    )
}