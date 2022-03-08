import Swal from "sweetalert2";

export const createId = ()=> Math.random().toString(16).slice(2);

 // ONLY USE ON API
export const parseObjectToUser = (parseObject) => parseObject
? ({
    name: parseObject?.get("name"),
    lastName: parseObject?.get("lastName"),
    email: parseObject?.get("email"),
    fileUrl: parseObject?.get("fileUrl"),
    about: parseObject?.get("about"),
    userId: parseObject?.get("userId"),
    date: parseObject?.get("date"),
    emailVerified : parseObject?.get("emailVerified"),
    friends : parseObject?.get("friends"),
}) 
: undefined;

export function theyMatch(str1="", str2="") {
    const simplifiedStr1 = str1.toLowerCase().split(" ").join("");
    const simplifiedStr2 = str2.toLowerCase().split(" ").join("");
    return Boolean(simplifiedStr1.match(new RegExp(simplifiedStr2)));
}

export function properName(name="", lastName="") {
    return name?.charAt(0).toUpperCase()+name?.slice(1)+" "+lastName?.charAt(0).toUpperCase()+lastName?.slice(1);
}

export const calcRating = (ratingList) => ratingList?.length && Math.round(ratingList.reduce((curr, acc)=> curr + acc) /  ratingList.length * 100)/100;


export const warningMessage = async (msg) => {
    const { isConfirmed } = await Swal.fire({
        position: 'top-end',
        icon: "warning",
        html: `
            <p style="font-family:'Poppins',sans-serif;font-size:1.3rem">
                ${msg}
            </p>`,
        showConfirmButton: true,
        showDenyButton: true,
        denyButtonColor: "gray",
        confirmButtonColor: "#6314a8",
        denyButtonText: "Cancelar",
        confirmButtonText: "Aceptar",
        showClass: {
            popup: "animate__fadeIn"
        },
        hideClass: {
            popup: "animate__fadeOut"
        }
    })

    return isConfirmed;
}

export const setEachEntry = (parseObject, jsObject) => {
    Object.entries(jsObject).forEach(feature => parseObject.set(feature[0], feature[1]));
}