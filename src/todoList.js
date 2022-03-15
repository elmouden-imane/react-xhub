import { useState } from "react";


const TodoList = ({listData , handleCheckbox}) => {
    // const [nb,SetNB] = useState(1)

    return (
      <div>
          <ul>
              {/* <li>{nb}</li> */}
              {listData.map(
                (item)=>
                <><li id={item.id} key={item}> {item.label} <input id={item.id} type="checkbox"
                checked={item.value}
                onChange={()=>handleCheckbox(item.id)}  />  
                </li></>
                )}

          </ul>
      </div>
    );
  }
   
  export default TodoList;