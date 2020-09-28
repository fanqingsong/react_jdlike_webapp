
import { connect } from 'react-redux';
import PageComponent from './spikeComponent';

import { spikeAsyncAction, spikeTimeRefreshStartAsyncAction, spikeTimeRefreshEndAsyncAction } from './spikeActions';

const mapStateToProps = state => ({
	spikeImgs: state.spikeImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( spikeAsyncAction() ),
  startTimeRefresh: () => dispatch(spikeTimeRefreshStartAsyncAction()),
  endTimeRefresh: () => dispatch(spikeTimeRefreshEndAsyncAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
