import './App.css';
import React, {useState} from "react";
import List from './components/List'

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState([]);

  const handleNewTodo = (e) => {
    e.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    };

    setTodo([...todo, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodo = todo.filter((todo, i) => {
      return i !== delIdx
    });
    setTodo(filteredTodo);
  };

  const handleTodoCheck = (idx) => {
    const updatedTodo = todo.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    })

    setTodo(updatedTodo)
  }

  return (
    <div className="App">
      <h1 className="">Your Fancy To-Do List</h1>
      <form 
        onSubmit={(e) => {
          handleNewTodo(e);
        }}
      >
        {newTodo.length && newTodo.length < 3 ? <p className="text-dark">Needs at least 3 Characters</p> : ""
                    }
        <input
          className="form-control"
          onChange={(e) => {
            setNewTodo(e.target.value);
          }} type="text" value= {newTodo}
        />
        

        <div className="btn">
          <button>Add to your ToDo list</button>
        </div>
      </form>
      <hr />

      {todo.map((todo, i) =>{
        const todoClass = ["bold", "italic"];

        if (todo.complete) {
          todoClass.push("line-through");
        }

        return (
          <List key={i} todo={todo} 
          handleTodoCheck={handleTodoCheck} 
          i={i} 
          handleTodoDelete={handleTodoDelete}/>
        );
      })}

    </div>
  );
}

export default App;
