import { useEffect, useState } from 'react';
import './App.css';
import { MyTodo } from './MyTodo';
import { getAllTodos, addTodo, editTodo, deleteTodo } from './FetchTodos';
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {

  const [myTodo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllTodos(setTodo)
  }, [])
  
  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setTodoId(_id)
  }

  const container = useRef();
  useGSAP(() => {
    gsap.from(".heading", { opacity:0, delay:.4, duration: 1, y: -10 })
    gsap.to(".btn", { delay: 2, duration: 1.2, rotation: 360, ease:"bounce.in" })
  }, { scope: container })

  return (
    <div>

    <div ref={container} className="app">
      <div className="heading">
      <h1>Список дел</h1>
      </div>

      <input type="text" 
      placeholder="Пишу самое важное здесь"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <div className="btn">
      <button
      disabled={!title}
      onClick={ editing ? () => editTodo(todoId, title, setTodo, setTitle, setEditing) : 
      () => addTodo(title, setTitle, setTodo)}>
      { editing ? "Изменить" : "Добавить в список"}
      </button>
      </div>

      {myTodo.map((todo) => <MyTodo todo={todo.title} key={todo._id}
      updatingInInput = {() => updatingInInput(todo._id, todo.title)} 
      deleteTodo={() => deleteTodo(todo._id, setTodo)}/>
      )}
      
    </div>
    </div>
  );
}

export default App;
