import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../Redux/actions";
import "./EditRoom.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";

const Edit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  const rooms = useSelector((state) => state.allRooms);
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
          {rooms.map((room) => (
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
                    // onClick={() => {
                    //   eliminar(r.id);
                    // }}
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Edit;
