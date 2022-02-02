import React, { useEffect, useState } from "react";
import Background from "./components/Background";
import Button from "./components/Button";
import InputScreen from "./components/InputScreen";
import Modal from "./components/Modal";
import StartScreen from "./components/StartScreen";
import "./styles/baseStyles.scss";

function App() {
  useEffect(() => {
    if (!isWorked) {
      setWorked(true);
      setTimeout(() => {
        setModalActive(true);
      }, 2000);
    }
  });

  const [isWorked, setWorked] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [showInputScreen, setshowInputScreen] = useState(false);
  return (
    <div className="App">
      {/* <button
        onClick={() => {
          setModalActive(true);
        }}
      >
        SHOW POPUP
      </button> */}
      <Button
        text={"SHOW POPUP"}
        onClick={() => {
          setModalActive(true);
        }}
      ></Button>
      <div className="container">
        <Background />
        <Modal active={modalActive} setActive={setModalActive}>
          <StartScreen
            setActive={setModalActive}
            setShowInputScreen={setshowInputScreen}
          />
        </Modal>
        {showInputScreen && (
          <InputScreen
            active={showInputScreen}
            setActive={setshowInputScreen}
          />
        )}
      </div>
    </div>
  );
}

export default App;
