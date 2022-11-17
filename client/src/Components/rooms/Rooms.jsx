import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Footer from "../Layout/Footer";

import { getRooms } from "../../Redux/actions/index.js";
import RoomCard from "./RoomCard.jsx";
import Filters from "./Filters";

export default function Rooms() {
  const allRooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getRooms());
    
  }, []);
  console.log("VIENDO HABITACIONES!!!!!",allRooms)

/*   function a() {
    const b = [] 
    b.push(allRooms.map(e =>e.beds))
    console.log(b)
  }
  a() */
  
  return (
    <div>
      <Filters getRooms={getRooms} />

      <div className="container">
        <div className="row">
          {allRooms &&
            allRooms.map((e) => {
              return (
                <div key={e.id} className="view overlay">
                  <RoomCard
                    beds={e.beds}
                    // type={e.type.type ? e.type.type : null}
                    description={e.description}
                    image={e.image}
                    bathroom={e.bathroom}
                    id={e.id}
                    type={e.type.type}
                    price={e.price}
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
