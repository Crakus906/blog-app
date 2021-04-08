/* eslint-disable import/no-anonymous-default-export */
import {
    COMMENTS_REJECT,
    COMMENTS_REQUEST,
    COMMENTS_RESPONSE
} from '../action/comments';


const initState = {
    comments: [],
}

export default (state = initState, { type, payload }) => {
    switch (type) {
        case COMMENTS_REQUEST:
            return {
                ...state,
                comments: [],
            };
        case COMMENTS_RESPONSE:
            return {
                ...state,
                comments: payload,
            };
        case COMMENTS_REJECT:
            return {
                ...state,
                comments: [],
            };
      default:
        return state;
    }
  };