type Props = {
  setModal: React.Dispatch<React.SetStateAction<string>>;
};

function Header({ setModal }: Props) {
  return (
    <div className="header">
      <h1 className="title">WELCOME TO THE QUOTES </h1>

      <button
        id="myBtn"
        onClick={function () {
          // if(modal === null) return
          // modal.style.display = "block"
          setModal("add");
        }}
      >
        Create a new quote
      </button>
      
    </div>
  );
}
export default Header;
