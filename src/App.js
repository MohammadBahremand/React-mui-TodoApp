import { useState } from "react";
import { Todo } from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { v4 as uuid } from "uuid";


function App() {
  const [todos, setTodos] = useState([])


  const addTodo = (text) => {
    console.log(text);

    const newTodo = {
      id: uuid(),
      title: text,
      isCompleted: false
    }
    setTodos([...todos, newTodo])
    console.log(newTodo);

  }
   

console.log("todos" ,todos);


  const checkTodo = (id) => {
    console.log(id);
    setTodos(
      
      todos.map((todo) => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted
        console.log(todo.isCompleted);
        return todo

       

      })
    )

  }




  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div >
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
