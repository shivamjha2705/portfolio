import React, { useState } from 'react'
import Swal from 'sweetalert2'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  const [contactData , setContactData] = useState([
    {
      name: '',
      email: '',
      message: ''
    }
  ])

  let d_name , d_value;
  const handleChange = (e) => {
    d_name = e.target.name;
    d_value = e.target.value;
    setContactData({...contactData, [d_name]:d_value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contactData);
    const {name , email , message} =contactData;
     await fetch("https://shivamk01-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",{
      method: 'POST',
      headers:{
        contentType : "website/json"
      },
      body: JSON.stringify({
        name, 
        email,
        message,
      })
    });
    if (name&&email&&message) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your message has been sent successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please fill all the fields below',
        showConfirmButton: true,
        
      })
    }
}
    
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
            <article className='contact_option'>
              <MdOutlineEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>shivamjha2705@gmail.com</h5>
              <a href='mailto:shivamjha2705@gmail.com'>Send a message</a>
            </article>
            <article className='contact_option'>
              <MdOutlineEmail className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+91 8581049721</h5>
              <a href='https://wa.me/+918581049721'>Send a message</a>
            </article>
        </div>
        <form action='POST'>
          <input type='text' name='name' value={contactData.name}  onChange={handleChange} placeholder='Name' required/>
          <input type='email' name='email' value={contactData.email}  onChange={handleChange} placeholder='Email' required/>
          <textarea name='message' rows="7" value={contactData.message}  onChange={handleChange} placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Send Message</button> 
        </form>
      </div>
    </section>
  )
}

export default Contact