
import React from 'react';
import { connect } from 'react-redux';
import PageComponent from '../components/like';

import { likeAsyncAction } from '../actions';

//import loadable from '@loadable/component'

//const AsyncComponent = React.lazy(() => import('../components/like'));

// import loadable from '@loadable/component'
// const AsyncComponent = loadable(() => import('../components/like'))

// export class PageComponent extends React.Component {
//   render() {
//     return <AsyncComponent />;
//   }
// }

const mapStateToProps = state => ({
	likeImgs: state.likeImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( likeAsyncAction() )
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);
