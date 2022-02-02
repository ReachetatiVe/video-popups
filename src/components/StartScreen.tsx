import React from 'react';
import "./../styles/startScreen.scss";
import img from "./../assets/img/startScreen/qr_code.svg";
import Button from './Button';

export interface Props {
  setActive: Function;
}

function StartScreen(props:Props) {
  // const image = require("../assets/img/startScreen/qr_code.svg");
  return (
    <div className="content">
      <div className="content__wrapper">
        <div className="content__title">
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО<br/> МАЛЫША!<br/> ПОДАРИТЕ ЕМУ СОБАКУ!
        </div>
        <div className="content__image">
          <img src={img} alt="qr" />
        </div>
        <div className="content__text">Сканируйте QR-код или нажмите ОК</div>
        <div className="content__button">
          <Button text='OK' onClick={()=>props.setActive(false)}></Button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
