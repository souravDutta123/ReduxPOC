import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {updateTodo, removeTodo} from '../actions/actions';

import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

class Todo extends Component {

   render() {
      return (
         <ListItem
          primaryText={this.props.index+". "+this.props.todo.text}
          leftCheckbox={<Checkbox checked = {this.props.todo.isDone} onCheck = {(e) => this.updateStatus(e)}/>}
          rightIconButton = {
            <IconButton onClick = {(e) => this.props.dispatch(removeTodo(this.props.todo.id))}>
              <FontIcon className = "material-icons">clear</FontIcon>
            </IconButton>
          }
         />
      )
   }

   updateStatus(e){
     const todo = this.props.todo;
     todo.isDone = !todo.isDone;
     this.props.dispatch(updateTodo(todo));
   }
   
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators({updateTodo, removeTodo}, dispatch)
  }
}

export default connect(mapDispatchToProps)(Todo);
