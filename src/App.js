import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import TodoAdd from './components/TodoAdd';
import TodosFromServer from './components/TodosFromServer';
import uuid from 'uuid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

class App extends Component {

  constructor() {
    super();

    this.addTodoItem = this.addTodoItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.fetchDataFromApi = this.fetchDataFromApi.bind(this);

    this.state = {
      todos: [
        // {id: 'a', description: 'do a'},
        // {id: 'b', description: 'do b'},
        // {id: 'c', description: 'do c'}
      ],
      activetab: 'a',
      datafromApi: []
    }
  }

  componentWillMount() {
    this.fetchDataFromApi();
  }

  handleTabChange() {
    // actions that should fire on tab change
  }
  addTodoItem(newStr) {
    console.log('App.js addTodoItem');
    if (!newStr) {
      console.log('new item is empty');
      return;
    }
    const newItem = {
      id: uuid.v4(),
      description: newStr
    }
    //Adding the new item to the list in the state
    let newstate = this.state;
    newstate.todos.push(newItem);
    this.setState(newstate)
  }

  deleteItem(id) {
    let updatedList = this.state.todos.filter(function(todo) {
      return todo.id !== id;
    });
    this.setState({todos: updatedList});
  }

  fetchDataFromApi() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      this.setState({datafromApi: json});
    })
    .then(() => {console.log('this.state = ',this.state)})
  }

  render() {
    // this.fetchDataFromApi();
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React - Todos</h1>
          </header>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab label="Tab A" value="a">
              <div className="App-intro">
                <TodoAdd addTodoItem={this.addTodoItem} />
                <Todos todos={this.state.todos} deleteItem={this.deleteItem}/>
              </div>
            </Tab>
            <Tab label="Tab B" value="b">
              <TodosFromServer todos={this.state.datafromApi} />
            </Tab>
          </Tabs>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
