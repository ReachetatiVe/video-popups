import { observer } from "mobx-react-lite";
import "./../styles/checkbox.scss";

export interface Props {
  text: string;
  active: boolean;
  setActive: Function;
}

const CheckBox = observer((props: Props) => {
  const setChecked = () => {
    if (props.active) return "checkbox__img active";
    else return "checkbox__img";
  };

  return (
    <div className="checkbox">
      <a
        className="checkbox__check"
        onClick={() => props.setActive(!props.active)}
        href="#"
      >
        <div className="checkbox__img__wrapper">
          <div className={setChecked()}></div>
        </div>
      </a>
      <div className="checkbox__text">{props.text}</div>
    </div>
  );
});
export default CheckBox;
