import { useEffect, useState } from "react";
import { Quote } from "../Types/Types";
import MainQuote from "../Components/MainQuote";
import MainQuoteTypes from "../Components/MainQuote";
export type Props = {
  quotes: Quote[];
  setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>;
  setModal: React.Dispatch<React.SetStateAction<string>>
};

function Main({ quotes, setQuotes , setModal}: Props) {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  function getRandomQuote() {
    fetch("http://localhost:4000/random")
      .then((resp) => resp.json())
      .then((randomQuote) => setRandomQuote(randomQuote));
  }

  const [newQuote, setNewQuote] = useState<Quote | null>();

  // Modal

  const modal: HTMLElement | null = document.getElementById("myModal");
  const btn = document.getElementById("myBtn");
  const span = document.getElementsByClassName("close")[0];

  return (
    <main>
      <div className="main-wrapper">
        {/* <div className="all-quotes">
          <ul className="quote-list">
            {quotes.map((quote) => (
              <li
                className="each-quote"
                key={quote.id}
              > <span>X</span>{` ${quote.id}. ${quote.content}- ${quote.name}`}</li>
              
            ))}
            
          </ul>
        </div> */}
        
        
          <MainQuoteTypes setQuotes={setQuotes} setModal={setModal} quotes={quotes}/>
        
       
        <button className="random_button" onClick={getRandomQuote}>
          Random Quotes
        </button>
        <div className="select__random-quote">
          {randomQuote ? (
            <li className="random-quote__list">
              <p className="born-info">{`From-${randomQuote.birthDate}`}</p>
              <p className="death-info">{`To-${randomQuote.deathDate}`}</p>
              <p className="author-info">{`Author-${randomQuote.name}`}</p>
              <p className="quote-info">{`${randomQuote.content}`}</p>
            </li>
          ) : null}
          {randomQuote ? (
            <img className="qoute-image" src={`${randomQuote.image}`} alt="" />
          ) : null}

          {/* FORM */}

         
        </div>
      </div>
    </main>
  );
}
export default Main;
