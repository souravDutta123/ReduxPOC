import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {addTodo} from '../actions/actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : ''
    }

  }
   render() {

      return (
         <div>
            <TextField label = 'Work to be done..' value = {this.state.text} onKeyPress = {(e) => this.onEnterSubmit(e)}
            onChange = {(e) => this.updateText(e)}/>
            <RaisedButton label = 'ADD' primary = {true} onClick = {(e) => this.handleClick(e)}/>
         </div>
      )
   }

   onEnterSubmit(e){
     if(e.key === 'Enter'){
       this.handleClick(e);
     }
   }

   updateText(e){
     this.setState({text : e.target.value});
   }

   handleClick(e) {
     if (this.state.text.trim().length > 0) {
       this.props.dispatch(addTodo(this.state.text));
       this.setState({text : ''});
     }
   }
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(addTodo, dispatch)
  }
}

export default connect(mapDispatchToProps)(AddTodo);
