import React from 'react'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {filterRents, /* filterRentsByMonth, */ getRents, /* sortRentsByDate,  */
  // updateStatusRents,
} from "../../Redux/actions/index.js"
import PaginationPayments from './PaginationPayments.jsx';
import Swal from 'sweetalert2'
 

function Payments() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRents());
  }, []);

  const allRents = useSelector((state) => state.rents);
  console.log(allRents);

  var sum = 0;
  function suma() {
    const aux = allRents.map((e) => {
      sum = sum + e.price;
    });
    return aux;
  }
  suma()

  // PAGINADO --------------------->>
  const allPayments = useSelector((state) => state.rents)
  const [currentPage, setCurrentPage] = useState(1)
  const [paymentsPerPage, setPaymentsPerPage] = useState(10)
  const indexOfLastPayment = currentPage * paymentsPerPage
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage
  const currentPayments = allPayments?.slice(indexOfFirstPayment, indexOfLastPayment)
 
  const paginado = (pageNumbers) => {
    setCurrentPage(pageNumbers)
  } 
  // ------------------------------>>

 
  // FILTROS --------------------->>
  const months = allRents.map(e => e.dateIn.slice(0, 7))
  console.log(months)

  const months2 = []
  months2.push(months[0])
  for(var i = 0; i < months.length; i++) {
    if(!months2.includes(months[i])) {
      months2.push(months[i])
    }
  }
  console.log(months2)

  /* function hanleFilterRentsByMonth(e) {
    e.preventDefault()
    dispatch(filterRentsByMonth(e.target.value))
    setCurrentPage(1)
  }
  const [orden, setOrden] = useState('')
  function handleSortRentsByDate(e) {
    e.preventDefault()
    dispatch(sortRentsByDate(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  } */

  const [date, setDate] = useState("")
  const [month, setMonth] = useState("")
  const [orden, setOrden] = useState('')
  function rentsHandler(e) {
    e.preventDefault()

    if(e.target.name === "filterByMonth") {
      return setMonth(e.target.value)
    } 
    if(e.target.name === "sortByDate") {
      return setDate(e.target.value)
    }
  }
  function handleSubmitFilter(e) {
    e.preventDefault()
    if(!date && !month) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay filtros a aplicar',
      })
    } else {
      dispatch(filterRents(month, date))
      setOrden(`Ordenado ${e.target.value}`)
      setCurrentPage(1)
    }
  }
  // ----------------------------->>
 
 
  return (
    <div className='container'>
    <div className='row'>
      <div>
        <nav>
          <li>
            <select name="filterByMonth" onChange={e => {rentsHandler(e)}}>
              <option value="all" hidden>
                Filtrar por mes
              </option>
              {months2.map(e => {
                return(<option value={e}>{e}</option>)
              })}
            </select>
          </li>
          <li>
            <select name="sortByDate" onChange={e => {rentsHandler(e)}}>
              <option value="all" hidden>
                Ordenar por precio
              </option>
              <option value="asc">De menor a mayor</option>
              <option value="desc">De mayor a menor</option>
            </select>
          </li>
          <li>
            <button type="button" onClick={e => handleSubmitFilter(e)}>
              Filtrar
            </button>
          </li>
        </nav>
      </div>
    <PaginationPayments
      paymentsPerPage={paymentsPerPage}
      allPayments={allPayments}
      paginado={paginado}
      currentPage={currentPage}
     />

    <Table striped bordered hover className="col-md-9">
      <thead>
        <tr>
          <th>id</th>
          <th>Check-In</th>
          <th>Check-Out</th>
          <th>Payment</th>
        </tr>
      </thead>
      <tbody>
        {
          currentPayments && currentPayments.map(e => {
            let auxIn = e.dateIn.slice(0, 10)
            let auxOut = e.dateOut.slice(0, 10)
            return (
              <tr>
                <td>{e.id}</td>
                <td>{auxIn}</td>
                <td>{auxOut}</td>
                <td>${e.price}</td>
              </tr>
            )  
          })
        }
        <tr>
          <td></td>
          <td colSpan={2}>Total:</td>
          <td>${Math.floor(sum)}</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
  );
}

export default Payments;
