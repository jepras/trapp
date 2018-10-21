import React from 'react';
import { connect } from 'react-redux';
import Task from '../components/tasks/Task';
import { deleteTodo } from '../actions';

function TaskList({ todos, onDelete }) {
  if (!todos.length) {
    return <div>No Todos</div>;
  }

  return (
    <div className="collection">
      {todos.map(todo => {
        return <Task todo={todo} onDelete={onDelete} key={todo._id} />;
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTodo(id));
      console.log(deleteTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
