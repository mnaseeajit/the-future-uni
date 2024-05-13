import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";

const TodoRow = ({todo ,index , onDelete , onToggleComplete}) => {
    return (
        <div className="row">
           <Checkbox 
            Checked={todo.complete}
            onChange={()=> onToggleComplete(index)}
            todo={todo}
            index={index}
           />
           <span>{todo.text}</span>
           <Button onDelete={()=>onDelete(index)} index={index}/>
        </div>
    )
}

export default TodoRow;