import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
    let myStyle={
        minHeight:"7vh",
        margin:"40px auto"
    }
    return (
     <div className='container my-3' style={myStyle}>
        <h1 className="my-3">Todo List</h1>
        {props.todos.length===0 ? "No Todo Display":
         props.todos.map((todo)=>{
             return ( 
                 <>
             <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
             </>
             )
         })}
        </div>
    )
}
export default Todos
