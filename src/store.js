import { createStore } from "redux";
import todoReducer from "./redux/reducer/todoReducer";

const store = createStore(todoReducer)

export default store