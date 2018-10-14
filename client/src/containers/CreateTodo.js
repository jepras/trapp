import { connect } from 'react-redux';
import { createTodo } from '../actions';
import NewRedux from '../components/NewRedux';

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
)(NewRedux);
