import React, { useState } from 'react';
import Background from './components/Background';
import Modal from './components/Modal';
import StartScreen from './components/StartScreen';
import "./styles/baseStyles.scss";

function App() {

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
          <StartScreen/>
          {/* <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            ullam labore in nulla tempore ducimus quae cupiditate, incidunt
            dolor consequatur ea, neque nisi placeat pariatur voluptatem vitae
            autem fuga similique? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed impedit placeat atque at iste quas tenetur
            illo rerum et voluptate, cum molestiae, suscipit doloribus ducimus
            reiciendis eius, ipsam dolor! Libero.
          </p> */}
        </Modal>
      </div>
    </div>
  );
}

export default App;
