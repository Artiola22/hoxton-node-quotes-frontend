import { Component, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Components/Main";
import Header from "../Components/Header";
import "./App.css";
import { Quote } from "../Types/Types";
import Modal from "../Components/Modal";

function App() {
  const [modal, setModal] = useState("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  function getQoutesFromServer() {
    fetch("http://localhost:4000/quotes")
      .then((resp) => resp.json())
      .then((quotes) => setQuotes(quotes));
  }
  useEffect(getQoutesFromServer, []);

  const containerStyle = modal
    ? { overflow: "hidden", height: "100vh" }
    : undefined;
  return (
    <div className="App">
      {modal === "add" && (
        <Modal
          quotes={quotes}
          setQuotes={setQuotes}
          modal={modal}
          setModal={setModal}
        />
      )}
      <Header setModal={setModal}/>
      <Routes>
        <Route
          path="/quotes"
          element={
            <Main quotes={quotes} setQuotes={setQuotes} setModal={setModal} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
