
// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import PageComponent from './likeComponent';

import { likeAsyncAction } from './likeActions';

const mapStateToProps = state => ({
	likeImgs: state.likeImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( likeAsyncAction() )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
