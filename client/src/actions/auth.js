
import { setCurrentUser } from "./currentUser"
import * as api from "../api";

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData);
        dispatch({ type: "AUTH", data: data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
        navigate("/home");
    }
    catch (error) {
        console.log(error);
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData);
        dispatch({ type: "AUTH", data: data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
        dispatch({ type: "POST_LOGIN_DETAILS", payload: data });
        navigate("/home");
    }
    catch (error) {
        console.log(error);
    }
}
