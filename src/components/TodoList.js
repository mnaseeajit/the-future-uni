import React, { useState } from "react";
import TodoRow from "./TodoRow";

const TodoList = () => {
    const[todos , setTodo] = useState([]);
    const[inputValue , setInputValue] = useState("");

    const handleInputChange = (e) => {
         setInputValue(e.target.value)
    }

    const handleAddTodo = () => {
        if(inputValue.trim() != ""){
            setTodo([...todos , {text : inputValue , completed : false}]);
              setInputValue("");
        }
              
    }

    const handleDeleteTodo = (index) => {
         const updateTodo  = todos.filter((todo , i)=> i != index);
         setTodo(updateTodo);
    }

    const handleToggleComplete = (index) => {
        const updateTodo = todos.map((todo,i)=> 
               i === index ? {...todo , completed : !todo.completed} : todo 
        )
        setTodo(updateTodo);
    }
    console.log(todos);

    return (
        <div>
          <h1>Todo List</h1>
          
          <ul>
            {
                todos.map((todo,i)=> {
                    return <TodoRow 
                            key={i}
                            todo={todo}
                            index={i}
                            onDelete={()=>handleDeleteTodo(i)}
                            onToggleComplete={()=>handleToggleComplete(i)}
                          />
                })
            }
          </ul>

          <div id="add-container">
          <input  id="add-input"
                  type="text"
                  value={inputValue} 
                  onChange={handleInputChange}
                  placeholder="Add task here..."
          />
          <button id="Add-todo" onClick={handleAddTodo}>Add todo</button>
          </div>
          
        </div>
    )
}

export default TodoList;