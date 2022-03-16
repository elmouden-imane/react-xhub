import { useState } from "react";
import Update from "./updateComponent";
import image from "./748851.png";

const TodoList = ({ listData, handleCheckbox,handleUpdate}) => {
  // const [nb,SetNB] = useState(1)

  

  return (
    <div className="container">
      <ul>
        {/* <li>{nb}</li> */}
        {listData.map((item) => (
          <>
            <li id={item.id} key={item}>
              {" "}
              <div className="block"> {item.label} </div>
              <button
                type="button"
                className="btn update"
                onClick={() => handleUpdate(item.id)}
              >
                {" "}
                <img src={image} />
              </button>
              <input
                id={item.id}
                type="checkbox"
                checked={item.value}
                onChange={() => handleCheckbox(item.id)}
              />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
