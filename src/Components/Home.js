import { useState } from "react";
import Addcmp from "./addComponent";
import Delete from "./deleteComponent";
import TodoList from "./todoList";
const tt = [
  { id: 0, label: "firstItem", value: false },
  { id: 1, label: "SecondItem", value: false },
  { id: 2, label: "firstItem", value: false },
  { id: 3, label: "firstItem", value: false },
  { id: 4, label: "firstItem", value: false },
  { id: 5, label: "firstItem", value: false },
  { id: 6, label: "firstItem", value: false },
];

const Home = () => {
  const [inputValue, setInputItem] = useState("Item");
  const [todoList, SetTodoList] = useState(tt);

  const handleChange = (value) => {
    setInputItem(value);
    console.log(value);
  };

  const handleAdd = () => {
    const tempList = [...todoList];

    if (todoList.length == 0) {
      tempList.push({ id: 0, label: inputValue, value: false });
    } else {
      var i = todoList[todoList.length - 1].id;
      tempList.push({ id: i + 1, label: inputValue, value: false });
    }
    console.log(tempList);

    SetTodoList(tempList);
  };
  //

  const handleCheckbox = (id) => {
    const tempState = [...todoList]; //copie
    tempState.map((item) => {
      if (item.id === id) {
        item.value = !item.value;
      }
    });
    SetTodoList(tempState);
  };

  const handleUpdate = (id) => {
    const tempState = [...todoList]; //copie
    tempState.map((item) => {
      if (item.id === id) {
        item.label = inputValue;
      }
    });
    SetTodoList(tempState);
  };

  const handleClick = () => {
    const tempState = [...todoList]; //copie
    // const arr=[]
    // tempState.map(item=>{
    //   if (item.value===false){
    //    arr.push(item)    }

    // })
    // SetTodoList(arr)

    SetTodoList(
      tempState.filter(function (e) {
        return e.value === false;
      })
    );
    //   //SetTodoList(tempState.filter(e=> e.value === false))
  };

  return (
    <div className="home">
      <Addcmp
        value={inputValue}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <TodoList listData={todoList} handleCheckbox={handleCheckbox}  handleUpdate={handleUpdate}/>
      <Delete handleClick={handleClick} />
    </div>
  );
};

export default Home;
