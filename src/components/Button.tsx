
import "./../styles/button.scss";
export enum buttonType{
  calc,
  banner,
}


export interface Props {
  text: string;
  onClick?: React.MouseEventHandler;
  type: buttonType;
}

const setLinkModificator=(type:buttonType)=>{
  if (type === buttonType.calc) return "button__link button__link_calc"
  else return "button__link"
}

function Button(props: Props) {
  return (
    <div className="button" onClick={props.onClick}>
		<a className={setLinkModificator(props.type)} href='#'>{ props.text }</a>
	</div>
  )
}

export default Button;