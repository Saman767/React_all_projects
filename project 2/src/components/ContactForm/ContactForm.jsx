import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import { SlPhone } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
const ContactForm = () => {
   const [name , setName] = useState("saman");
   const [email , setEmail] = useState("support@123");
const [text, setText] = useState("2_project done");
const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
   };
  return (
   <section className={styles.container}>
   <div className={styles.contact_form}>
    <div className={styles.top_btn}>
         <Button  text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />}/>
    <Button 
   
    text="VIA Call" icon={< SlPhone fontSize="24px" />}/>
    </div>
     <Button isOutline={true}
      text="VIA Email form " icon={< MdEmail fontSize="24px" />}/>
      <form onSubmit={onSubmit}>
        
       <div className={styles.form_control}>
        <label htmlFor='name'>Name</label>
        <input type="text" name='Name' />

       </div>
       <div className={styles.form_control}>
        <label htmlFor='email'>Email</label>
        <input type="email" name='email' />

       </div>
       <div className={styles.form_control}>
        <label htmlFor='text'>Text</label>
        <textarea  name='text' />
    </div>
    <div>
         <Button 
      text="Submit button" />

    </div>
    <div> {name + "" + email + "" + text}</div>
      </form>
    
   </div>
   <div className={styles.contact_image}>
     </div>
   </section>
  )
}

export default ContactForm