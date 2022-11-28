import React from 'react'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {filterRents,  getRents, logicalDraft,} from "../../Redux/actions/index.js"
import PaginationPayments from './PaginationPayments.jsx';
import Swal from 'sweetalert2'
import style from './Payments.module.css'
import { useAuth0 } from "@auth0/auth0-react";

 

function Payments() {
  const dispatch = useDispatch();
  const allRents = useSelector((state) => state.rents);
 console.log(allRents)

  //Protección de rutas
  const {
    getAccessTokenSilently
  } = useAuth0();

  const protectClients2 = async () => {
    const token = await getAccessTokenSilently();
    dispatch(getRents(token))
  }


  useEffect(() => {
    protectClients2();
  }, []);
  const [data, setData] = useState(true)
  const rentsCurrent = JSON.parse(localStorage.getItem("filters")) || allRents
  

  useEffect(() => {
    JSON.parse(localStorage.getItem("filters"))
    setData(false)
  }, [data]) 
  

  // PAGINADO --------------------->>
  const [currentPage, setCurrentPage] = useState(1)
  const [paymentsPerPage, setPaymentsPerPage] = useState(10)
  const indexOfLastPayment = currentPage * paymentsPerPage
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage
  const currentPayments = rentsCurrent?.slice(indexOfFirstPayment, indexOfLastPayment)
  const totalPages = Math.ceil(rentsCurrent?.length / 10)
 
  const paginado = (pageNumbers) => {
    setCurrentPage(pageNumbers)
  } 
  // ------------------------------>>

 
  // FILTROS --------------------->>
  

  // Creo un array de meses para el filtro
  const months = allRents.map(e => e.dateIn.slice(0, 7))
  const months2 = []
  months2.push(months[0])
  for(var i = 0; i < months.length; i++) {
    if(!months2.includes(months[i])) {
      months2.push(months[i])
    }
  }


  const [date, setDate] = useState(JSON.parse(localStorage.getItem("selectDate"))||"")
  const [month, setMonth] = useState(JSON.parse(localStorage.getItem("selectMonth")) || "")
  const [orden, setOrden] = useState('')
  
  const putRents = () => {
    localStorage.removeItem("filters") 
    localStorage.setItem("selectDate", JSON.stringify(""))
    localStorage.setItem("selectMonth", JSON.stringify(""))
  }


  function rentsHandler(e) {
    e.preventDefault()

    if(e.target.name === "filterByMonth") {
      localStorage.setItem("selectMonth", JSON.stringify(e.target.value))
      JSON.parse(localStorage.getItem("selectMonth"))? setMonth(JSON.parse(localStorage.getItem("selectMonth"))):setMonth(e.target.value)
      return setMonth(e.target.value)
    } 
    if(e.target.name === "sortByDate") {
      localStorage.setItem("selectDate", JSON.stringify(e.target.value))
      JSON.parse(localStorage.getItem("selectDate"))? setDate(JSON.parse(localStorage.getItem("selectDate"))):setDate(e.target.value)
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
      setData(true)
      setCurrentPage(1)
    }
  }
    
    
  function handleResetFilters(e) {
    e.preventDefault()

    setDate("")
    setMonth("")
    putRents()   
    setData(true)
    protectClients2()
    
  }
 
  // ----------------------------->>

  

  // BORRADOR LÓGICO ------------->>
  async function handleLogicalDraft(e, id) {
    const token = await getAccessTokenSilently();
  
    e.preventDefault()
    
    await dispatch(logicalDraft(id, token))
    /* dispatch(getRents()) */
    protectClients2()
  }
  // ----------------------------->>

  
  // Suma del total de pagos ----->>
  var sum = 0;
  function suma() {
    const aux = allRents.map((e) => {
      sum = sum + e.price;
    });
    return aux;
  }
  suma()
  // ----------------------------->>
 
  return (
    <div >
   
      <div className={style.ContainerFilters}>
        <nav className="nav nav-pills d-flex justify-content-center">
          <li className="nav-item mx-1">
            <select 
              name="filterByMonth" 
              defaultValue="all"
              value={JSON.parse(localStorage.getItem("selectMonth"))}
              onChange={e => {rentsHandler(e)}}
              className="form-select"
            >
              <option value="all" hidden>
                Filtrar por mes
              </option>
              {months2.map(e => {
                return(<option value={e}>{e}</option>)
              })}
            </select>
          </li>
          <li className="nav-item mx-1">
            <select 
              name="sortByDate" 
              defaultValue="all"
              value={JSON.parse(localStorage.getItem("selectDate"))}
              onChange={e => {rentsHandler(e)}}
              className="form-select"
            >
              <option value="all" hidden>
                Ordenar por fecha
              </option>
              <option value="asc">Menos reciente</option>
              <option value="desc">Más reciente</option>
            </select>
          </li>
          <li className="nav-item mx-1">
            <button type="button" onClick={e => handleSubmitFilter(e)} className="nav-item  btn btn-primary">
              Filtrar
            </button>
          </li>
          <li className="nav-item mx-1">
            <button type="button" onClick={e => handleResetFilters(e)} className="nav-item  btn btn-primary">
              Borrar filtros
            </button>
          </li>
        </nav>
        
      </div>
    <div className='container'>
    <div className='row'>
    <PaginationPayments
      paymentsPerPage={paymentsPerPage}
      allRents={allRents}
      paginado={paginado}
      currentPage={currentPage}
      totalPages={totalPages}
     />
    
    <Table striped bordered hover variant="dark" className="col-md-9 bg-dark">
      <thead>
        <tr className='text-center'>
          <th>id</th>
          <th>Check-In</th>
          <th>Check-Out</th>
          <th>Payment</th>
          <th>Borrador</th>
        </tr>
      </thead>
      <tbody>
        {
          currentPayments && currentPayments.map(e => {
            let auxIn = e.dateIn.slice(0, 10)
            let auxOut = e.dateOut.slice(0, 10)
            let id = e.id
            return (
              <tr className='text-center'>
                <td>{id}</td>
                <td>{auxIn}</td>
                <td>{auxOut}</td>
                <td><b>${e.price}</b></td>
                <td><button onClick={(e) => handleLogicalDraft(e, id)} className="btn btn-light">Borrar</button></td>
              </tr>
            )  
          })
        }
        <tr>
          <td></td>
          <td colSpan={2}><b>Total:</b></td>
          <td>${Math.floor(sum)}</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>

    </div>
  );
}

export default Payments;
