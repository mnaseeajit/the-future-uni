import React from "react";

const Button = ({onDelete , index}) => {
    return (
        <button
         className="delete" onClick={()=>onDelete(index)}>X</button>
    )
}

export default Button;