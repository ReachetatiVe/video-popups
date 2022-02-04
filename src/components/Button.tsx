

import "./../styles/button.scss";

export interface Props {
  text: string;
  onClick?: React.MouseEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  // ref?: React.;
}

function Button(props: Props) {
  return (
    <a className="button" href="#" onClick={props.onClick} onKeyDown={props.onKeyDown}>
        {props.text}
      </a>
  );
}

export default Button;
