import React, { use, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function TableComponent(bcd) {
  const [tabledata, settabledata] = useState(null);

  useEffect(() => {
    fetch('https://67d7ed219d5e3a10152c9be5.mockapi.io/user/details', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(tasks => {
      settabledata(tasks.reverse())
      console.log(tasks)
      // Do something with the list of tasks
    }).catch(error => {
      // handle error
    })
  }, [bcd.update])

  const deleteUser = (Id) => {

    fetch(`https://67d7ed219d5e3a10152c9be5.mockapi.io/user/details/${Id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      alert("Delete Success....!")
      bcd.setUpdate(!bcd.update)
      // Do something with deleted task
    }).catch(error => {
      // handle error
    })
  }


  return (
    <>
    <Button variant={"warning"} className="fs-5 mb-3" onClick={() => bcd.boxClick()}>Add Data</Button>
    <Table striped bordered hover variant="dark">
      <thead className='text-center'>
        <tr className="fs-3 ">
          <th>S.NO</th>
          <th>Name</th>
          <th>Email</th>
          <th>phoneNo</th>
          <th>Qualification</th>
          <th>location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='text-center fs-5 '>
        {tabledata && tabledata.map((item, j) => {
          return (
            <tr className="fs-11 p-5">
              <td className="p-2">{j + 1}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.emailId}</td>
              <td >{item.phoneNo}</td>
              <td className="p-3">{item.qualification}</td>
              <td >{item.location}</td>
              <td >
                <Button onClick={() => bcd.boxClick(item)} variant="success">Edit</Button>
                <Button className="ms-3" variant="danger" onClick={()=>deleteUser(item.id)}>Delete</Button>
              </td>
            </tr>
          )
        })}

      </tbody>
    </Table>
    </>

  )
}