import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { Provider } from 'react-redux';
import store from './store';

import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import Archive from './pages/Archive';
import { ThemeProvider } from './context/ThemeContext';

import './App.css';
import './styles/markdown.css';
import './styles/theme.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ConfigProvider locale={zhCN}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:id" element={<PostDetail />} />
                <Route path="archive" element={<Archive />} />
                <Route path="about" element={<About />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
