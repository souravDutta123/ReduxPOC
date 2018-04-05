import { combineReducers } from 'redux'
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../util/constants'

const initialState = {todoItems : []};

function todos(state = initialState, action) {
   switch (action.type) {
      case ADD_TODO:
         return {
            ...state,
            todoItems : [...state.todoItems, action.payload]
         };
      case UPDATE_TODO:
        return {
          ...state,
          todoItems : [
            ...state.todoItems.map((todo => {if(todo.id === action.payload.id) return action.payload; return todo}))
          ]
        }
      case DELETE_TODO:
        return {
          ...state,
          todoItems : [...state.todoItems.filter((todo => todo.id !== action.payload))]
        }
      default:
         return state
   }
}
const todoApp = combineReducers({
   todos
})
export default todoApp
