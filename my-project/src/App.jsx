import React, { useEffect, useState } from 'react'
import './index.css'
import Nav from './components/Nav'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'
import {collection, getDocs, onSnapshot} from 'firebase/firestore'
import { db } from './config/firbase'
import ContactCard from './components/ContactCard'
import AddandUpdatecontact from './components/AddandUpdatecontact'
import useDisclouse from './components/Hooks/useDisclouse'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {

 const[contact, setContact] = useState([]);
const {isOpen,onClose,onOpen} =useDisclouse();

 useEffect(()=>{
  const getcontact =async ()=>{
    try {
      const contactRef = collection( db,"contact")
      
      onSnapshot(contactRef ,(snapshot) =>{
      const contactLists = snapshot.docs.map((doc) =>
     {
      return{
        id: doc.id,
        ...doc.data(),
      }
     }
      );

       
      setContact(contactLists);
      return contactLists;
      }
      )
       
    } catch (error) {
      
    }

  }
  getcontact();

 },[]
)
const filterContact = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contact");

    onSnapshot(contactRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContact = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContact(filteredContact);

      return filteredContact;
    });
  };


  return (
    <>
    <div className='max-w-[370px] px-4 ' >
    <Nav/>
   <div className='flex gap-2'>
     <div className='flex relative items-center flex-grow'>
     < AiOutlineSearch 
  
     className='text-white text-3xl absolute ml-1'/>
    <input
    onChange={filterContact}
     type='text' className='border bg-transparent border-white h-10 flex-grow rounded-md text-white pl-9'
     />
</div>
<AiFillPlusCircle
   onClick={onOpen}
className='text-5xl text-white cursor-pointer' />

   </div  >
     <div className='mt-4 gap-3 flex flex-col '>
      {contact.map ((contact) => (
        <ContactCard key={contact.id} contact={contact}/>
      )
      
      )}
     </div>
    </div>
   <AddandUpdatecontact
   onClose={onClose}
   isOpen={isOpen}
   />
   <ToastContainer/>
    </>
  );
};

export default App