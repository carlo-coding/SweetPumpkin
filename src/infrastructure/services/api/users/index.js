import Parse from "parse";
import { parseObjectToUser, createId } from "../../../../chest/utils";

const APPLICATION_ID = process.env.PARSE_APPLICATION_ID;
const HOST_URL = process.env.PARSE_HOST_URL;
const JAVASCRIPT_KEY = process.env.PARSE_JAVASCRIPT_KEY;

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);

Parse.serverURL = HOST_URL;

async function saveUser(data) {
    // Insert a custom id to the data
    let userData = data;
    userData.userId = createId();
    
    // Separate the email and password to signup 
    const {email, password} = userData;
    const currentUser = await Parse.User.signUp(email, password);

    // Delete passwords so they wont be saved directly
    delete userData.password;
    delete userData.repeatPassword;

    // Guardamos los datos restantes en el usuario creado
    Object.entries(userData).forEach(feature => currentUser.set(feature[0], feature[1]));
    await currentUser.save();

    return {message: "Usuario ingresado con éxito"}
}

async function login(userData) {
    // Hacemos el login con parse
    const { email, password } = userData;
    const user = await Parse.User.logIn(email, password);
    
    return {message: "Logeado con éxito", user: parseObjectToUser(user)};
}

async function currentUser() {
    const currentUser = await Parse.User.current();

    const payload = parseObjectToUser(currentUser);

    return payload;
}

async function getAll() {
    const query = new Parse.Query("User");
    const users = await query.findAll();
    const payload = users.map(parseObjectToUser);
    return payload;
}

async function logout() {
    await Parse.User.logOut();
}

async function byId(id) {
    // Buscamos la info del usuario
    const userQuery = new Parse.Query("User");
    userQuery.equalTo("userId", id);
    const user = await userQuery.first();
    return {user: parseObjectToUser(user)};
}

async function update(user) {
    const userQuery = new Parse.Query("User");
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

async function passwordReset(email) {
    await Parse.User.requestPasswordReset(email);
    return {message: "Te hemos enviado un email para cambiar tu contraseña"}
}
       
export default {
    saveUser,
    login,
    currentUser,
    logout,
    getAll,
    byId,
    update,
    passwordReset
}