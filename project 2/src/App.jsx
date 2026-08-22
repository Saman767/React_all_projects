import React from 'react'
import './App.css'
import Navigation from './components/Navigation/Nav'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

const App = () => {
  return (
    <div>
    <Navigation />
    <ContactHeader />
    <ContactForm />
  </div>
  )
}

export default App