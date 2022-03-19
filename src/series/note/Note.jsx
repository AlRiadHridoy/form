import React from "react";

const Note = (props) => {
  const del = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note_item">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <i className="fas fa-minus-circle" onClick={del}></i>
    </div>
  );
};

export default Note;
