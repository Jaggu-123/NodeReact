import axios from "axios";

import { FETCH_USER } from "./types";

//ajax request to backend server for getting current_user
export const fetchUser = () => {
    return function(dispatch) {
        axios
            .get("/api/current_user")
            .then(res => dispatch({ type: FETCH_USER, payload: res }));
    };
};
