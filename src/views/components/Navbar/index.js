import { Nav } from "./styles.js";
import React from "react";
import { logOut } from "../../../application/actions/users"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function Navbar({}) {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state=> state.users.loggedIn)

    const handleLogout = async e=> {
        e.preventDefault();
        const { isConfirmed } = await Swal.fire({
            html: `<p>¿Seguro que quieres cerrar sesión?</p>`,
            showDenyButton: true,
            confirmButtonText: 'Cerrar sesión',
            denyButtonText: `Cancelar`,
            denyButtonColor: "#D9D9D9",
            confirmButtonColor: "#6A18B8",
            showClass: {
                popup: "animate__fadeIn"
            },
            hideClass: {
                popup: "animate__fadeOut"
            }
        });
        if (isConfirmed) {
            dispatch(logOut());
        }
    }

    //React.useEffect(()=> { console.log(loggedIn)}, [loggedIn]);

    return (
        <Nav>
            <Link to="/">Inicio</Link>
            {loggedIn? <>
                <Link to="/search/user">Buscar usuario</Link>
                <Link to="/profile">Perfil</Link>
                <Link to="" onClick={handleLogout}>Salir</Link>
            </> : <>
                <Link to="/signup">Registrarse</Link>
                <Link to="/login">Iniciar sesión</Link>
            </>}
        </Nav>
    )
}