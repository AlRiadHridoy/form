import React, { useState } from "react";
import "./App.css";
import CreatNote from "./CreatNote";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [creatNt, setCreatNt] = useState([]);
  const passEvent = (note) => {
    setCreatNt((prev) => {
      return [...prev, note];
    });
  };

  const delItem = (index) => {
    setCreatNt((oldData) => {
      return oldData.filter((val, id) => {
        return id !== index;
      });
    });
  };

  return (
    <>
      <div className="container">
        <div className="note_app">
          <Header />
          <CreatNote pass={passEvent} />
          <div className="note_render">
            {creatNt.map((value, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={value.title}
                  content={value.content}
                  onDelete={delItem}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
