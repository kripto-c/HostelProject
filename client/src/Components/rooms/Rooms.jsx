import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Footer from "../Layout/Footer";

import { getRooms } from "../../Redux/actions/index.js";
import RoomCard from "./RoomCard.jsx";
import style from "./Rooms.module.css";
import Filters from "./Filters";

export default function Rooms() {
  const allRooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  return (
    <div className={style.Container}>
      <Filters getRooms={getRooms} />
      

      <div className="container">
        <div className="row">
          {allRooms &&
            allRooms.map((e) => {
              return (
                <div key={e.id} className="view overlay">
                  <RoomCard
                    beds={e.beds}
                    type={e.type.type ? e.type.type : null}
                    description={e.description}
                    image={e.image}
                    bathroom={e.bathroom}
                    className={style.Card}
                    id={e.id}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
