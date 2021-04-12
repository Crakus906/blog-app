import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import {  HeaderWrapper } from './style';

export default function Wrapper(props) {
  const {
    children,
  } = props;

  const { Header, Content, Footer } = Layout;

  return (
    <HeaderWrapper>
      <Layout className="layout">
      <Header>
        <Link to='/'><div className='logo'>Blog</div></Link>
      </Header>
      <Content style={{ padding: '0 50px' }}>
          {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </HeaderWrapper>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
