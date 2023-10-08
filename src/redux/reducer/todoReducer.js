import {ADDTODO, DELETETODO, UPDATETODO} from "../actions/actionTypes"

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
       case ADDTODO:
          const updatedTodo = [...state.todos];
          updatedTodo.push({
             id: action.payload.id,
             todo: action.payload.todo,
             status: "Incomplete",
          });
          return { ...state, todos: [...updatedTodo] };

       case UPDATETODO:
          return {
             ...state,
             todos: state.todos.map((todo) => {
                if (action.payload === todo.id) {
                   return { ...todo, status: "Complete" };
                }
                return todo;
             }),
          };

       case DELETETODO:
          const filteredTodos = state.todos.filter(
             (todo) => todo.id !== action.payload
          );
          return { ...state, todos: filteredTodos };

       default:
          return state;
    }
} 

export default todoReducer;