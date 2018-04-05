import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {
  constructor(){
    super();
    this.styles = {
      paperStyle : {
        width : 'fit-content',
        padding : '10px',
        marginLeft : 'auto',
        marginRight : 'auto',
        marginTop : '50px'
      }
    }
  }
   render() {
      return (
         <div>
          <MuiThemeProvider>
            <AppBar title = "Todo App with React and Redux"/>
            <Paper style = {this.styles.paperStyle}>
              <AddTodo />
              <TodoList />
            </Paper>
          </MuiThemeProvider>
         </div>
      )
   }
}

export default App;
