import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function PopUp(abc) {
  console.log(abc.fieldData)

  const updateData = () => {

    fetch(`https://67d7ed219d5e3a10152c9be5.mockapi.io/user/details/${abc.fieldData.id}`, {
      method: 'PUT', // or PATCH
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(abc.fieldData),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then((task) => {
      alert("Update ✔ Success...!")
      abc.setRef(!abc.ref)
      // Do something with updated task
    }).catch((error) => {
      // handle error

    })
    abc.boxClose()
  }
  const createUser=()=>{
    fetch(`https://67d7ed219d5e3a10152c9be5.mockapi.io/user/details`, {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(abc.fieldData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      abc.setRef(!abc.ref)
      alert("Create Successfully....!")
      // do something with the new task
    }).catch(error => {
      // handle error
    })
    abc.boxClose()
  }

  return (
    <>
      <Modal show={abc.boxShow} onHide={abc.boxClose}>
        <Modal.Header closeButton>

          <Modal.Title>{abc.fieldData.id ? "Edit Data " : "Create Data "}</Modal.Title>


        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Barathkumar"
                defaultValue={abc.fieldData.name}
                onChange={(e) => abc.setfieldData({ ...abc.fieldData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="barath123@gmail.com"
                autoFocus
                defaultValue={abc.fieldData.emailId}
                onChange={(e) => abc.setfieldData({ ...abc.fieldData, emailId: e.target.value })}
              />
              <Form.Label>PhoneNo</Form.Label>
              <Form.Control
                type="tell"
                placeholder="91+"
                autoFocus
                defaultValue={abc.fieldData.phoneNo}
                onChange={(e) => abc.setfieldData({ ...abc.fieldData, phoneNo: e.target.value })}
              />
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your qualification"
                autoFocus
                defaultValue={abc.fieldData.qualification}
                onChange={(e) => abc.setfieldData({ ...abc.fieldData, qualification: e.target.value })}
              />
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                autoFocus
                defaultValue={abc.fieldData.location}
                onChange={(e) => abc.setfieldData({ ...abc.fieldData, location: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={abc.boxClose}>
            Close
          </Button>
          {abc.fieldData.id ? <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button> :
            <Button variant="info" onClick={createUser}>
              Create
            </Button>
          }


        </Modal.Footer>
      </Modal>
    </>
  )
}