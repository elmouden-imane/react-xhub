import { useState } from "react";
import Update from "./updateComponent";


const TodoList = ({listData , handleCheckbox}) => {
    // const [nb,SetNB] = useState(1)

    const handleClickupdate = () => {
      console.log("hi")
    };


    return (
      <div>
          <ul>
              {/* <li>{nb}</li> */}
              {listData.map(
                (item)=>
                <><li id={item.id} key={item}> {item.label} <input id={item.id} type="checkbox"
                checked={item.value}
                onChange={()=>handleCheckbox(item.id)} /><Update handleClickupdate={handleClickupdate} /> 

                </li></>
                )}

          </ul>
      </div>
    );
  }
   
  export default TodoList;