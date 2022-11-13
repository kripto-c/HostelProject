import {
  GET_REVIEW,
  POST_REVIEW,
  GET_CLIENT,
  FILTER_TYPE_ROOM,
} from "../actions/index.js";

const initialState = {
  rooms: [],
  allRooms: [],
  reviews: [],
  client: [],
  roomdetail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ROOMS":
      return {
        ...state,
        rooms: action.payload,
        allRooms: action.payload,
      };
    case POST_REVIEW: {
      return {
        ...state,
      };
    }
    case GET_REVIEW: {
      return {
        ...state,
        reviews: action.payload,
      };
    }
    case FILTER_TYPE_ROOM: {
      let filterRoom = state.allRooms;
      let roomType;
      if (action.payloadOne && action.payloadTwo) {
        roomType =
          action.payloadOne === "roomPrivate"
            ? filterRoom.filter((e) => e.type.type === "Privado")
            : filterRoom.filter((e) => e.type.type === "Publico");

        roomType =
          action.payloadTwo === "batchroomPrivate"
            ? roomType.filter((e) => e.bathroom === true)
            : roomType.filter((e) => e.bathroom === false);
<<<<<<< Updated upstream
        console.log("ENTRO ACA 2 JUNTOS");
=======
>>>>>>> Stashed changes
      } else {
        if (action.payloadTwo) {
          roomType =
            action.payloadTwo === "batchroomPrivate"
              ? filterRoom.filter((e) => e.bathroom === true)
              : filterRoom.filter((e) => e.bathroom === false);
        } else {
          roomType =
            action.payloadOne === "roomPrivate"
              ? filterRoom.filter((e) => e.type.type === "Privado")
              : filterRoom.filter((e) => e.type.type === "Publico");
        }
<<<<<<< Updated upstream
        console.log("Entro aca SEPARADOS");
=======
>>>>>>> Stashed changes
      }

      return {
        ...state,
        rooms: roomType,
      };
    }

    case GET_CLIENT: {
      return {
        ...state,
        client: action.payload,
      };
    }
    case "GET_ROOM_DETAIL": {
      return {
        ...state,
        roomdetail: action.payload,
      };
    }

    default:
      return state;
  }
}
