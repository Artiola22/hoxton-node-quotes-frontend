import { useEffect, useState } from "react";
import { Quote } from "../Types/Types";
import MainQuote from "../Components/MainQuote";
export type Props = {
  quotes: Quote[];
};

type AddForm = HTMLFormElement & {
  content: HTMLTextAreaElement;
  name: HTMLInputElement;
  image: HTMLInputElement;
  birthDate: HTMLInputElement;
  deathDate: HTMLInputElement;
  reset: () => void;
};
function Main({ quotes }: Props) {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  function getRandomQuote() {
    fetch("http://localhost:4000/random")
      .then((resp) => resp.json())
      .then((randomQuote) => setRandomQuote(randomQuote));
  }

  const [newQuote, setNewQuote] = useState<Quote | null>();
  function createNewQuote(
    content: string,
    name: string,
    image: string,
    birthDate: string,
    deathDate: string
  ) {
    fetch(`http://localhost:4000/quotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        name: name,
        image: image,
        birthDate: birthDate,
        deathDate: deathDate,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        const newQuote = JSON.parse(JSON.stringify(quotes));
        newQuote.push(resp);
        setNewQuote(newQuote);
      });
  }

  // Modal

  const modal: HTMLElement | null = document.getElementById("myModal")
  const btn = document.getElementById("myBtn")
  const span = document.getElementsByClassName("close")[0]

  
  return (
    <main>
      <div className="main-wrapper">
        {/* <ul>
          {quotes.map((quote) => (
            <li key={quote.id}>{` ${quote.content}- ${quote.name}`}</li>
          ))}
        </ul> */}
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



          <button id="myBtn" onClick={function(){
            modal.style.display = "block"
          }}>Open Modal</button>
          <div className="modal" id="myModal" >
            <div className="modal-content">
              <span className="close" onClick={function(){
                modal.style.display = 'none'
              }}>&times;</span>
            <form
              className="form"
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                const formEl = e.target as AddForm;

                const nameEl = formEl.name.value;
                const birthDateEl = formEl.birthDate.value;
                const imageEl = formEl.image.value;
                const contentEl = formEl.content.value;
                const deathDateEl = formEl.deathDate.value;

                createNewQuote(
                  nameEl,
                  birthDateEl,
                  imageEl,
                  contentEl,
                  deathDateEl
                );
                formEl.reset();
              }}
            >
              
              <h3 className="quote_title"><b>Create a new QUOTE:</b></h3>
             
              {/* <label htmlFor="">Name and Surname</label> */}
              <input type="text" name="name" placeholder="Name and Surname" />
              {/* <label htmlFor="">Birth and Death </label> */}
              <input
                type="text"
                name="birthDate"
                placeholder="Enter birthday here.. "
              />
              <input
                type="text"
                name="deathDate"
                placeholder="Enter death here.."
              />
              {/* <label htmlFor="">Image(link)</label> */}
              <input type="text" name="image" placeholder="Image URL" />
              <br />
              <textarea
                name="content"
                id=""
                cols={30}
                rows={5}
                placeholder="Enter your quote please.."
              ></textarea>
              <button type="submit">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
