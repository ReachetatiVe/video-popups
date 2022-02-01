import "./../styles/modal.scss";

export interface Props {
  active: boolean;
  setActive: Function;
  children: any;
}

function Modal(props: Props) {
  return (
    <div
      className={props.active ? "modal active" : "modal"}
      onClick={() => props.setActive(false)}
    >
      <div className={props.active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
