import React from 'react';
import Footer from './Footer';
import TodoList from './TodoList';



class App extends React.Component {
  constructor(props){
    super(props);
    this.todoClick = this.todoClick.bind(this);
  }
  todoClick (id) {
    console.log("Todo Click ...");
  }
  render() {
    const todos =  [
      { id: 0, completed: false, text: "faire la vaisselle"},
      { id: 1, completed: true, text: "faire le ménage"}
    ]
    return (
      <div>
        <TodoList todos={todos} onTodoClick={this.todoClick}/>
        <Footer />
      </div>
    );
  }
}

export default App;
