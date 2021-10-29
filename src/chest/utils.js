export const createId = ()=> Math.random().toString(16).slice(2);

export const parseObjectToUser = (parseObject) => ({  // ONLY USE ON API
    name: parseObject?.get("name"),
    lastName: parseObject?.get("lastName"),
    email: parseObject?.get("email"),
    fileUrl: parseObject?.get("fileUrl"),
    about: parseObject?.get("about"),
    userId: parseObject?.get("userId"),
})

export function theyMatch(str1, str2) {
    const simplifiedStr1 = str1.toLowerCase().split(" ").join("");
    const simplifiedStr2 = str2.toLowerCase().split(" ").join("");
    return Boolean(simplifiedStr1.match(new RegExp(simplifiedStr2)));
}

export function properName(name, lastName) {
    return name.charAt(0).toUpperCase()+name.slice(1)+" "+lastName.charAt(0).toUpperCase()+lastName.slice(1);
}