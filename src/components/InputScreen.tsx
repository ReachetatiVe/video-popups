import { useEffect } from "react";
import "./../styles/inputScreen.scss";
import Button from "./Button";
import Keyboard from "./Keyboard";

export interface Props {
  active: boolean;
  setActive: Function;
  pressedKey: string;
}

const InputScreen = (props: Props) => {

  useEffect(() => {
    console.log(props.pressedKey);
    props.pressedKey = "";
    // console.log(props.pressedKey);
 })

  return (
    <div className="input-screen">
      <div className="input-screen__wrapper">
        <div className="input-screen__banner">
          <div className="banner">
            <div className="banner__title">
              Введите ваш номер мобильного телефона
            </div>
            <div className="banner__phone">
              <input type="text" />
              {props.pressedKey}
              {/* +7(___)___-__-__ */}
            </div>
            <div className="banner__text">
              и с Вами свяжется наш менеждер для дальнейшей консультации
            </div>
            <div className="banner__keyboard">
              <Keyboard></Keyboard>
            </div>
            <div className="banner__checkbox">
              <div className="checkbox">
                <div className="checkbox__check"></div>
                <div className="checkbox__text">
                  Согласие на обработкуперсональных данных
                </div>
              </div>
            </div>
            <Button text="подтвердить номер"></Button>
          </div>
        </div>
        <div className="input-screen__info">
          <div className="close-button">
            <a href="">
              <div className="close-button__image">
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputScreen;
