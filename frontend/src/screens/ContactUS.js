import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
/*import { contactus } from '../actions/userActions'*/
import  '../css/contact.css';
import { Container } from 'react-bootstrap'


const ContactUS = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [msg, setMsg] = useState('')
  const [message, setMessage] = useState(null)
/*
  const dispatch = useDispatch()


  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])
/*
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(contactus(name, email, password))
    }
  }
*/
const submitHandler = (e) => {
    console.log(e)
}
  return (
    <div>
      <Container>
    <div className="row padd">
      <div className="col-6">
        <h3>REACH OUT, WE'RE HERE</h3>
        <p> Have questions about your order or products? 
          For the speediest answer, check out our FAQ section. 
          Need something else? Come find us below.
        </p>
        <hr/>
        <p className="colorlink"><i className="fas fa-phone-alt conico"></i>18888-465-324</p>
        <br/>
        <p>Days a week from 9:00 am to 7:00 pm (GMT-8)</p>
        <p>LOS ANGELES, CALIFORNIA</p> <br/>
        <h3>CUSTOMER SUPPORT</h3>
        <a href="" className="colorlink"><i class="far fa-envelope-open conico"></i>info@canagoldbeauty.com</a>

      </div>
      <div className="col-6">
      <h1>Contact US</h1>
      {message && <Message variant='danger'>{message}</Message>}
    
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='subject'>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='message'>
          <Form.Label>Your Message (Optional)</Form.Label>
          <Form.Control
            type='textarea'
            placeholder='Leave Your Message'
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <button type='submit' variant='primary'
        className="contactbtn">
          Submit
        </button>
      </Form>
        </div>
    </div>
    </Container>
    </div>
  )
}

export default ContactUS
