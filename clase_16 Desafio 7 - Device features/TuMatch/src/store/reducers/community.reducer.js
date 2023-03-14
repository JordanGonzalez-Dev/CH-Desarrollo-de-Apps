import { COMMUNITY } from "../../data/community";
import { SELECTED_COMMUNITY } from "../actions/community.action";

const initialState = {
  community: COMMUNITY,
  selected: null,
};

const CommunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_COMMUNITY:
      const IndexCommunity = state.community.findIndex(
        (com) => com.id === action.communityId
      );
      if (IndexCommunity === -1) return state;
      return { ...state, selected: state.community[IndexCommunity] };

    default:
      return state;
  }
};

export default CommunityReducer;
