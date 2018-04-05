import {ADD_TODO, UPDATE_TODO, DELETE_TODO} from '../util/constants';

let nextTodoId = 0;

export function addTodo(text) {
   return {
      type: ADD_TODO,
      payload : { id: nextTodoId++ , text, isDone : false }
   };
}

export function updateTodo(todo){
  return {
    type : UPDATE_TODO,
    payload : todo
  };
}

export function removeTodo(id){
  return {
    type : DELETE_TODO,
    payload : id
  };
}
