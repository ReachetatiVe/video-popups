import "./../styles/modal.scss";

export interface Props {
  active: boolean;
  setActive: Function;
  children: any;
  position_left?: boolean;
}

function Modal(props: Props) {
  const setClassName = () => {
    let name:string = "modal";
    if (props.position_left) {
      name += " modal_left"
    }
    if (props.active) name += " active"
    return name;
  }
  return (
    <div
      className={ setClassName()}
      // className={props.active ? "modal active" : "modal"}
      onClick={() => props.setActive(false)}
    >
      <div className={props.active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
