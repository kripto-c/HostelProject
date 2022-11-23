import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReview, deleteReview } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
export default function ReviewAdmin() {
  //estado de redux reviews ------------------------------------>>
  const dispatch = useDispatch();
  let reviews = useSelector((state) => state.reviews);
  const [estado, setEstado] = useState(2);
  function ordenar() {
    let reviewsOrdenados = reviews.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    return reviewsOrdenados;
  }
  console.log(reviews);
  const { getAccessTokenSilently } = useAuth0();
  //Traigo reviews ------------------------------------------------->>
  useEffect(() => {
    dispatch(getReview());
  }, [dispatch, estado]);
  useEffect(() => {
    setEstado(2);
  }, [estado]);

  //Eliminar ------------------------------------------------>>

  async function eliminar(r, recOrDelete) {
    const token = await getAccessTokenSilently();
    const authorization = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    await dispatch(deleteReview(authorization, r, recOrDelete));
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Rating</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {ordenar().map((r, index) => {
            return (
              <>
                <tr key={r.id}>
                  <th scope="row">{r.id}</th>
                  <td>{r.client !== null && r.client ? r.client.name : ""}</td>
                  <td>{r.rating}</td>
                  <td>{r.description ? r.description : ""}</td>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={async () => {
                      await eliminar(r.id, "eliminar");
                      setEstado(1);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                  {/* //Segundo boton */}
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={async () => {
                      await eliminar(r.id, "recuperar");
                      setEstado(0);
                    }}
                  >
                    Recuperar
                  </button>
                  <span
                    className={
                      !r?.status ? "badge bg-success" : "badge bg-danger"
                    }
                  >
                    Estado
                  </span>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// <div className="container text-center">
//   {/* CABECERA */}
//   <table className="table">
//     <thead>
//       <tr>
//         <th scope="col">Id</th>
//         <th scope="col">Usuario</th>
//         <th scope="col">Rating</th>
//         <th scope="col">Description</th>
//       </tr>
//     </thead>

//     {reviews.map((r) => (
//       <tbody>
//         <tr>
//           <th scope="row">{r.id}</th>
//           <td>{r.client ? r.client : "Usuario Anonimo"}</td>
//           <td>{r.rating}</td>
//           <td>{r.description ? r.description : "No dejo comentarios"}</td>
//           <button
//             type="button"
//             className="btn btn-danger"
//             onClick={(r)=>eliminar(r)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               className="bi bi-x-circle"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//               <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
//             </svg>
//           </button>
//         </tr>
//       </tbody>
//     ))}
//   </table>
// </div>

// {reviews &&
//   reviews.map((r) => (
//     <div key={r.id}>

//         <tr>
//           <th scope="row">{r.id}</th>
//           <td>{r.client ? r.client : "Usuario Anonimo"}</td>
//           <td>{r.rating?r.rating:""}</td>
//           <td>
//             {r.description ? r.description : "No dejo comentarios"}
//           </td>

//         </tr>
