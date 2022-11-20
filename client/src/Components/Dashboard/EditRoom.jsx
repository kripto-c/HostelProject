import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../Redux/actions";
import "./EditRoom.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteRoom } from "../../Redux/actions";

const Edit = () => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    dispatch(getRooms());
  }, []);

  const handleDelete = async (room) => {
    const token = await getAccessTokenSilently();
    const authorization = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    dispatch(deleteRoom(authorization, room));
    dispatch(getRooms());
  };

  const rooms = useSelector((state) => state.allRooms);
  console.log(rooms, "hola");
  return (
    <div className="table-container">
      <table className="rooms-tbl">
        <thead>
          <tr>
            <th>ID: </th>
            <th>Image: </th>
            <th>Description: </th>
            <th>Status: </th>
            <th>Borrar: </th>
            <th>Activo/Inactivo: </th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) =>
       
              <>
                <tr>
                  <td>{room.id}</td>
                  <td>
                    <img
                      src={room.image}
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                      alt=""
                    ></img>
                  </td>
                  <td>{room.description}</td>
                  <td>{room?.status ? "inactivo" : "activo"}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        handleDelete(room.id);
                      }}
                    >
                      <RiDeleteBin5Line></RiDeleteBin5Line>
                    </button>
                  </td>
                  <td>
                    <label class="botoncito">
                      <input type="checkbox" />
                      <span class="deslizadora"></span>
                    </label>
                  </td>
                </tr>
              </>
        
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Edit;
