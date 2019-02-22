
import { connect } from 'react-redux';
import PageComponent from '../components/header';

import { headerAction } from '../actions';

const mapStateToProps = state => ({
	headerImgs: state.headerImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: imgs => dispatch( headerAction(imgs) )
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
