import Button from "./Button";
import "./../styles/keyboard.scss";

const Keyboard = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="keyboard">
      {array.map((el,index) => {
        return (
          <Button text={String(el)} key={index}/>
        );
      })}
        <Button text="Стереть" />
        <Button text="0" />
    </div>
  );
};

export default Keyboard;
