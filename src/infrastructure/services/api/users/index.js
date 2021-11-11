import Parse from "parse";
import { parseObjectToUser, createId } from "../../../../chest/utils";
import { APPLICATION_ID, HOST_URL , JAVASCRIPT_KEY, REST_API_KEY } from "../../../../chest/config"; 

function initializeParse() {
    Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
    Parse.serverURL = HOST_URL;
}

async function saveUser(data) {
    initializeParse()
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
    initializeParse();
    // Hacemos el login con parse
    const { email, password } = userData;
    const user = await Parse.User.logIn(email, password);
    
    return {message: "Logeado con éxito", user: parseObjectToUser(user)};
}

async function currentUser() {
    initializeParse();
    const currentUser = await Parse.User.current();

    const payload = parseObjectToUser(currentUser);

    return payload;
}

async function getAll() {
    initializeParse();
    const query = new Parse.Query("User");
    const users = await query.findAll();
    const payload = users.map(parseObjectToUser);
    return payload;
}

async function logout() {
    initializeParse();
    await Parse.User.logOut();
}

async function byId(id) {
    initializeParse();
    // Buscamos la info del usuario
    const userQuery = new Parse.Query("User");
    userQuery.equalTo("userId", id);
    const user = await userQuery.first();
    return {user: parseObjectToUser(user)};
}

async function update(user) {
    initializeParse();
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
    initializeParse();
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