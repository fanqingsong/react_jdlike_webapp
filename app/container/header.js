
import { connect } from 'react-redux';
import PageComponent from '../components/header';

import { headerAsyncAction } from '../actions';

const mapStateToProps = state => ({
	headerImgs: state.headerImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( headerAsyncAction() )
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
