import axios from "axios";
export const POST_REVIEW = "POST_REVIEW";
export const GET_REVIEW = "GET_REVIEW";
export const GET_CLIENT = "GET_CLIENT";
export const FILTER_TYPE_ROOM = "FILTER_TYPE_ROOM";
export const GET_ROOMS = "GET_ROOMS";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const POST_OWNER = "POST_OWNER";
export const GET_OWNER = "GET_OWNER";

// const URL = "https://dinamitahostel.herokuapp.com";
const URL = "http://localhost:4000" //descomentar para hacer pruebas locales

//ACTION ROOMS ----------------------------------------------------------->>
export function getRooms() {
  return async function (dispatch) {
    let room = await axios.get(`${URL}/rooms`);
    console.log("mirar acaaa", typeof room.data[0].price);
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
      const dataDb = await axios.get(`${URL}/reviews`);
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

export function deleteReview(id) {
  try {
    return async function (dispatch) {
      await axios.delete(`${URL}/reviews`,id);
      dispatch({
        type:"DELETE_REVIEW",
        payload:"Eliminado"
      })
    };
  } catch (e) {
    console.log(e);
  }
}

export function postReview(payload) {
  try {
    return async function (dispatch) {
      axios.post(`${URL}/reviews`, payload);
      return dispatch({ type: POST_REVIEW });
    };
    // eslint-disable-next-line no-unreachable
  } catch (e) {
    console.log("Fallo");
  }
}

//ACTIONS FILTROS---------------------------------------------------------------->>

export function sendFeedback(data) {
  try {
    return async function (dispatch) {
      let response = await axios.get(`${URL}/feedback${data}`);
      return response.data;
    };
  } catch (e) {
    console.log(e);
  }
}

export function filterTypeRoom(payloadOne, payloadTwo, payloadThree) {
  console.log("TYPE ROOM FILTRO ACCIONADO", payloadOne);
  return {
    type: FILTER_TYPE_ROOM,
    payloadOne,
    payloadTwo,
    payloadThree,
  };
}

// export function filterPrice(payload){
//   console.log("Filter PRICE",payload)
//   return{
//     type:FILTER_PRICE,
//     payload

//   }
// }

//ACTIONS FILTROS---------------------------------------------------------------->>

//ACTION GET INFO CLIENT
export function getCLient(token) {
  try {
    return async function (dispatch) {
      const info = await axios.get(`${URL}/login/client`, {
        headers: { authorization: `Bearer ${token}` },
      });
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
export function postClient(body, headers) {
  return async () => {
    try {
      const res = await axios.post(`${URL}/login/userEdit`, body, headers);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}
export function postOwner(payload, headers) {
  return async function () {
    const { data } = await axios.post(`${URL}/owner/post`, payload, headers);
    return data;
  };
}
export function getOwner(token){
  return async function(dispatch){
    try {      
      let {data} = await axios.get(`${URL}/owner/get`, {
        headers: {authorization: `Bearer ${token}`}
      });
      return dispatch({
        type: GET_OWNER,
        payload: data,
      });
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
      let res = await axios.get(`${URL}/getroomdetail?id=${id}`);
      return dispatch({
        type: "GET_ROOM_DETAIL",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getAllCountries() {
  return async function (dispatch) {
    try {
      let { data } = await axios.get(`${URL}/countries`);
      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const createRoom = (payload) => async () => {
  let res = await axios.post(`${URL}/rooms`, payload);
  return {
    type: "CREATE_ROOM",
    res,
  };
};
