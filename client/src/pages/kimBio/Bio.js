import React from "react";
import "../../stylesheet/Styles.css";
import "./Bio.css";
import ProfilePic from "../../assets/TestProfile.png";
import Divider from "../../assets/Divider.png";

const Bio = () => {
  return (
    <>
      <h2 className="sub__title">Rev. Ki Kim</h2>
      <img className="divider" src={Divider} alt="" />
      <div className="bio__content content">
        <img className="bio__pic" src={ProfilePic} alt="" />
        <p>
          Mollit adipisicing duis consequat voluptate ipsum tempor ut. Velit
          deserunt id cupidatat tempor nostrud dolore elit culpa excepteur.
          Ipsum proident pariatur laboris velit reprehenderit ea. Tempor qui
          veniam sint qui in fugiat id. Ut nulla sit ipsum ad Lorem culpa magna
          exercitation ex non anim magna. Culpa fugiat sint anim in exercitation
          aute aute nostrud anim ea anim fugiat. Est irure anim proident enim
          cupidatat elit in et reprehenderit occaecat sit. Magna minim et ex
          sunt enim elit occaecat irure duis pariatur nostrud ipsum qui. Mollit
          esse veniam occaecat ex do reprehenderit ad ullamco culpa pariatur
          cillum. Consequat deserunt consequat pariatur adipisicing incididunt
          ex consequat occaecat ea deserunt elit. Amet Lorem elit enim eu
          reprehenderit aliquip veniam. Sint minim enim culpa minim tempor
          voluptate voluptate qui. Est amet voluptate deserunt esse pariatur
          magna sit. Quis ea sunt excepteur in elit irure adipisicing id.Aliqua
          est do nulla incididunt anim non ad esse occaecat consectetur. Commodo
          velit adipisicing minim excepteur laboris eiusmod non cupidatat.
          Consectetur quis deserunt nostrud dolor enim veniam id do esse eiusmod
          voluptate. Non nostrud exercitation consequat adipisicing consectetur
          consectetur veniam irure non reprehenderit veniam excepteur. In sunt
          dolor dolor sunt sunt excepteur ad cillum sint excepteur. In enim sit
          laboris amet ex aute esse consequat.Cupidatat mollit anim quis
          incididunt aliqua nostrud duis fugiat consequat nisi anim culpa ad.
          Fugiat occaecat tempor est consectetur. Adipisicing voluptate ipsum
          mollit sint sit ex magna ipsum do non ex mollit irure. Anim officia eu
          ullamco qui ipsum veniam et qui mollit non. Laboris consectetur ut
          fugiat ullamco laboris Lorem labore cillum consequat amet est amet
          deserunt. Commodo minim aute labore culpa.
        </p>
      </div>
    </>
  );
};

export default Bio;
