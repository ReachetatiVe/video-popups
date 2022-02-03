import Button from "./Button";
import "./../styles/keyboard.scss";
import { useEffect, useState } from "react";

export interface Props {
  updateNumber:Function;
}

const Keyboard = (props: Props) => {

  useEffect(() => {
    if (!isWorked) {
      setWorked(true);
      window.addEventListener("keydown", (e) => {
        console.log(e);
        props.updateNumber(e.key);
      })
    }
  });

  const [isWorked, setWorked] = useState(false);
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
