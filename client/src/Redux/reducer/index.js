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
            };
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
              case FILTER_TYPE_ROOM: {
                const filteredRooms = state.type
                let filter = 
                action.payload === "Publico"
                ? filteredRooms.filter((t) => t.type === "Público") : filteredRooms.filter((t) => t.type === "Privado")
                if(action.payload === "Todo") filter = filteredRooms
                return{
                  ...state,
                  type: filter,
                }
              }
              case FILTER_TYPE_BATHROOM: {
                const filteredBathrooms = state.rooms
                let filter = 
                action.payload === "Publico"
                ? filteredBathrooms.filter((b) => b.bathroom === "Público") : filteredBathrooms.filter((b) => b.bathroom === "Privado")
                if(action.payload === "Todo") filter = filteredBathrooms
                return {
                  ...state,
                  rooms: filter
                }
              }

        default:
            return state
    }
}