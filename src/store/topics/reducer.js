import Immutable from "seamless-immutable";
import { TOPICS_FETCHED } from "./actions";

const initialState = Immutable({
  topicsByUrl: {},
  selectedTopicUrls: [],
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case TOPICS_FETCHED:
      return state.merge({ 
          topicsByUrl: action.topicsByUrl 
        });
    default:
      return state;
  }
}
