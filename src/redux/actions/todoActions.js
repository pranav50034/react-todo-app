import { ADDTODO, DELETETODO, UPDATETODO } from "./actionTypes";

export const addTodo = (data) => {
    return {
        type: ADDTODO,
        payload: data
    }
}

export const deleteTodo = (id) => {
    return {
       type: DELETETODO,
       payload: id,
    };
}

export const updateTodo = (id) => {
   return {
      type: UPDATETODO,
      payload: id,
   };
};