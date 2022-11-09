import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReview } from "../../Redux/actions/index.js";
//IMPORT DE REACT BOOTSTRAP --------------------------->>
import { IoIosStar } from "react-icons/io";

//----------------------------------------------------------------------
export default function Reviews() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReview());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const reviews = useSelector((state) => state.reviews);
  function numberStar(number) {
    let stars = [0, 0, 0, 0, 0]
      .fill(1, 0, number)
      .map((s, i) => (s ? <IoIosStar key={i}></IoIosStar> : null));
    return stars;
  }
  function getFechaHora(createdAt) {
    let data = createdAt.replace(/\./g, "").slice(0, -7).split("T");
    let fecha = data[0];
    let hora = data[1];

    console.log(data, fecha, hora);
    return (
      <span>
        Fecha: {fecha} Hora: {hora}
      </span>
    );
  }

  //RENDER------------------------------------------------------------------->>
  return (
    <div>
      {reviews.map((r) => {
        return (
          <div key={r.id}>
            <h1>{r.usuario}</h1>
            <h1>
              {numberStar(r.rating)}({getFechaHora(r.createdAt)})
            </h1>
            <h1>{r.description}</h1>
          </div>
        );
      })}
    </div>
  );
}
