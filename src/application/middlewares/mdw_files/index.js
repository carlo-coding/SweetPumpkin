import { UPLOAD_FILE, fileInfo } from "../../actions/files";

export const flowUploadFile = ({ api, log }) => ({ dispatch }) => next => async action => {
    log(action.type)
    if (action.type === UPLOAD_FILE) {
        const fileUrl = await api.files.saveFile(action.payload);
        dispatch(fileInfo(fileUrl));
    }
    next(action);
}