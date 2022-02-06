//@ts-nocheck
import Button from "./Button";
import "./../styles/keyboard.scss";
import { useEffect, useRef, useState } from "react";
import mobxStore from "../store/mobxStore";
import { observer } from "mobx-react-lite";

const Keyboard = observer(() => {
  const btnRef = useRef(null);
  const [isWorked, setWorked] = useState(false);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    if (!isWorked) {
      setWorked(true);
      if (btnRef.current) btnRef.current.focus();

      window.addEventListener("keydown", (e) => {
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
          case "Backspace":
            mobxStore.removeLastSymbol();
            break;
        }
      });
    }
  });


  return (
    <div className="keyboard">
      {array.map((el, index) => {
        return (
          <Button
            text={String(el)}
            key={index}
            onClick={() => {
              mobxStore.concatPhoneNumber(String(el));
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 37) {
                console.log("стрелка влево");
              } else if (event.keyCode === 39) {
                console.log("стрелка вправо");
              }
            }}
          />
        );
      })}
      <Button
        text="Стереть"
        onClick={() => mobxStore.removeLastSymbol()}
      />
      <Button text="0" ref={ btnRef} onClick={() => mobxStore.concatPhoneNumber("0")} />
    </div>
  );
});

export default Keyboard;
