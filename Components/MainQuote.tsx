import { Quote } from "../Types/Types"

type Props ={
    quote: Quote[]
}
function MainQuoteTypes({quote}: Props){
    return(
        <div>
            <div>
                <span>{quote.content}</span>
                <span>{`-${quote.name}`}</span>
            </div>
        </div>
    )
}
export default MainQuoteTypes