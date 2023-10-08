import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { deleteTodo, updateTodo } from "../../redux/actions/todoActions";

const TODOS = () => {
   const todos = useSelector((state) => state.todos);
   const dispatch = useDispatch();

   const handleDelete = (id) => {
        dispatch(deleteTodo(id));
   }

   useEffect(() => {
    console.log(todos);
   })

   const handleUpdate = (id) => {
    dispatch(updateTodo(id))
   } 

   return (
      <div className="todo">
        {todos.length ? <table>
            <tbody style={{fontSize: "1.6rem"}}>
               <tr>
                  <th style={{ maxWidth: "600px", minWidth: "600px" }}>TODO</th>
                  <th style={{ minWidth: "400px" }}>STATUS</th>
                  <th style={{ minWidth: "200px" }}></th>
               </tr>
               {todos &&
                  todos.map((todo, index) => (
                     <tr key={index}>
                        <td>{todo.todo}</td>
                        <td className="interactive-td" onClick={() => {handleUpdate(todo.id)}}>{todo.status}</td>
                        <td className="interactive-td"
                           onClick={() => {
                              handleDelete(todo.id);
                           }}
                           style = {{backgroundColor: "red"}}
                        >
                           Delete
                        </td>
                     </tr>
                  ))}

            </tbody>
         </table> : <p style={{fontSize: "2rem", fontWeight: 600, margin: "1rem"}}>No Todos Added!</p>}
         
      </div>
   );
};

export default TODOS;
