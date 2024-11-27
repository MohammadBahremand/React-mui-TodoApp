import { Typography , Box} from "@mui/material";
import { TodoCarts } from "./TodoCarts"
import React from "react";

export const Todo = ({ todos, checkTodo, deleteTodo }) => {


  console.log(todos.length);


  return (
    <Box  style={{justifyItems:"center" , marginTop:80}}>

      {todos.length === 0 ?
        <Typography style={{justifyItems:"center"}}>
          There are no listings yet. Please add your tasks .
        </Typography>
        : todos.map((todo) => (

          <TodoCarts key={todo.id} title={todo.title} checkTodo={checkTodo}
            id={todo.id} isCompleted={todo.isCompleted} deleteTodo={deleteTodo} />

        ))}


    </Box>
  )
}

