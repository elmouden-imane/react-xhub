import { useState } from "react";


const TodoList = () => {
    const [todoList,SetTodoList] = useState(["First item","First item","First item","First item"])
    // const [nb,SetNB] = useState(1)
    return (
      <div>
          <ul>
              {/* <li>{nb}</li> */}
              {todoList.map(
                item=>
                <li>{item}</li>
                )}
          </ul>
      </div>
    );
  }
   
  export default TodoList;