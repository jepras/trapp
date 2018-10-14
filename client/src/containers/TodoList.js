import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { deleteTodo } from '../actions';

function TodoList({ todos, onDelete }) {
  if (!todos.length) {
    return <div>No Todos</div>;
  }
  return (
    <div>
      {todos.map(todo => {
        return <Todo todo={todo} onDelete={onDelete} key={todo._id} />;
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
)(TodoList);
