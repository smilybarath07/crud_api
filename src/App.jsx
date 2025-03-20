import { Container } from 'react-bootstrap';
import './App.css'
import TableComponent from './table';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopUp from './popup';
import { useState } from 'react';

function App() {
    const [show, setShow] = useState(false);
    const[status,setstatus]=useState(false);
    const[tempdata,settempdata] = useState({})
    const handleClose = () => setShow(false);
    const handleShow = (rowDta) =>{
      if(rowDta){
        settempdata(rowDta);
      }else{
        settempdata(
          {
        
            emailId: null,
            id: null,
            location: null,
            name: null,
            phoneNo: null,
            qualification: null
                  }
        )
      }
      console.log(rowDta)
     setShow(true);
    }
  return (
    <Container fluid className='p-4'>
    <PopUp ref={status} setRef={setstatus} boxShow={show} boxClose={handleClose} fieldData={tempdata} setfieldData={settempdata}/>
     <TableComponent boxClick={handleShow} update={status} setUpdate={setstatus} />
    </Container>
  )
}

export default App
