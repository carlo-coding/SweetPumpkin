import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { resetAlert } from "../../../application/actions/alert";
import { setLocation } from "../../../application/actions/location";
import { getCurrentUser, getAllUsers } from "../../../application/actions/users";
import { getBlogs } from "../../../application/actions/blogs";
import { getFriendRequests, getFriends } from "../../../application/actions/friends";
import 'animate.css';

export default function EffectsManagement({}) {
    const alert = useSelector((state)=>state.alert);
    const user = useSelector((state)=>state.users);
    const location  = useSelector((state)=>state.location);
    const dispatch = useDispatch();
    const history = useHistory();
     
    useEffect(()=> {
        if (alert.show) {
            Swal.fire({
                position: 'top-end',
                icon: alert.type,
                html: `<p style="font-family:'Poppins',sans-serif;font-size:1.3rem">${alert.message}</p>`,
                showConfirmButton: false,
                timer: 3000,
                showClass: {
                    popup: "animate__fadeIn"
                },
                hideClass: {
                    popup: "animate__fadeOut"
                }
            }).then(()=> {
                dispatch(resetAlert);
            })
        }
    }, [alert]);


    useEffect(()=> { 
        if (location.go) {
            history.push(location.href);
            dispatch(setLocation({href: "", go: false}))
        }
    }, [location]);

    return <></>
}