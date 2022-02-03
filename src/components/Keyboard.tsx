import Button from "./Button";
import "./../styles/keyboard.scss";
import { useEffect, useState } from "react";
import mobxStore from "../store/mobxStore";
import {observer} from "mobx-react-lite";

export interface Props {
  // updateNumber:Function;
}

const Keyboard = observer((props: Props) => {

  useEffect(() => {
    if (!isWorked) {
      setWorked(true);
      window.addEventListener("keydown", (e) => {
        console.log(e);
        // props.updateNumber(e.key);
        switch (e.key) {
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
          case "0":
            mobxStore.concatPhoneNumber(e.key);
            break;
          default: return;
        }
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
});

export default Keyboard;
