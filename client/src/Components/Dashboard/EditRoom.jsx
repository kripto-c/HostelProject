import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../Redux/actions";
import "./EditRoom.css";

const Edit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  const rooms = useSelector((state) => state.allRooms);
  return (
    <Container className="hola">
      <ul>
        {rooms?.map((room) => (
          <>
            <li>
              {room.id}
              {room.status ? "Inactivo" : "Activo"}
              <img
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
                src={room.image}
              ></img>
            </li>
          </>
        ))}
      </ul>
    </Container>
  );
};

export default Edit;
