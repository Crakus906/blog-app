import { api } from "../../constants/api";
import { listPosts } from "./list";

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_RESPONSE = 'COMMENTS_RESPONSE';
export const COMMENTS_REJECT = 'COMMENTS_REJECT';
export const CREATE_COMMENT_ACTION = 'CREATE_COMMENT_ACTION';

export const commentsRequest = () => ({type: COMMENTS_REQUEST});
export const commentsResponse = (data) => ({type: COMMENTS_RESPONSE, payload: data});
export const commentsReject = () => ({type: COMMENTS_REJECT});


export const craeteCommentAction = (payload) => ({type: CREATE_COMMENT_ACTION, payload});
// export const commentsRequest = () => ({type: COMMENTS_REQUEST});
// export const commentsResponse = (data) => ({type: COMMENTS_RESPONSE, payload: data});
// export const commentsReject = () => ({type:

export const comments = (id) => async (dispatch) => {
    try {
        dispatch(commentsRequest());
        const res = await api.get(`/posts/${id}?_embed=comments`);
        dispatch(commentsResponse(res.data));
    } catch (e) {
        dispatch(commentsReject(e));
    };
};

export const createComment = (value, id) => async (dispatch) => {   
    try {
        if (value) {
            // dispatch(commentsRequest());
            const res = await api.post('/comments/', value);
            dispatch(craeteCommentAction(res.data));
            // dispatch(comments(id));
            // dispatch(commentsResponse(res.data));
            // dispatch(listPosts());   
        };
    } catch (e) {
        dispatch(commentsReject(e));
    };
};
