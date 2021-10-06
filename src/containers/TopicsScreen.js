import React from "react";
import { connect } from "react-redux";
import * as topicsActions from '../store/topics/actions';
import * as topicsSelectors from '../store/topics/reducer';

const TopicsScreen = () => {
  return (
    <div>
      <h2>Where are my topics?</h2>
    </div>
  );
};

function mapStateToProps(state) {
  return {
      rowsById: topicsSelectors.getTopicsByUrl(state),
      rowsBrowsIdArrayyId: topicsSelectors.getTopicsUrlArray(state),
  };
}

export default connect(mapStateToProps)(TopicsScreen);
