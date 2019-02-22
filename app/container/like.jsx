
import { connect } from 'react-redux';
import PageComponent from '../components/like';

import { likeAction } from '../actions';

const mapStateToProps = state => ({
	likeImgs: state.likeImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: imgs => dispatch( likeAction(imgs) )
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
