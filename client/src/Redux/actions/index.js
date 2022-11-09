import axios from "axios"

export function getRooms() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/getrooms')
        return dispatch({
            type: "GET_ROOMS",
            payload: json.data
        })
    }
}