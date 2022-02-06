import CloseButton from "./CloseButton";
import "./../styles/mainScreen.scss";

export interface Props {
  active: boolean;
  setActive: Function;
  children: any;
}

const MainScreen = (props: Props) => {
  return (
<div className="main-screen">
      <div className="main-screen__wrapper">
        <div className="main-screen__banner">
          {props.children}
        </div>
        <div className="main-screen__info">
          <CloseButton onClick={()=>{props.setActive(false)}}></CloseButton>
          <div className="qr-info">
            <div className="qr-info__text">
              Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
            </div>
            <div className="qr-info__img"></div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default MainScreen;