import React, { useState } from 'react';
import { Layout, Menu, Button, Space } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  FileTextOutlined,
  UserOutlined,
  SearchOutlined,
  BulbOutlined,
  BulbFilled,
  HistoryOutlined
} from '@ant-design/icons';
import { useTheme } from '../../context/ThemeContext';
import SearchModal from '../search/SearchModal';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const location = useLocation();
  const { themeMode, toggleTheme } = useTheme();
  const [searchVisible, setSearchVisible] = useState(false);

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">首页</Link>,
    },
    {
      key: '/posts',
      icon: <FileTextOutlined />,
      label: <Link to="/posts">文章</Link>,
    },
    {
      key: '/archive',
      icon: <HistoryOutlined />,
      label: <Link to="/archive">归档</Link>,
    },
    {
      key: '/about',
      icon: <UserOutlined />,
      label: <Link to="/about">关于</Link>,
    },
  ];

  const handleKeyPress = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();
      setSearchVisible(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      <AntHeader style={{ background: 'var(--card-bg)', padding: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <div style={{ fontSize: '20px', fontWeight: 'bold', padding: '0 24px' }}>
            我的博客
          </div>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{ flex: 1, minWidth: 0 }}
          />
          <Space style={{ marginRight: 24 }}>
            <Button
              icon={<SearchOutlined />}
              onClick={() => setSearchVisible(true)}
            >
              搜索
              <span style={{ marginLeft: 8, opacity: 0.5 }}>⌘K</span>
            </Button>
            <Button
              icon={themeMode === 'light' ? <BulbOutlined /> : <BulbFilled />}
              onClick={toggleTheme}
            >
              {themeMode === 'light' ? '暗色' : '亮色'}模式
            </Button>
          </Space>
        </div>
      </AntHeader>
      <SearchModal
        visible={searchVisible}
        onClose={() => setSearchVisible(false)}
      />
    </>
  );
};

export default Header; 