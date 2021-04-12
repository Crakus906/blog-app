/* eslint-disable import/no-anonymous-default-export */
import {
    COMMENTS_REJECT,
    COMMENTS_RESPONSE,
    CREATE_COMMENT_ACTION
} from '../action/comments';


const initState = {
    comments: [],
}

export default (state = initState, { type, payload }) => {
    switch (type) {
        case COMMENTS_RESPONSE:
            return {
                ...payload,
            };
        case CREATE_COMMENT_ACTION:
            return {
                ...state,
                comments: [...state.comments, payload],
            };
      default:
        return state;
    }
  };