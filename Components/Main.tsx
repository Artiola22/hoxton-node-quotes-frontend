import { useEffect, useState } from "react";
import { Quote , MainQuoteType} from "../Types/Types";

export type Props = {
  quotes: Quote[];
  setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>;
  setModal: React.Dispatch<React.SetStateAction<string>>;
};

function Main({ quotes, setQuotes, setModal }: Props) {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  function getRandomQuote() {
    fetch("http://localhost:4000/random")
      .then((resp) => resp.json())
      .then((randomQuote) => setRandomQuote(randomQuote));
  }

  const [newQuote, setNewQuote] = useState<Quote | null>();
const [quote, setQuote] = useState<MainQuoteType | null>()
  function deleteQuote(id: number){
    return fetch(`http://localhost:4000/quotes/${id}`,{
      method: 'DELETE'
    })
  }
  function removeButton(){
    let update = [...quotes]
    update = update.filter(targetQuote => targetQuote.id !== quote?.id)
  
    deleteQuote(quote.id)
    setQuotes(update)
  }

  // Modal

  const modal: HTMLElement | null = document.getElementById("myModal");
  const btn = document.getElementById("myBtn");
  const span = document.getElementsByClassName("close")[0];


  
  return (
    <main>
      <div className="main-wrapper">
        <div className="main-up">
          <button className="random_button" onClick={getRandomQuote}>
            Random Quotes
          </button>

          <div className="select__random-quote">
            {randomQuote ? (
              <li className="random-quote__list">
                <p className="born-info">{`${randomQuote.birthDate}`}</p>
                <p className="death-info">{`${randomQuote.deathDate}`}</p>
                <p className="author-info">{`${randomQuote.name}`}</p>
                <p className="quote-info">{`${randomQuote.content}`}</p>
              </li>
            ) : null}
            {randomQuote ? (
              <img
                className="qoute-image"
                src={`${randomQuote.image}`}
                alt=""
              />
            ) : null}
          </div>
        </div>
        <div className="main-down">
          <div className="all-quotes">
            <ul className="quote-list">
              {quotes.map((quote) => (


                <li className="each-quote" key={quote.id}>
                 
                <em>
                  {`  ${quote.id}. ${quote.content}- ${quote.name}`}</em>

                  <div className="button-wrapper"><button className="delete-btn" onClick={()=> removeButton()} >❌</button></div>
                </li>
                
              ))}
            </ul>
          </div>
        </div>

        {/* <MainQuoteTypes setQuotes={setQuotes} setModal={setModal} quotes={quotes}/> */}
      </div>
    </main>
  );
}
export default Main;
