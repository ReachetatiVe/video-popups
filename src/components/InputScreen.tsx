import "./../styles/inputScreen.scss";
import Button from "./Button";

export interface Props {
  active: boolean;
  setActive: Function;
}

const InputScreen = (props: Props) => {
  return (
    <div className="input-screen">
      <div className="input-screen__wrapper">
        <div className="input-screen__banner">
          <div className="banner">
            <div className="banner__title">
              Введите ваш номер мобильного телефона
            </div>
            <div className="banner__phone">+7(___)___-__-__</div>
            <div className="banner__text">
              и с Вами свяжется наш менеждер для дальнейшей консультации
            </div>
            <div className="banner__button-block"></div>
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
      </div>
    </div>
  );
};
export default InputScreen;
