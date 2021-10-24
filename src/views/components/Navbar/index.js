import { Nav } from "./styles.js";
import React from "react";
import { logOut } from "../../../application/actions/users"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar({}) {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state=> state.users.loggedIn)

    const handleLogout = e=> {
        e.preventDefault();
        dispatch(logOut)
    }

    return (
        <Nav>
            <Link to="/">Inicio</Link>
            {loggedIn? <>
                <Link to="/profile">Perfil</Link>
                <Link onClick={handleLogout}>Salir</Link>
            </> : <>
                <Link to="/signup">Registrarse</Link>
                <Link to="/login">Iniciar sesión</Link>
            </>}
        </Nav>
    )
}