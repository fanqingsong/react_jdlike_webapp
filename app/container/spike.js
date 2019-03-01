
import { connect } from 'react-redux';
import PageComponent from '../components/spike';

import { spikeAsyncAction, spikeTimeRefreshStartAsyncAction, spikeTimeRefreshEndAsyncAction } from '../actions';

const mapStateToProps = state => ({
	spikeImgs: state.spikeImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( spikeAsyncAction() ),
  startTimeRefresh: () => dispatch(spikeTimeRefreshStartAsyncAction()),
  endTimeRefresh: () => dispatch(spikeTimeRefreshEndAsyncAction()),
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
