import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.simg}
        alt="card_img"
        className="card_img"
      />
      <div className="card_content">
        <h3 className="card_title">{ props.sname }</h3>
        <a href={props.link} target="_blank" className="card_link">
          Watch now
        </a>
      </div>
    </div>
  );
}

export default Card;