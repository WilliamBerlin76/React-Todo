import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'

const todoData = [
  {
    task: 'Eat Breakfast',
    id: 1,
    completed: false
  },
  {
    task: 'Clean Room',
    id: 2,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
       task: 'task',
       name: todoData 
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleItem = id => {
    console.log(id)
    this.setState({
      name: this.state.name.map(item => {
        if (item.id === id) {
          console.log(item.completed)
          return {
            ...item,
            completed: !item.completed 
          };
        } else {
          return item
        }
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          name={this.state.name}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
