
import { GET_REVIEW, POST_REVIEW, GET_CLIENT,FILTER_TYPE_BATHROOM, FILTER_TYPE_ROOM } from "../actions/index.js";


const initialState = {
    rooms: [],
    reviews: [],
    client:[]
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
                const filteredRooms = state.rooms
                let filter = 
                action.payload === "Publico"
                ? filteredRooms.filter((r) => r.type === "Público") : filteredRooms.filter((r) => r.type === "Privado")
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
              case GET_CLIENT:{
                return{
                ...state,
                   client:action.payload
                }
              }

        default:
            return state
    }
}