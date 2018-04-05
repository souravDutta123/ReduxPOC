import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";

import Todo from './Todo.jsx'
import {List, ListItem} from 'material-ui/List';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.styles = {
      noItemFoundStyle : {
        textAlign : 'center'
      }
    }
  }
   render() {
     let noItemFound = '';
     if(this.props.todos.length === 0){
       noItemFound = <ListItem primaryText = 'No work to do' style = {this.styles.noItemFoundStyle}/>
     }
     console.log(this.props.todos.length, noItemFound);
      return (
         <List>
            {this.props.todos.map((todo, index) =>
               <Todo
                  key = {todo.id}
                  todo = {todo}
                  index = {index+1}
               />
            )}
            {noItemFound}
         </List>
      )
   }
}

function mapStateToProps(state){

  return {
    todos: state.todos.todoItems,
  };
}
export default connect(mapStateToProps)(TodoList);
