import { api } from "../../constants/api";

export const LIST_ID = 'LIST_ID';

export const LIST_POSTS_REQUEST = 'LIST_POSTS_REQUEST';
export const LIST_POSTS_RESPONSE = 'LIST_POSTS_RESPONSE';
export const LIST_POSTS_REJECT = 'LIST_POSTS_REJECT';

export const listId = (id) => ({ type: LIST_ID, payload: id});  

export const listPostsRequest = () => ({type: LIST_POSTS_REQUEST});
export const listPostsResponse = (data) => ({type: LIST_POSTS_RESPONSE, payload: data});
export const listPostsReject = () => ({type: LIST_POSTS_REJECT});

export const listPosts = () => async (dispatch) => {
    try {
        dispatch(listPostsRequest());
        const res = await api.get('/posts');
        dispatch(listPostsResponse(res.data));
    } catch (e) {
        dispatch(listPostsReject(e));
    };
};

export const createPosts = (value) => async (dispatch) => {
    try {
        if (value) {
            dispatch(listPostsRequest());
            const res = await api.post('/posts/', value);
            dispatch(listPosts());
            dispatch(listPostsRequest(res.data));
        };
    } catch (e) {
        dispatch(listPostsReject(e));
    };
};

export const upDatePosts = (id, value) => async (dispatch) => {
    try {
        dispatch(listPostsRequest());
        const res = await api.put(`/posts/${id.id}/`, value);
        dispatch(listPostsRequest(res.data));
        dispatch(listPosts());
    } catch (e) {
        dispatch(listPostsReject(e));
    };
};

export const deletePosts = (id) => async (dispatch) => {
    try {
        dispatch(listPostsRequest());
        const res = await api.delete(`/posts/${id}/`,);
        dispatch(listPostsRequest(res.data));
        dispatch(listPosts());
    } catch (e) {
        dispatch(listPostsReject(e));
    };
};