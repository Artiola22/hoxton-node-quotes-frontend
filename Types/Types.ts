
export type MainQuoteType ={
    id : number
    content: string
    name: string
}
export type Quote = {
    id: number;
    name: string;
    birthDate: string | null ;
    deathDate: string | null;
    image: string;
    content: string;
  };

  export type Props ={
    quote: Quote[]
}