import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReview, deleteReview } from "../../Redux/actions";

export default function ReviewAdmin() {
  const dispatch = useDispatch();
  let reviews = useSelector((state) => state.reviews);

  useEffect(() => dispatch(getReview()), []);
  const eliminar = (r) => {
    dispatch(deleteReview(r.id));
  };

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
        {reviews.map((r, index) => (
          <tr>
          <th scope="row">{r.id}</th>
          <td>{r.client !== null && r.client?r.client.name:""}</td>
          <td>{r.rating}</td>
          <td>@mdo</td>
        </tr>
          
        ))}
      </tbody>
    </table>
  </div>
  )
}

//   <div className="container text-center">
//     {/* CABECERA */}
//     <table class="table">
//       <thead>
//         <tr>
//           <th scope="col">Id</th>
//           <th scope="col">Usuario</th>
//           <th scope="col">Rating</th>
//           <th scope="col">Description</th>
//         </tr>
//       </thead>

//       {reviews.map((r) => (
//         <tbody>
//           <tr>
//             <th scope="row">{r.id}</th>
//             <td>{r.client ? r.client : "Usuario Anonimo"}</td>
//             <td>{r.rating}</td>
//             <td>{r.description ? r.description : "No dejo comentarios"}</td>
//             <button
//               type="button"
//               class="btn btn-danger"
//               onClick={(r)=>eliminar(r)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 class="bi bi-x-circle"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
//               </svg>
//             </button>
//           </tr>
//         </tbody>
//       ))}
//     </table>
//   </div>

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
