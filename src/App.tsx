
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
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
    <header><h1 className='title'>Welcome to Quotes of the Day</h1></header>
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
    </div>
  )
}

export default App
