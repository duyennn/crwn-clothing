const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, //everything else on the state
                currentUser: action.payload //setting currentUser value to payload
            }

        default:
            return state;
    }
}

export default userReducer;