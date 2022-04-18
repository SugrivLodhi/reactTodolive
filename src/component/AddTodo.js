
import React from 'react'
import { useState } from 'react/cjs/react.development'

// preventDefault is use to shafe from page refreshment
//onchange is use to provide input in input box so that we continoustly type in input box
function AddTodo({addTodo}) {
  const submit=(e)=>{
      e.preventDefault();
      if(!title || !desc){
          alert("title or description should not be  blank")
      }
      else{
      addTodo(title,desc);
      //to remove the input box after adding the elment
      setTitle("");
      setDesc("");
      }

  }  
const [title,setTitle]=useState("");
const [desc,setDesc]=useState("");
    return (
        <div className="container my-3">
        <h1>Add Todolist</h1>
 <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title">Todo Title</label>
    <input type="text" value={title} className="form-control" id="title" onChange={(e)=>{setTitle(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter title name"/>
  </div>
  <div class="mb-3">
    <label htmlFor="desc">Todo Description</label>
    <input type="text" value={desc} class="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="desc" placeholder="enter description"/>
  </div>
 <button type="submit" class="btn btn-primary btn-success">Add Todo</button>
</form>
  </div>
    )
}

export default AddTodo
