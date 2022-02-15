import { useEffect, useState } from "react";
import { Quote } from "../Types/Types";
import MainQuote from "../Components/MainQuote";
type Props = {
  quotes: Quote[];
};
type AddForm = {
  content: content;
  name: name;
  image: image;
  birthDate: birthDate;
};
function Main({ quotes }: Props) {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  function getRandomQuote() {
    fetch("http://localhost:4000/random")
      .then((resp) => resp.json())
      .then((randomQuote) => setRandomQuote(randomQuote));
  }

  const [newQuote, setNewQuote] = useState<Quote | null>();
  function createNewQuote({ content, name, image, birthDate }: Quote) {
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
      })
        .then((resp: { json: () => any }) => resp.json())
        .then((resp: any) => {
          const newQuote = JSON.parse(JSON.stringify(quotes));
          newQuote.push(resp);
          setNewQuote(newQuote);
        }),
    });
  }
  return (
    <main>
      <div className="quotes-all">
        <ul className="quotes-list">
          {quotes.map((quote) => (
            <li key={quote.id}>{` ${quote.content}- ${quote.name}`}</li>
          ))}
        </ul>

        <button onClick={getRandomQuote}>Random Quotes</button>
        <div className="select__random-quote">
          {randomQuote ? (
            <li className="random-quote__list">
              Born in {`${randomQuote.birthDate}`}
              <b>{`  ${randomQuote.content}-${randomQuote.name}`} </b>
            </li>
          ) : null}
          {randomQuote ? (
            <img className="qoute-image" src={`${randomQuote.image}`} alt="" />
          ) : null}

          <form
            className="form"
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              const formEl = e.target as AddForm;

              const nameEl = formEl.name.value;
              const birthDateEl = formEl.birthDate.value;
              const imageEl = formEl.image.value
              const contentEl = formEl.content.value

              createNewQuote(nameEl, birthDateEl, imageEl, contentEl)
              formEl.reset()
            }}
          >
            <hr />
            <b>Create a new QUOTE:</b>
            <hr />
            {/* <label htmlFor="">Name and Surname</label> */}
            <input type="text" name="name" placeholder="Name and Surname" />
            {/* <label htmlFor="">Birth and Death </label> */}
            <input type="text" name="birth" placeholder="Birth and Death" />
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
    </main>
  );
}
export default Main;
