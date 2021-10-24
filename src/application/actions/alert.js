export const SHOW_SUCCESS = '[alert] show success';
export const SHOW_WARNING = '[alert] show warning';
export const SHOW_ERROR = '[alert] show error';
export const RESET_ALERT = '[alert] reset alert';

export const showSuccess = (message) => ({
    type: SHOW_SUCCESS,
    payload: message,
});
export const showWarning = (message) => ({
    type: SHOW_WARNING,
    payload: message,
});
export const showError = (message) => ({
    type: SHOW_ERROR,
    payload: message,
});

export const resetAlert = {type: RESET_ALERT};