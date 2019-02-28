
import { connect } from 'react-redux';
import PageComponent from '../components/otherapp';

import { otherappAsyncAction } from '../actions';

const mapStateToProps = state => ({
	otherappImgs: state.otherappImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( otherappAsyncAction() )
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
