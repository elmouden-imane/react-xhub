import { useState } from "react";


const TodoList = ({listData}) => {
    // const [nb,SetNB] = useState(1)
    return (
      <div>
          <ul>
              {/* <li>{nb}</li> */}
              {listData.map(
                item=>
                <li key={item}>{item}</li>
                )}
          </ul>
      </div>
    );
  }
   
  export default TodoList;