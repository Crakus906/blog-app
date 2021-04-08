/* eslint-disable import/no-anonymous-default-export */
import {
    LIST_POSTS_REJECT,
    LIST_POSTS_RESPONSE,
    LIST_POSTS_REQUEST,
    LIST_ID,
} from '../action/list';


const initState = {
    allPosts: [],
    // createPosts: null,
    idPost: 0,
}

export default (state = initState, { type, payload }) => {
    switch (type) {
        case LIST_POSTS_REQUEST:
            return {
                ...state,
                allPosts: [],
            };
        case LIST_POSTS_RESPONSE:
            return {
                ...state,
                allPosts: payload,
            };
        case LIST_POSTS_REJECT:
            return {
                ...state,
                allPosts: [],
            };
        case LIST_ID: 
            return {
                ...state,
                idPost: payload,
            }
      default:
        return state;
    }
  };