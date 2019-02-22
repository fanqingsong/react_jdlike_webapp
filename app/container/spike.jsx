
import { connect } from 'react-redux';
import PageComponent from '../components/spike';

import { spikeAction } from '../actions';

const mapStateToProps = state => ({
	spikeImgs: state.spikeImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: imgs => dispatch( spikeAction(imgs) )
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
