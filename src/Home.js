import { useState } from "react";
import Addcmp from "./addComponent";
import TodoList from "./todoList";

const Home = () => {
  const [inputValue,setInputItem] = useState('hana')
  const [todoList,SetTodoList] = useState(["First item","First item","First item","First item"])
  
  const handleChange = (value)=>{
    setInputItem(value)
    console.log(inputValue)
  }

  const handleAdd = ()=>{
    const tempList = [...todoList]
    tempList.push(inputValue)
    console.log(tempList)

    SetTodoList(tempList)
  }

    return (
      <div className="home">
        <h2>Todo List</h2>
        <TodoList listData={todoList}/>
        <Addcmp value={inputValue} handleChange={handleChange} handleAdd={handleAdd}/>
      </div>
    );
  }
   
  export default Home;