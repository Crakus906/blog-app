import styled from 'styled-components';
import 'antd/dist/antd.css';

export const HeaderWrapper = styled.div`
    min-height: 100vh;
    .logo {
        color: white;
    }
    .ant-layout {
        min-height: 100vh;
        .ant-menu.ant-menu-dark .ant-menu-item-selected {
            background-color: transparent;
        }
    }

`;