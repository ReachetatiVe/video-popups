import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";
import Background from "./components/Background";
import Button from "./components/Button";
import InputScreen from "./components/InputScreen";
import Modal from "./components/Modal";
import StartScreen from "./components/StartScreen";
import "./styles/baseStyles.scss";
import FocusTrap from "focus-trap-react";

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
        <FocusTrap>
        <div>
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
          </FocusTrap>
      </div>
    </div>
  );
}

export default App;
