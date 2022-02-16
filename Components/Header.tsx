type Props ={
  setModal: React.Dispatch<React.SetStateAction<string>>
}

function Header({setModal}: Props) {
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
            Open Modal
          </button>
    </div>
  );
}
export default Header;
