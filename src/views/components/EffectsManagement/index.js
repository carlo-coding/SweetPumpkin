import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { resetAlert } from "../../../application/actions/alert";
import { setLocation } from "../../../application/actions/location";
import { getCurrentUser, getAllUsers } from "../../../application/actions/users";
import { getBlogs } from "../../../application/actions/blogs";
import { getFriendRequests } from "../../../application/actions/friends";

export default function EffectsManagement({}) {
    const alert = useSelector((state)=>state.alert);
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
            }).then(()=> {
                dispatch(resetAlert);
            })
        }
    }, [alert]);

    useEffect(()=> { 
        dispatch(getCurrentUser);
        dispatch(getFriendRequests());
        dispatch(getBlogs());
     }, []);


    useEffect(()=> { 
        if (location.go) {
            history.push(location.href);
            dispatch(setLocation({href: "", go: false}))
        }
    }, [location]);

    return <></>
}