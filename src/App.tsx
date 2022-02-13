
import { Component, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Components/Main';
import Header from '../Components/Header'
import { Quote } from '../Types/Types';
import './App.css'

function App() {

 
  const [quotes, setQuotes] = useState<Quote[]>([])
 function getQoutesFromServer(){
  fetch('http://localhost:4000/quotes')
  .then(resp => resp.json())
  .then(quotes => setQuotes(quotes))
 }
 useEffect(getQoutesFromServer, [])
 

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path='/quotes' element={<Main quotes={quotes} />} />
    </Routes>
    </div>
  )
}

export default App
