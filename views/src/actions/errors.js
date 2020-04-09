import { ERRORS_RETURNED, ERRORS_LOGGED, ERRORS_CLEARED } from "./types";
import axios from "axios";

/**
 * @summary return errors to UI
 * @param  {String} message - error message
 * @param  {Number} status - http status code
 * @param  {String} id - error identification
 * @return {Object} action type and payload
 */
export const returnErrors = (message, status, id = null) => {
    return {
        type: ERRORS_RETURNED,
        payload: { message, status, id }
    };
};

/**
 * @param  {} error
 * @param  {} errorInfo
 * @param  {function} dispatch -
 * @return {Object} action type and payload
 */
export const logErrors = (error, errorInfo) => dispatch => {
    axios.post("/api/errors", { error, errorInfo})
    .then(res => dispatch({
        type: ERRORS_LOGGED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) {
            dispatch(
                returnErrors(err.response.data, err.response.status, "LOGGING_ERROR")
            );
        } else if(err.request) {
            dispatch(
                returnErrors(err.request.data, err.request.status, "LOGGING_ERROR")
            );
        } 
        dispatch(
            returnErrors("An error occurred", 500, "LOGGING_ERROR")
        );
    });
};

/**
 * @summary clears UI errors
 * @return {Object} action type
 */
export const clearErrors = () => {
    return {
        type: ERRORS_CLEARED
    };
};