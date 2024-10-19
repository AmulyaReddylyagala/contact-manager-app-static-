import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'



function App() {
  const contacts = [
    {
      id: "1",
      name: "Amulya",
      email: "amul@gmail.com"
    },
    {
      id: "2",
      name: "SriVarshini",
      email: "varsh@gmail.com"
    },
  ]

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />

    </div>
  )
}

export default App
