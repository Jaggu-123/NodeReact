import axios from "axios";

import { FETCH_USER } from "./types";

//ajax request to backend server for getting current_user
export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
};
