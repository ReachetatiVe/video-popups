import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";
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
      window.addEventListener("keydown", (e) => {
        console.log(e);
        setPressedKey(e.key);
      })
      setTimeout(() => {
        setModalActive(true);
      }, 2000);
    }
  });

  const [pressedKey, setPressedKey] = useState("");
  const [isWorked, setWorked] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [showInputScreen, setshowInputScreen] = useState(false);
  return (
    <div
      className="App"
      // onKeyDown={(e) => {
      //   console.log(e.code);
      // }}
    >
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
            pressedKey={pressedKey}
            active={showInputScreen}
            setActive={setshowInputScreen}
          />
        )}
      </div>
    </div>
  );
}

export default App;
