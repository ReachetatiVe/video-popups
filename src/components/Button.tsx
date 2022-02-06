import React from "react";
import "./../styles/button.scss";

export interface Props {
  text: string;
  onClick?: React.MouseEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  isDisabled?: boolean;
}

const Button = React.forwardRef((props: Props, ref:any) => {
  return (
    <a ref={ref} className={props.isDisabled? "button disabled":"button"} href="#" onClick={props.onClick} onKeyDown={props.onKeyDown}>
      {props.text}
    </a>
  );
});

export default Button;
