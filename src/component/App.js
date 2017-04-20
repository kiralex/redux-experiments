import React from 'react';
import VisibleTodoList from '../container/VisibleTodoList';
import FilterButtons from '../container/FilterButtons';
import AddTodo from '../container/AddTodo';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <VisibleTodoList />
        <FilterButtons />
        <AddTodo />


      </div>
    );
  }
}

export default App;
export {App};
