
import { connect } from 'react-redux';
import PageComponent from './otherappComponent';

import { otherappAsyncAction } from './otherappActions';

const mapStateToProps = state => ({
	otherappImgs: state.otherappImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( otherappAsyncAction() )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
