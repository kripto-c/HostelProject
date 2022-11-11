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
      const dataDb = await axios.get("http://localhost:3001/reviews");
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
      axios.post("http://localhost:3001/reviews", payload);
      return dispatch({ type: POST_REVIEW });
    };
    // eslint-disable-next-line no-unreachable
  } catch (e) {
    console.log("Fallo");
  }
}

  //ACTIONS FILTROS---------------------------------------------------------------->>
  
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

  export function filterTypeRoom(payload){
    return {
      type: "FILTER_TYPE_ROOM",
      payload
    }
  }
  export function filterTypeBathroom(payload){
    return {
      type: "FILTER_TYPE_BATHROOM",
      payload

    }
  }
}

/*   export function sendFeedback(data){
    try {
      return async function(dispatch){
        let response = await axios.get(`http://localhost:4000/feedback${data}`);
        console.log(data)
        return response.data;
      }
    } catch (error) {
      console.log(error)

    }

  } */

  export function getClient(payload){
    try{
     return async function(){
      let res = await axios('http://localhost:4000/login/setClient', {headers:{authorization:`Bearer ${payload}`}})
      return {
        payload: res.data,
        type: "GET_CLIENT"
      }
     }
    } catch(e){
      console.log(e)
    }
  }