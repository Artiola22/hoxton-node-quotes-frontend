import {  useEffect, useState } from "react";
import {    Quote } from "../Types/Types";
import  MainQuote from '../Components/MainQuote'
type Props = {
  quotes: Quote[];
};

function Main({ quotes }:Props) {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null)
function getRandomQuote(){
 fetch('http://localhost:4000/random')
 .then(resp => resp.json())
 .then(randomQuote => setRandomQuote(randomQuote))
}
  
  return (
    <main>
      <div>
        <ul className="quotes-list">
          {quotes.map(
            (quote) => (
              <li>{`  ${quote.content}- ${quote.name}`}</li>
            )
          )}


        </ul>
        
        <button onClick={getRandomQuote}>Random Quotes</button>
        {
          randomQuote?<li>{`  ${randomQuote.content}- ${randomQuote.name}`}</li>: null
        }
      </div>
    </main>
  );
}
export default Main;
