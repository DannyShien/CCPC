import React from "react";
import "../../stylesheet/Styles.css";
import "./MissionStatement.css";
import Divider from "../../assets/Divider.png";

const MissionStatemment = () => {
  return (
    <>
      {/* NOTE: Possibly wrap H2 and img tags in another div so that divider can be same width as title */}
      <h2 className="sub__title">Mission Statement</h2>
      <img className="divider" src={Divider} alt="" />
      <div className="statement__content content">
        <p>
          Magna amet est ex nisi ullamco fugiat anim. Proident anim proident
          proident veniam fugiat occaecat occaecat. Sint ipsum et incididunt
          laborum voluptate sit elit tempor elit. Eiusmod enim irure pariatur
          aute eiusmod aliquip cupidatat nostrud enim cillum anim elit ea
          nostrud. Elit laboris est eiusmod duis quis excepteur laborum mollit
          anim amet irure Lorem. Qui commodo velit exercitation et velit. Dolore
          dolor cupidatat consectetur velit aliqua voluptate pariatur mollit.
          Veniam do commodo nisi fugiat excepteur aliqua nulla fugiat. Ut ut
          laboris eu est ipsum ipsum enim eiusmod non est aute ut. Laboris
          officia velit amet fugiat ea ipsum adipisicing nostrud nostrud nisi
          exercitation voluptate. Cillum ullamco dolor velit nisi nisi enim
          incididunt officia magna duis tempor do. Culpa voluptate mollit
        </p>
      </div>
    </>
  );
};

export default MissionStatemment;
