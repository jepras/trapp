import { connect } from 'react-redux';
import { createTodo } from '../actions';
import NewTask from '../components/tasks/NewTask';

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: todo => {
      dispatch(createTodo(todo));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewTask);
