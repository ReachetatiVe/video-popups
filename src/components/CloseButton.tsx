export interface Props {
  // active: boolean;
  onClick: React.MouseEventHandler;
}

const CloseButton = (props:Props) => {
  return (
<div className="close-button">
            <a href="#" onClick={props.onClick}>
              <div className="close-button__image"></div>
            </a>
          </div>
  )
}
export default CloseButton;
