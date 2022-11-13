import axios from "axios";
export const POST_REVIEW = "POST_REVIEW";
export const GET_REVIEW = "GET_REVIEW";
export const GET_CLIENT = "GET_CLIENT";
export const FILTER_TYPE_ROOM = "FILTER_TYPE_ROOM";
export const GET_ROOMS = "GET_ROOMS";
//ACTION ROOMS ----------------------------------------------------------->>
export function getRooms() {
  return async function (dispatch) {
    let room = await axios.get("http://localhost:4000/rooms");
    console.log("mirar acaaa", room.data);
    return dispatch({
      type: GET_ROOMS,
      payload: room.data,
    });
  };
}
//ACTIONS REVIEWS ----------------------------------------------------------->>
export function getReview() {
  try {
    return async function (dispatch) {
      const dataDb = await axios.get("http://localhost:4000/reviews");
      console.log(dataDb);
      dispatch({
        type: GET_REVIEW,
        payload: dataDb.data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (e) {
    console.log(e);
  }
}

export function postReview(payload) {
  try {
    return async function (dispatch) {
      axios.post("http://localhost:4000/reviews", payload);
      return dispatch({ type: POST_REVIEW });
    };
    // eslint-disable-next-line no-unreachable
  } catch (e) {
    console.log("Fallo");
  }
}

//ACTIONS FILTROS---------------------------------------------------------------->>

export function sendFeedback(data) {
  console.log(data);
  try {
    return async function (dispatch) {
      let response = await axios.get(`http://localhost:4000/feedback${data}`);
      return response.data;
    };
  } catch (e) {
    console.log(e);
  }
}

  export function filterTypeRoom(payloadOne, payloadTwo) {
    return {
      type: FILTER_TYPE_ROOM,
      payloadOne,
      payloadTwo,
    };
  }

//ACTIONS FILTROS---------------------------------------------------------------->>

//ACTION GET INFO CLIENT
export function getCLient(email) {
  try {
    return async function (dispatch) {
      const info = await axios.get(`http://localhost:4000/login/client?email=${email}`);
      dispatch({
        type: GET_CLIENT,
        payload: info.data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (e) {
    console.log(e);
  }
}
export function postClient(email, body, headers) {
  return async () => {
    try {
      const res = await axios.post(
        `http://localhost:4000/login/userEdit?email=${email}`,
        body,
        headers
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}
// export function setClient(payload){
//   try{
//    return async function(){
//     let res = await axios('http://localhost:4000/login/setClient', {headers:{authorization:`Bearer ${payload}`}})
//       return {
//         payload: res.data,
//         type: GET_CLIENT
//       }
//    }
//   } catch(e){
//     console.log(e)
//   }
// }
export function getRoomDetail(id) {
  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:4000/getroomdetail?id=${id}`);
      return dispatch({
        type: "GET_ROOM_DETAIL",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
