import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todoData = [
  {
    task: '',
    id: null,
    completed: false
  },
  // {
  //   task: 'Clean Room',
  //   id: 2,
  //   completed: false
  // }
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
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      name: [...this.state.name, newTask]
    });
  };

  clearCompleted = () => {
    this.setState({
      name: this.state.name.filter(item => !item.completed)
    });
  };
  
  componentDidMount(){
    const storage = window.localStorage.getItem('name')
    const parseName = JSON.parse(storage)
    if (parseName){
      this.setState({
        name: parseName
      })
    }
  }

  componentDidUpdate(prevState){
    if(prevState !== this.state){
      const json = JSON.stringify(this.state.name)
      window.localStorage.setItem('name', json)
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList
          name={this.state.name}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
