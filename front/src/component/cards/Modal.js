import React, {  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/action/actionpost'
 
export default function Example() {
    const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title,setTitle]= useState('')
  const [image,setImage]= useState('')
  const [price,setPrice]= useState(0)
  const [time1,setTime1]= useState('')
  const [time2,setTime2]= useState('')
  const [time3,setTime3]= useState('')
  const [date1,setDate1]= useState('')
  const [date2,setDate2]= useState('')
  const [date3,setDate3]= useState('')
  

  const handlepost = () =>{
    dispatch(add({title,image,price,time1,time2,time3,date1,date2,date3}),handleClose())
  }



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>title</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(el)=> setTitle(el.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail"  >
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="Enter email" onChange={(el)=> setPrice(el.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(el)=> setImage(el.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>time1</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(el)=> setTime1(el.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>time2</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(el)=> setTime2(el.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>time3</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(el)=> setTime3(el.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>date1</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(el)=> setDate1(el.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>date2</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(el)=> setDate2(el.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>date3</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(el)=> setDate3(el.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlepost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

