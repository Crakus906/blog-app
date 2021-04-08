import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AllPosts } from '../../modules';
import { listPosts } from '../../redux/action/list';
import { HomeWrapper } from './style'
import Wrapper from '../../components/Wrapper';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPosts())
    }, dispatch)
    
    return (
        <HomeWrapper>
            <Wrapper>
                <AllPosts />
            </Wrapper>
        </HomeWrapper>  
    )
}