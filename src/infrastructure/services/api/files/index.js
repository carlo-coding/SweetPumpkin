import Parse from "parse";
import axios from "axios";
const createId = ()=> Math.random().toString(16).slice(2);

const APPLICATION_ID = process.env.PARSE_APPLICATION_ID || '2YSu7dqmdmWtt791VxY3tioYJztLGWVpfXjM3eUU';
const HOST_URL = process.env.PARSE_HOST_URL || 'https://parseapi.back4app.com/';
const JAVASCRIPT_KEY = process.env.PARSE_JAVASCRIPT_KEY || 'hdqhA76TdKyTFP1Udz4ToDzcE1ZQbVNnqlD1uT2x';
const REST_API_KEY = process.env.PARSE_REST_API_KEY || "eQkuqwK1kSeWTXfjcBNWmIxpBxpJJeSqeXUTDGJD";

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
Parse.serverURL = HOST_URL;

async function saveFile(file) {
    try {
        // FIRST GET THE FILE ON BASE64
        const id = createId();
        const base64String = await toBase64(file);
        // SAVE THE FILE ON BASE4APP USING PARSE
        const parseFile = new Parse.File("newfile.png", {base64: base64String});
        const TFILE = Parse.Object.extend("Files");
        const tfile = new TFILE();
        tfile.set("file", parseFile);
        tfile.set("fileId", id);
        await tfile.save();
        // ONCE SAVED LOOK FOR THE URL
        const resp = await axios("https://parseapi.back4app.com/classes/Files", {headers: {
                    "X-Parse-Application-Id": APPLICATION_ID,
                    "X-Parse-REST-API-Key": REST_API_KEY
        }}); 
        return resp?.data?.results?.find(item => item.fileId === id)?.file?.url

    }catch(err){ console.log(err) };
}

export default {
    saveFile
}
