import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const { Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ padding: '24px 50px', marginTop: 64 }}>
        <div style={{ background: 'var(--card-bg)', padding: 24, minHeight: 380 }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', background: 'var(--card-bg)' }}>
        My Blog ©{new Date().getFullYear()} Created with React & Ant Design
      </Footer>
    </Layout>
  );
};

export default MainLayout; 