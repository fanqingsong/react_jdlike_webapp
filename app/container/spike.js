
import { connect } from 'react-redux';
import PageComponent from '../components/spike';

import { spikeAsyncAction } from '../actions';

const mapStateToProps = state => ({
	spikeImgs: state.spikeImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( spikeAsyncAction() )
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
