import { Props } from "./Main";

function Header({ quotes }: Props) {
  return (
    <div className="header">
      <h1 className="title">WELCOME TO THE QUOTES </h1>
      {/* <div className="quotes-all">
        <ul className="quotes-list">
          {quotes.map((quote) => (
            <li  key={quote.id}>{` ${quote.content}- ${quote.name}`}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
export default Header;
