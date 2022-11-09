import { GET_REVIEW, POST_REVIEW } from "../actions/index.js";
const initialState = {
    rooms: [],
    reviews: [],
}

export default function rootReducer(state= initialState, action) {
    switch(action.type) {
        case "GET_ROOMS":
            return {
                ...state,
                rooms: action.payload
            }
            case POST_REVIEW: {
                return {
                  ...state,
                };
              }
              case GET_REVIEW:{
                return{
                  ...state,
                  reviews:action.payload,
                }
              }
        default:
            return state
    }
}