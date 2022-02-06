import "./../styles/successScreen.scss";

const SuccessScreen = () => {
  return (
    <div className="success-screen">
      <div className="success-screen__content">
        <div className="success-screen__title">ЗАЯВКА <br/> ПРИНЯТА</div>
        <div className="success-screen__text">
          Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
