import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReview } from "../../Redux/actions/index.js";
//IMPORT DE REACT BOOTSTRAP --------------------------->>
import { IoIosStar } from "react-icons/io";
import s from "./Reviews.module.css";
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

    return <span>{fecha}</span>;
  }

  //RENDER------------------------------------------------------------------->>
  return (
    <div className={s.container}>
      {reviews?.map((r) => {
        
        return (
          !r.status?
          <div key={r.id} className={s.review}>
            <h1>{r.client?.name ? r.client.name : "usuario anonimo"}</h1>
            <h2>
              {numberStar(r.rating)}({getFechaHora(r.createdAt)})
            </h2>
            <h3>{r.description}</h3>
          </div>
          :null
        )
      })}
    </div>
  );
}
