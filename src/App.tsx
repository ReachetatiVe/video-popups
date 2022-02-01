import React, { useEffect, useState } from "react";
import Background from "./components/Background";
import Modal from "./components/Modal";
import StartScreen from "./components/StartScreen";
import "./styles/baseStyles.scss";

function App() {
  useEffect(() => {
    if (!isWorked) {
      setWorked(true);
      setTimeout(() => {
        setModalActive(true);
      }, 5000);
    }
  });

  const [isWorked, setWorked] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setModalActive(true);
        }}
      >
        SHOW POPUP
      </button>
      <div className="container">
        <Background />
        <Modal active={modalActive} setActive={setModalActive}>
          <StartScreen />
        </Modal>
      </div>
    </div>
  );
}

export default App;
