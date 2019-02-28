
import { connect } from 'react-redux';
import PageComponent from '../components/more';

import { moreAsyncAction } from '../actions';

const mapStateToProps = state => ({
	moreImgs: state.moreImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( moreAsyncAction() )
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
