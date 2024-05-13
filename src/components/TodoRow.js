import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";

const TodoRow = ({todo ,index , onDelete , onToggleComplete ,onMouseEnter , onMouseLeave , isHovered}) => {
    return (
        <div className="row"
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
        >
           <Checkbox 
            Checked={todo.complete}
            onChange={()=> onToggleComplete(index)}
            todo={todo}
            index={index}
           />
           <span>{todo.text}</span>
           {isHovered ? (<Button onDelete={()=>onDelete(index)} index={index}/>) : <p></p>}
        </div>
    )
}

export default TodoRow;