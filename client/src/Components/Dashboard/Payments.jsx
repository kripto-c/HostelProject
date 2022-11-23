import React from 'react'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {getRents, 
  // updateStatusRents,
} from "../../Redux/actions/index.js"
 

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
 
 
 
  return (
    <div className='container'>
    <div className='row'>
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
          allRents && allRents.map(e => {
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
