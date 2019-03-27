
import { connect } from 'react-redux';
import PageComponent from './moreComponent';

import { moreAsyncAction } from './moreActions';

const mapStateToProps = state => ({
	moreImgs: state.moreImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( moreAsyncAction() )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
