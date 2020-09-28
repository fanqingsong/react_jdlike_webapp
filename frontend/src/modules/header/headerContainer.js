
import { connect } from 'react-redux';
//import PageComponent from './headerComponent';

import { headerAsyncAction } from './headerActions';

import React, {Suspense} from 'react';

const PageComponent = React.lazy(() => import('./headerComponent'));

const LazyComponent = (props) => (
  <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PageComponent {...props}/>
      </Suspense>
  </div>
);


const mapStateToProps = state => ({
	headerImgs: state.headerImgs
});

const mapDispatchToProps = dispatch => ({
  updateImgs: () => dispatch( headerAsyncAction() )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LazyComponent);




