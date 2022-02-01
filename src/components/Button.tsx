import "./../styles/button.scss";

export interface Props {
  text: string;
  onClick: React.MouseEventHandler;
}

function Button(props: Props) {
  return (
    <div className="button" onClick={props.onClick}>
		<a href='#'>{ props.text }</a>
	</div>
  )
}

export default Button;