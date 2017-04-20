import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as visibilityActions from '../actions/visibility';

function mapStateToProps(state) {
  return {
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(visibilityActions, dispatch);
}

const FilterButtons = props => (
  <div>
    <button onClick={props.showAll}>
      All
    </button>
    <button onClick={props.showInProgress}>
      In progress
    </button>
    <button onClick={props.showDone}>
      Done
    </button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtons);
