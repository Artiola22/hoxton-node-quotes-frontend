import { Quote } from "../Types/Types";

type Props ={
    modal: string
    setModal:  React.Dispatch<React.SetStateAction<string>>
    quotes: Quote[]
    setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>
    
}

type AddForm = HTMLFormElement & {
    content: HTMLTextAreaElement;
    name: HTMLInputElement;
    image: HTMLInputElement;
    birthDate: HTMLInputElement;
    deathDate: HTMLInputElement;
    reset: () => void;
  };
function Modal({modal , setModal, quotes, setQuotes}: Props){

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
            setQuotes(newQuote);
          });
      }
    return(
        <div className="modal" id="myModal" >
            <div className="modal-content">
              <span className="close" onClick={function(){
                  setModal('')
                //  if(modal === null) return
                // modal.style.display = 'none'
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
             
              
              <input type="text" name="name" placeholder="Name and Surname" />
             
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
    )
}
export default Modal