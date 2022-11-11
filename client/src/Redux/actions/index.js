import axios from "axios";
export const POST_REVIEW = "POST_REVIEW";
export const GET_REVIEW = "GET_REVIEW";
export const GET_CLIENT = "GET_CLIENT";
export const FILTER_TYPE_BATHROOM = "FILTER_TYPE_BATHROOM";
export const FILTER_TYPE_ROOM = "FILTER_TYPE_ROOM";

//ACTION ROOMS ----------------------------------------------------------->>
export function getRooms() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:4000/rooms");
    return dispatch({
      type: "GET_ROOMS",
      payload: json.data,
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

  
  export function sendFeedback(data){
    try {
      return async function(dispatch){
        let response = await axios.get(`http://localhost:4000/feedback${data}`);
        console.log(data)
        return response.data;
      }
    } catch (e) {
      console.log(e)
      }
  }

//ACTIONS FILTROS---------------------------------------------------------------->>

export function filterTypeRoom(payload) {
  return {
    type: "FILTER_TYPE_ROOM",
    payload,
  };
}
export function filterTypeBathroom(payload) {
  return {
    type: "FILTER_TYPE_BATHROOM",
    payload,
  };
}

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

  // export function setClient(payload){
  //   try{
  //    return async function(){
  //     let res = await axios('http://localhost:4000/login/setClient', {headers:{authorization:`Bearer ${payload}`}})
  //       return {
  //         payload: res.data,
  //         type: "GET_CLIENT"
  //       }
  //    }  
  //   } catch(e){
  //     console.log(e)
  //   }
  // }

  export function getRoomDetail(id){
    return async (dispatch)=>{
      try {
        let res = await axios.get(`http://localhost:4000/getroomdetail/${id}`);
        return dispatch({
          type: "GET_ROOM_DETAIL",
          payload: res.data
        })
      } catch (error) {
        console.log(error);
      }
    }
  }