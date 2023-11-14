import React, { useState } from 'react'
import './ContactForm.css'
import Button from '../Button/Button'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { HiMail } from 'react-icons/hi'

const ContactForm = () => {

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [text, setText] = useState('')

  const onSubmit =(event) => {
    event.preventDefault();
    setName(event.target[0].value)
    setMail(event.target[1].value)
    setText(event.target[2].value)
  }

  return (
    <div className="container form__container">
        <div className="contact__form">
          <div className="top__btn">
            <Button text='VIA SUPPORT CHAT' icon={ <BiSolidMessageDetail/> }/>
            <Button text='VIA CALL' icon={ <BiSolidPhoneCall/> }/>
          </div>
          <Button isOutline={true} text='VIA EMAIL FORM' icon={ <HiMail/> }/>

          <form onSubmit={onSubmit}>
            <div className="form__controller">
              <label htmlFor="name">Name</label>
              <input type="text" name='name'/>
            </div>
            <div className="form__controller">
              <label htmlFor="email">E-mail</label>
              <input type="email" name='email'/>
            </div>
            <div className="form__controller">
              <label htmlFor="text">Text</label>
              <textarea name='text' rows={8}/>
            </div>

            <div>
            <Button isOutline={true} text='SUBMIT' />
            <div>
              {name + ' ' + mail+ ' ' + text}
            </div>
            </div>
          </form>
            
        </div>
        <div className="contact__graphics">
        <img src='/images/grapics.svg' alt='graphic'/ >
        </div>
    </div>
  )
}

export default ContactForm