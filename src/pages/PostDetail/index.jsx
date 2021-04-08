import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Formik, Form} from 'formik';
import { PostDetailWrapper } from './style'
import { allPostsSelectort, commentsSelector, postIdSelector } from '../../redux/selector/selector';
import { comments, createComment } from '../../redux/action/comments';
import { Button } from '../../components';
import { ROOT } from '../../constants/routes';
import Wrapper from '../../components/Wrapper';
import TextArea from '../../components/TextArea';

export default function PostDetail() {
    const dispatch = useDispatch();
    const commentsAll = useSelector(commentsSelector)
    const allPost = useSelector(allPostsSelectort);
    const idPost = useSelector(postIdSelector);
    
    const post = allPost.filter((e) => e.id === idPost);
    
    const {
        id,
        title,
        body
    } = post[0];
    
    useEffect(() => {
        dispatch(comments(post[0].id));
    }, dispatch);
    
    const handleSubmit = (values) => {
        const value = {
            body: values.body,
            postId: commentsAll === undefined ? 0 : commentsAll[commentsAll.length - 1].postId + 1
        }
        dispatch(createComment(value ,id))
    };
   
    return (
        <Wrapper>
            <PostDetailWrapper>
                <div className='title'>
                    {title}
                </div>
                <div classNmae='body'>
                    {body}
                </div>
            </PostDetailWrapper>  
            <Formik
                initialValues={{
                    body: '',
                }}
                onSubmit={handleSubmit}
            >
                {() => (
                <Form>
                    <TextArea name='body' />
                    <button type='submit'>ok</button>
                </Form>
                )}
            </Formik>
            {commentsAll && commentsAll.map((e) => (
                <div>
                    {e.body}
                </div>
            ))}
            <Link to={ROOT}><Button >Back</Button></Link>
        </Wrapper>
    );
};