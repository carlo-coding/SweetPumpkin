export const UPLOAD_FILE = "[files] upload file";
export const FILE_INFO = "[files] file info";

export const uploadFile = (file) => {
    return {
        type: UPLOAD_FILE,
        payload: file
    }
}

export const fileInfo = (fileId) => ({
    type: FILE_INFO,
    payload: fileId
})

/*
const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.addEventListener("load", (e)=> {
        const base64String = window.btoa(e.target.result);
        console.log(base64String);
        return {
            type
        }
    }); */