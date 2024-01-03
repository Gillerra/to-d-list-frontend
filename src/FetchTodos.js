import axios from "axios";

const myURL = "https://to-do-list-ydgt.onrender.com";

const getAllTodos = (setTodo) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
    setTodo(data)
    })
}

const addTodo = (title, setTitle, setTodo) => {
    axios.post(`${myURL}/saveTodoList`, {title})
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllTodos(setTodo)
    })
}

const editTodo = (todoId, title, setTodo, setTitle, setEditing) => {
    axios.post(`${myURL}/editTodo`, {_id: todoId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllTodos(setTodo)
    })
}

const deleteTodo = (_id, setTodo) => {
    axios.post(`${myURL}/deleteTodo`, {_id})
    .then((data) => {
        console.log(data)
        getAllTodos(setTodo)
    })
}

export {getAllTodos, addTodo, editTodo, deleteTodo};