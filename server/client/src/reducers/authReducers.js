import { FETCH_USER } from "../actions/types";

//making a reducer in redux store for auth state

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}
