
import { connect } from 'react-redux';
import PageComponent from '../components/like';

import { likeAsyncAction } from '../actions';

const mapStateToProps = state => ({
	likeImgs: state.likeImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( likeAsyncAction() )
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
