import { Header } from './component/Header';
import Todos from './component/Todos';
import Footer from './component/Footer';
import { useState } from 'react';
import AddTodo from './component/AddTodo';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";
import About from './About';

function App() {
  let intitTodo;
  if(localStorage.getItem("todos")===null){
    intitTodo=[];
  }
  else{
    intitTodo=JSON.parse(localStorage.getItem("todos"));
  }
  //on delete the todo
   const onDelete=(todo)=>{
     setTodos(todos.filter((e)=>{
      return e!==todo;
     }))
    
   }
   //when we call setTodos ,they will not change the todos immediatly
   //so without changing Todo We  directly call some other thing which is not good
   //thats why we use UseEffect hooks
   const [todos,setTodos]=useState(intitTodo);
   useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
   }, [todos])
// const [todos,setTodos]=useState([
//     {
//     sno:1,
//     title:"Go tothe market",
//     desc:"You need to got the market for job purpuse"
//   },
//   {
//     sno:2,
//     title:"Hello everyone i am softwere Developer",
//     desc:"I have completed html css javascript.and react js for developing any softwere"
//   },  {
//     sno:3,
//     title:"My Brother is Army",
//     desc:"He will join his army camp in a may 2023, He is very hardworking "
//   },
// ])
 
// To add to in our app
const addTodo=(title,desc)=>{
  //updating serial number base on availble todo
  let sno;
   if(todos.length===0){
      sno=0;
      }
   else{
    sno=todos[todos.length-1].sno+1;
      }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo])
}


  return (
    <>
<Router>
<Header title="MyTodoList" searchbar={false}/>

<Switch>
      <Route exact path="/" render={()=>{
        return(
          <>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          </>
        )
      }}>
          </Route> 
          <Route  exact path="/about">
            <About/>
          </Route> 
        </Switch>
        {/* <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/> */}
       <Footer/>
</Router>
</>  
  );
}

export default App;
