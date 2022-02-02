import Button, { buttonType } from "./Button";
import "./../styles/keyboard.scss";

const Keyboard = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="keyboard">
      {array.map((el) => {
        return (
          <div className="keyboard__item">
            <Button  type={buttonType.calc} text={String(el)} />
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
