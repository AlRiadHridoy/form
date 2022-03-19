import React, { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [item, setItem] = useState([]);
  const addItem = (event) => {
    setTemp(event.target.value);
  };

  const submit = () => {
    setItem((prev) => {
      return [...prev, temp];
    });
    setTemp("");
  };

  const delItem = (index) => {
    setItem((prev) => {
      let update = [...prev];
      update.splice(index, 1);
      return update;
    })
  };

  return (
    <div className="container">
      <div className="to_do">
        <h3>To Do App</h3>
        <div className="add_item">
          <input
            value={temp}
            onChange={addItem}
            type="text"
            className="inset_value"
            placeholder="Add a item"
          />
          <button onClick={submit} className="insert_btn">
            +
          </button>
        </div>
        <ol>
          {item.map((ele, index) => {
            return (
              <li key={index}>
                <span
                  onClick={() => {
                    delItem(index);
                  }}
                >
                  <i className="fas fa-times"></i>
                </span>
                {ele}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
