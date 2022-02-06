import { useEffect, useState } from "react";
import Background from "./components/Background";
import InputScreen from "./components/InputScreen";
import Modal from "./components/Modal";
import StartScreen from "./components/StartScreen";
import "./styles/baseStyles.scss";
import FocusTrap from "focus-trap-react";
import MainScreen from "./components/MainScreen";
import SuccessScreen from "./components/SuccessScreen";
import mobxStore from "./store/mobxStore";
import { observer } from "mobx-react-lite";

const App = observer(() => {
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
  const [showInputScreen, setshowInputScreen] = useState(false);
  return (
    <div className="App">
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
              <MainScreen
                active={showInputScreen}
                setActive={setshowInputScreen}
              >
                {mobxStore.getSuccess() ? <SuccessScreen /> : <InputScreen />}
              </MainScreen>
            )}
          </div>
        </FocusTrap>
      </div>
    </div>
  );
});

export default App;
