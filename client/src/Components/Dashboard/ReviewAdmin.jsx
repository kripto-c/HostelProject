import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReview, deleteReview } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
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
  // PAGINADO ----------------------------------------------------------------------->>

  const [currentPage, setCurrentPage] = useState(1);
  const [ReviewPerPage, setReviewPerPage] = useState(10);
  const indexOfLastReview = currentPage * ReviewPerPage;
  const indexOfFirstReview = indexOfLastReview - ReviewPerPage;
  const currentReviews = ordenar()?.slice(
    indexOfFirstReview,
    indexOfLastReview
  );
  function paginado() {
    const paginas = [];
    for (let i = 1; i <= Math.ceil(reviews.length / ReviewPerPage); i++) {
      paginas.push(i);
    }
    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              onClick={() =>
                setCurrentPage(
                  currentPage !== 1 ? currentPage - 1 : currentPage
                )
              }
              className="page-link"
            >
              Anterior
            </button>
          </li>
          {paginas.map((e) => (
            <li>
              <Pagination onClick={() => setCurrentPage(e)}>
                <Pagination.Item
                  className={currentPage === e ? "active" : "disabled"}
                >
                  {e}
                </Pagination.Item>
              </Pagination>
            </li>
          ))}
          <li className="page-item">
            <button
              className="page-link"
              onClick={() =>
                setCurrentPage(
                  currentPage !== paginas.length ? currentPage + 1 : currentPage
                )
              }
            >
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    );
  }
  //----------------------------------------------------------------------------------------------
  

  return (
    <div className="container-fluid">
      <div className="mx-auto m-3 w-25 table-responsive-lg ">
        {paginado()}

        <table className="table table-dark table-striped table align-middle table table-hover text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Rating</th>
              <th>Description</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* //LOS DATOS A RENDERIZAR */}
            {currentReviews.map((r, index) => {
              return (
                <>
                  <tr key={r.id}>
                    <th scope="row">{r.id}</th>
                    <td>
                      {r.client !== null && r.client
                        ? r.client.name
                        : "Usuario Anonimo"}
                    </td>
                    <td>{r.rating}</td>
                    <td>{r.description ? r.description : "Sin comentarios"}</td>
                    <td className="align-middle">
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
                    </td>
                    <td className="align-middle">
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
                    </td>
                    <td className="align-bottom">
                      <h3 className="m-2">
                        <span
                          className={
                            !r?.status ? "badge bg-success" : "badge bg-danger"
                          }
                        >
                          Estado
                        </span>
                      </h3>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          
        </table>
        
      </div>
    </div>
  );
}
