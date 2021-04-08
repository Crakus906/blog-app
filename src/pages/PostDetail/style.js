import styled from 'styled-components';
import 'antd/dist/antd.css';

export const PostDetailWrapper = styled.div`
    border: 1px solid cornflowerblue;
    border-radius: 1rem;
    padding: 0.4rem;
    background: ghostwhite;
    box-shadow: 0 0 10px rgb(0 0 0 / 12%);
    margin: 2rem 0;
    .title {
        font-size: 22px;
        font-weight: bold;
    }
    .body {
        font-size: 14px;
    }
`;