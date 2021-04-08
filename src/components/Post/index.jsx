import React from 'react';
import Button from '../Button';
import { PostWrapper } from './style'

export default function AllPosts({item}) {
    const { title, body } = item;
    
    return (
        <PostWrapper>
            <div className='title'>
                {title}
            </div>
            <div className='body'>
                {body}
            </div>
        </PostWrapper>  
    )
}