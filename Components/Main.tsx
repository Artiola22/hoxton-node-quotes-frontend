import { Quote } from "../Types/Types"

type Props ={
    quotes: Quote[]
  }
 function Main({ quotes}:Props){
    return(
        <main>
      <div>
        <ul className='quotes-list'>
          {quotes.map(quote => 

            <li key={quote.id}>{quote.name}{quote.content}</li>
           
           )}
          
        </ul>
      </div>
      </main>
    )
}
export default Main