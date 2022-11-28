import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../Redux/actions";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteRoom, changeStatusRoom } from "../../Redux/actions";
import Table from "react-bootstrap/Table";
import "./EditRoom.css";

const Edit = () => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  const handleDelete = async (room) => {
    const token = await getAccessTokenSilently();
    const authorization = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    await dispatch(deleteRoom(authorization, room));
    dispatch(getRooms());
  };

  const handleChangeStatus = async (room, statusRoom) => {
    const token = await getAccessTokenSilently();
    const authorization = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    await dispatch(changeStatusRoom(authorization, room, statusRoom));
    await dispatch(getRooms());
  };

  const rooms = useSelector((state) => state.allRooms);
  console.log(rooms);
  const ordernar = () => {
    let ordenado = rooms?.sort((a, b) => {
      if (a.id > b.id) return +1;
      if (a.id < b.id) return -1;
      return 0;
    });
    return ordenado;
  };

  return (
    <div className="table-container">
      <Table striped bordered hover variant="dark" className="col-md-7 bg-dark">
        <thead>
          <tr>
            <th>ID: </th>
            <th>Image: </th>
            <th>Description: </th>
            <th>Status: </th>
            <th>Activo/Inactivo: </th>
            <th>Borrar: </th>
          </tr>
        </thead>
        <tbody>
          {ordernar().map((room,index) => (
              <tr key={index}>
                <td key={'a'+ room.id}>{room.id}</td>
                <td key={'b'+ room.id}>
                  <img
                    src={room.image.map((el) => el)}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                    alt=""
                  ></img>
                </td>
                <td key={'d'+ room.id}>{room.description}</td>
                <td key={'e'+ room.id}>{room?.status ? "inactivo" : "activo"}</td>
                <td key={'f'+ room.id}>
                  <label className="botoncito">
                    <input
                    key = {'g'+room.id}
                      type="checkbox"
                      defaultChecked={room.status}
                      onClick={async () =>
                        await handleChangeStatus(
                          room.id,
                          room.status ? "activo" : "inactivo"
                        )
                      }
                    ></input>
                    <span key={room.id} className="deslizadora"></span>
                  </label>
                </td>
                <td key={'h'+room.id}>
                  <button key={index}
                    type="button"
                    onClick={() => {
                      handleDelete(room.id);
                    }}
                  >
                    <RiDeleteBin5Line></RiDeleteBin5Line>
                  </button>
                </td>
              </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Edit;
