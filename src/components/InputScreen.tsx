import { observer } from "mobx-react-lite";
import { useState } from "react";
import mobxStore from "../store/mobxStore";
import "./../styles/inputScreen.scss";
import Button from "./Button";
import CheckBox from "./CheckBox";
import CloseButton from "./CloseButton";
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

  const checkValidation = () => {
    // if ()
  };

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
              {mobxStore.isValid ? (
                <CheckBox
                  text="Согласие на обработку персональных данных"
                  active={isChecked}
                  setActive={setChecked}
                ></CheckBox>
              ) : (
                <div className="banner__label">Неверно введён номер</div>
              )}
            </div>
            {mobxStore.isValid && isChecked ? (
              <Button
                text="ПОДТВЕРДИТЬ НОМЕР"
                onClick={() => console.log("plug")}
              ></Button>
            ) : (
              <Button isDisabled={true} text="ПОДТВЕРДИТЬ НОМЕР"></Button>
            )}
          </div>
        </div>
        <div className="input-screen__info">
          <CloseButton onClick={()=>{props.setActive(false)}}></CloseButton>
          <div className="qr-info">
            <div className="qr-info__text">
              Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
            </div>
            <div className="qr-info__img"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default InputScreen;
