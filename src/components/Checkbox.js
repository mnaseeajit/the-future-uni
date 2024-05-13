import React from "react";

const Checkbox = ({checked , onChange, todo , index}) => {
    return (
           <button className="checkbox"
             style={{backgroundColor : todo.completed ? "#4eb570" : "white"}}
             onClick={()=>onChange(index)}
             checked={checked}
           ></button>
    )
}

export default Checkbox;