import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/actions/todoActions';
import TODOS from './components/TODOS';
import { useEffect, useState } from 'react';

function App() {

  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos)

  const [todo, setTodo] = useState("")
  const [id, setId] = useState(1)

  const handleClick = (e) => {
    e.preventDefault();
    if(todo){
      dispatch(addTodo({todo, id}));
      setTodo('');
      setId(id+1);
      console.log(todos);
      e.target[0].value = "";
      }else{alert("Please enter a todo")}

    }

  return (
     <div className="App">
        <p>TODO App</p>
        <p>by Pranav Pokale</p>
        <form
           onSubmit={(e) => {
              handleClick(e);
           }}
        >
           <input
              id="input"
              onChange={(e) => {
                 setTodo(e.target.value);
              }}
              type="text"
              required
              className="input"
           />
           <label htmlFor="input">TODO</label>
           <button type="submit" className="add-btn">
              Create TODO
           </button>
        </form>
        <TODOS />
     </div>
  );
}

export default App;
