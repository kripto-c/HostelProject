const initialState = {
    rooms: [],
}

function rootReducer(state= initialState, action) {
    switch(action.type) {
        case "GET_ROOMS":
            return {
                ...state,
                rooms: action.payload
            }
        default:
            return state
    }
}