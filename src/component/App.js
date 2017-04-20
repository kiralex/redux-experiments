import React from 'react';
import VisibleTodoList from '../container/VisibleTodoList';
import FilterButtons from '../container/FilterButtons';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <VisibleTodoList />
        <FilterButtons />

      </div>
    );
  }
}

export default App;
export {App};
