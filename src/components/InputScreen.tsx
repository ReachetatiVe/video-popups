import { observer } from "mobx-react-lite";
import { useState } from "react";
import mobxStore from "../store/mobxStore";
import "./../styles/inputScreen.scss";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Keyboard from "./Keyboard";

const InputScreen = observer(() => {
  const [isChecked, setChecked] = useState(false);

  const setNumberColor = () => {
    if (mobxStore.getIsValid()) return "input-screen__phone";
    else return "input-screen__phone color_red";
  };

  const checkValidation = () => {
    // if ()
  };

  return (
    <div className="input-screen">
      <div className="input-screen__title">
        Введите ваш номер мобильного телефона
      </div>
      <div className={setNumberColor()}>{mobxStore.getPhoneNumber()}</div>
      <div className="input-screen__text">
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </div>
      <div className="input-screen__keyboard">
        <Keyboard></Keyboard>
      </div>
      <div className="input-screen__checkbox">
        {mobxStore.isValid ? (
          <CheckBox
            text="Согласие на обработку персональных данных"
            active={mobxStore.getChecked()}
            setActive={mobxStore.setChecked}
          ></CheckBox>
        ) : (
          <div className="input-screen__label">Неверно введён номер</div>
        )}
      </div>
      {mobxStore.isValid && mobxStore.getChecked() ? (
        <Button
          isDisabled={false}
          text="ПОДТВЕРДИТЬ НОМЕР"
          onClick={() => {
            mobxStore.setSuccess(true);
            console.log(mobxStore.getSuccess());
            
          }}
        ></Button>
      ) : (
        <Button
          isDisabled={true}
          text="ПОДТВЕРДИТЬ НОМЕР"
        ></Button>
      )}
    </div>
  );
});
export default InputScreen;
