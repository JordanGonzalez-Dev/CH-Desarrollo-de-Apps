import { GET_POST } from "../actions/post.action";

const initialState = {
  list: [],
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default PostReducer;
