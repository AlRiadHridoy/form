import React, { useState } from "react";

function CreatNote(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  const inputNote = (event) => {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const creatNote = () => {
    props.pass(note);
    setNote({ title: "", content: "" });
  };
  return (
    <div className="creat_note">
      <input
        onChange={inputNote}
        name="title"
        value={note.title}
        className="note_title"
        type="text"
        placeholder="Title"
        autoComplete="off"
      />
      <textarea
        onChange={inputNote}
        name="content"
        value={note.content}
        className="note_text"
        rows="4"
        placeholder="Write note...."
      ></textarea>
      <button className="add_note" onClick={creatNote}>
        +
      </button>
    </div>
  );
}

export default CreatNote;
