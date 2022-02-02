import "./../styles/button.scss";

export interface Props {
  text: string;
  onClick?: React.MouseEventHandler;
}

function Button(props: Props) {
  return (
      <a className="button" href="#" onClick={props.onClick}>
        {props.text}
      </a>
  );
}

export default Button;
