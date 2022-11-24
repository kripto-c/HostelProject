import React from 'react'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {getRents, 
  // updateStatusRents,
} from "../../Redux/actions/index.js"
import PaginationPayments from './PaginationPayments.jsx';
 

function Payments() {
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(getRents())
  }, [])
 
  const allRents = useSelector((state) => state.rents)
  console.log(allRents)
 
  var sum = 0
  function suma (){
 
    const aux = allRents.map(e => {
      sum = sum + e.price
    })
    return aux
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




  // ----------------------------->>
 
 
  return (
    <div className='container'>
    <div className='row'>
      <div>
        <nav>
          <li>
            <select>
              <option value="all" hidden>
                Filtrar por mes
              </option>
              {allRents.map(e => {
                return(<option value={e}></option>)
              })

              }
            </select>
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
          <td>${sum}</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
  );
}
 
export default Payments;
