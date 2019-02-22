
import { connect } from 'react-redux';
import PageComponent from '../components/otherapp';

import { otherappAction } from '../actions';

const mapStateToProps = state => ({
	otherappImgs: state.otherappImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: imgs => dispatch( otherappAction(imgs) )
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
