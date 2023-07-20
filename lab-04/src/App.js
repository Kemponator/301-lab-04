import "./App.css";

import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast";

import data from "./data.json";

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [beastData, setBeastData] = useState(data);

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  function handleBeasts(event) {
    let beastNum = parseInt(event.target.value);
    // console.log(typeof beastNum);
    const filteredBeasts = data.filter((beast) => beast.horns === beastNum);
    event.target.value === ""
      ? setBeastData(data)
      : setBeastData(filteredBeasts);
  }

  return (
    <div className="App">
      <Header handleBeasts={handleBeasts} />
      <Main beastData={beastData} handleModal={handleModal} />
      {modal && (
        <SelectedBeast modalContent={modalContent} closeModal={closeModal} />
      )}
      <Footer />
    </div>
  );
}

export default App;
