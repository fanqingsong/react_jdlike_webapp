
import { connect } from 'react-redux';
import PageComponent from '../components/more';

import { moreAction } from '../actions';

const mapStateToProps = state => ({
	moreImgs: state.moreImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: imgs => dispatch( moreAction(imgs) )
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
