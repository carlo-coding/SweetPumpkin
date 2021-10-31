import Parse from "parse";
import { parseObjectToUser, createId } from "../../../../chest/utils";
const APPLICATION_ID = process.env.PARSE_APPLICATION_ID || '2YSu7dqmdmWtt791VxY3tioYJztLGWVpfXjM3eUU';
const HOST_URL = process.env.PARSE_HOST_URL || 'https://parseapi.back4app.com/';
const JAVASCRIPT_KEY = process.env.PARSE_JAVASCRIPT_KEY || 'hdqhA76TdKyTFP1Udz4ToDzcE1ZQbVNnqlD1uT2x';

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

async function saveUser(data) {
    let userData = data;
    userData.userId = createId();
    
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

    return {message: "Logeado con éxito", user: parseObjectToUser(user)};
}

async function currentUser() {
    const currentUser = await Parse.User.current();
    const email = currentUser?.get("username");

    let payload = {user: null};
    if (email) {
        // Buscamos la info del usuario
        const userQuery = new Parse.Query("Users");
        userQuery.equalTo("email", email);
        const user = await userQuery.first();
        payload.user = parseObjectToUser(user);

        
    }

    return payload
}

async function getAll() {
    const query = new Parse.Query("Users");
    const users = await query.findAll();
    const payload = users.map(parseObjectToUser);
    return payload;
}

async function logout() {
    await Parse.User.logOut();
}

async function byId(id) {
    // Buscamos la info del usuario
    const userQuery = new Parse.Query("Users");
    userQuery.equalTo("userId", id);
    const user = await userQuery.first();

    return {user: parseObjectToUser(user)};
}

async function update(user) {
    const userQuery = new Parse.Query("Users");
    userQuery.equalTo("userId", user.userId);
    const foundUser = await userQuery.first();

    foundUser.set("name", user.name)
    foundUser.set("lastName", user.lastName)
    foundUser.set("email", user.email)
    foundUser.set("about", user.about)
    foundUser.set("fileUrl", user.fileUrl)

    foundUser.save();

    return {message: "Editado con éxito"}


}
       
export default {
    saveUser,
    login,
    currentUser,
    logout,
    getAll,
    byId,
    update,
}