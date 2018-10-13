//making a reducer in redux store for auth state

export default function(state = {}, action) {
    console.log(action);
    switch (action.type) {
        default:
            return state;
    }
}
