import { connect } from 'react-redux';
import { sendMessage } from '../actions/sendMessage';
import WriteMessage from '../components/WriteMessage';

const mapStateToProps = state => ({
  nickname: state.nickname,
});

// Use mergeProps here so we can enclose the nickname into the sendMessage
// function
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const author = stateProps.nickname;

  return {
    ...ownProps,
    sendMessage: (body, submitTime) => dispatch(sendMessage(author, body, submitTime)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(WriteMessage);
