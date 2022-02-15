import { Quote } from "../Types/Types"
import { Props } from "./Main";


function MainQuoteTypes({ quotes} : Props){
    return(
        <div>
           {/* <div className="quotes-all">
        <ul className="quotes-list">
          {quotes.map((quote) => (

            <li  key={quote.id}>{` ${quote.content}- ${quote.name}`}</li>
            
          ))}
        </ul>
      </div> */}
        </div>
    )
}
export default MainQuoteTypes