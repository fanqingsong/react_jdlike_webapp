
import { connect } from 'react-redux';
import PageComponent from './headerComponent';

import { headerAsyncAction } from './headerActions';

const mapStateToProps = state => ({
	headerImgs: state.headerImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( headerAsyncAction() )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);




