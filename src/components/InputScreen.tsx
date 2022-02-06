import { observer } from "mobx-react-lite";
import { useState } from "react";
import mobxStore from "../store/mobxStore";
import "./../styles/inputScreen.scss";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Keyboard from "./Keyboard";

export interface Props {
  active: boolean;
  setActive: Function;
}

const InputScreen = observer((props: Props) => {
  const [isChecked, setChecked] = useState(false);

  const setNumberColor = () => {
    if (mobxStore.getIsValid()) return "banner__phone";
    else return "banner__phone color_red";
  };

  // const [value, setValue]= useState();
  return (
    <div className="input-screen">
      <div className="input-screen__wrapper">
        <div className="input-screen__banner">
          <div className="banner">
            <div className="banner__title">
              Введите ваш номер мобильного телефона
            </div>
            <div className={setNumberColor()}>{mobxStore.getPhoneNumber()}</div>
            <div className="banner__text">
              и с Вами свяжется наш менеждер для дальнейшей консультации
            </div>
            <div className="banner__keyboard">
              <Keyboard></Keyboard>
            </div>
            <div className="banner__checkbox">
              <CheckBox text="Согласие на обработку персональных данных" active={isChecked} setActive={setChecked}></CheckBox>
            </div>
            <Button text="ПОДТВЕРДИТЬ НОМЕР"></Button>
          </div>
        </div>
        <div className="input-screen__info">
          <div className="close-button">
            <a href="">
              <div className="close-button__image"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
export default InputScreen;
