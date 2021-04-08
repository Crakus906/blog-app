import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allPostsSelectort } from '../../redux/selector/selector';
import { Formik, Form } from 'formik';
import { Button, Input, Post } from '../../components';
import { POST } from '../../constants/routes';
import { createPosts, listId, upDatePosts, deletePosts} from '../../redux/action/list';
import { PostsWrapper } from './style';
import { Modal } from 'antd';

export default function AllPosts() {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const allPosts = useSelector(allPostsSelectort);

    const handleAddPost = (values) => {
        const value = {
            title: values.title,
            body: values.body,
        };
        dispatch(createPosts(value));
    };
    
    const handleUpDatePost = (values) => {
        const value = {
            title: values.title,
            body: values.body,
        }
        const id = {
            id: values.id,
        }
        console.log(values.id);
        handleOk()
        dispatch(upDatePosts(id, value));
    }
    
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <PostsWrapper>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                }}
                onSubmit={handleAddPost}
            >
                {() => (
                <Form>
                    <Input type="text" name='title' label='Enter title' />
                    <Input type="text" name='body' label='Enter body' /> 
                    <button>btn</button>
                </Form>
                )}
            </Formik>
            {
                allPosts.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='posts-container'>
                            <Link 
                                to={`${POST}${item.id}`} 
                                onClick={() => dispatch(listId(item.id))}
                            >
                                <Post item={item}/>
                            </Link>
                            <div className='button-container'>
                                <Button className='btn' onClick={showModal}>
                                    Update a post
                                </Button>
                                <Modal title="Update a post" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    <Formik
                                        initialValues={{
                                            title: '',
                                            body: '',
                                            id: item.id,
                                        }}
                                        onSubmit={handleUpDatePost}
                                    >
                                        {() => (
                                        <Form>
                                            <Input type="text" name='title' />
                                            <Input type="text" name='body' /> 
                                            <button>ok</button>
                                        </Form>
                                        )}
                                    </Formik>
                                </Modal>  
                                <Button className='btn' onClick={() => dispatch(deletePosts(item.id))}>
                                    delete
                                </Button>         
                            </div> 
                        </div>
                    </React.Fragment>
                ))
            }       
        </PostsWrapper>  
    );
};