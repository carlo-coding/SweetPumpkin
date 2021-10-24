import Parse from "parse";

const APPLICATION_ID = process.env.PARSE_APPLICATION_ID || '2YSu7dqmdmWtt791VxY3tioYJztLGWVpfXjM3eUU';
const HOST_URL = process.env.PARSE_HOST_URL || 'https://parseapi.back4app.com/';
const JAVASCRIPT_KEY = process.env.PARSE_JAVASCRIPT_KEY || 'hdqhA76TdKyTFP1Udz4ToDzcE1ZQbVNnqlD1uT2x';

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

async function saveUser(userData) {
    const {email, password} = userData;
    await Parse.User.signUp(email, password);
    delete userData.password;
    delete userData.repeatPassword;

    const User = new Parse.Object("Users");
    Object.entries(userData).forEach(feature => User.set(feature[0], feature[1]));
    await User.save();
    return {message: "Usuario ingresado con éxito"}
}

async function login(userData) {
    // Hacemos el login con parse
    const { email, password } = userData;
    await Parse.User.logIn(email, password);
    
    // Buscamos la info del usuario
    const userQuery = new Parse.Query("Users");
    userQuery.equalTo("email", email);
    const user = await userQuery.first();

    return {message: "Logeado con éxito", user: {
            name: user.get("name"),
            lastName: user.get("lastName"),
            email: user.get("email"),
            fileUrl: user.get("fileUrl"),
        }
    };
}

async function currentUser() {
    const currentUser = await Parse.User.current();
    const email = currentUser.get("username");

    // Buscamos la info del usuario
    const userQuery = new Parse.Query("Users");
    userQuery.equalTo("email", email);
    const user = await userQuery.first();
    return {
        user: {
            name: user.get("name"),
            lastName: user.get("lastName"),
            email: user.get("email"),
            fileUrl: user.get("fileUrl"),
        }
    };
}

async function logout() {
    await Parse.User.logOut();
}

export default {
    saveUser,
    login,
    currentUser,
    logout
}