import * as React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TodoContainer } from './solutions/todoapp';
import { TodoItem } from './solutions/todoapp/Components/Todoitem/Todoitem';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
        <TodoContainer anchor="todo today">
          <TodoItem id={1} name="do something"/>
          <TodoItem id={2} name="do something another"/>
        </ TodoContainer>
      </ MuiThemeProvider>
    );
  }
}

export default App;
