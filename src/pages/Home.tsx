import React, { useState } from 'react';
import { Typography, Card, Space, Avatar, Button, Tag, Row, Col, Carousel, Divider } from 'antd';
import { GithubOutlined, TwitterOutlined, MailOutlined, SmileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { mockPosts, mockTags } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

const { Title, Paragraph } = Typography;

const featuredPosts = mockPosts.slice(0, 3);
const latestPosts = mockPosts.slice(0, 6);
const signature = '代码如诗，热爱如初。';
const dailyQuote = '“Stay hungry, stay foolish.” — Steve Jobs';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { themeMode } = useTheme();

  // 更高级的渐变色
  const bannerBg = themeMode === 'dark'
    ? 'linear-gradient(120deg, #23243a 0%, #2b3a55 60%, #3a2b55 100%)'
    : 'linear-gradient(120deg, #6dd5ed 0%, #2193b0 40%, #a18cd1 100%)';

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* 顶部Banner */}
      <div style={{ position: 'relative', width: '100%', minHeight: 220, borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(22,119,255,0.08)' }}>
        {/* 渐变背景 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: bannerBg,
          zIndex: 1
        }} />
        {/* 半透明渐变叠加 */}
        {themeMode === 'light' && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg,rgba(255,255,255,0.25) 0%,rgba(255,255,255,0.05) 100%)',
            zIndex: 2
          }} />
        )}
        {themeMode === 'dark' && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg,rgba(0,0,0,0.25) 0%,rgba(0,0,0,0.05) 100%)',
            zIndex: 2
          }} />
        )}
        {/* 波浪SVG装饰 */}
        {themeMode === 'light' && (
          <svg style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 40, zIndex: 3 }} viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" fillOpacity="0.5" d="M0,20 C360,60 1080,0 1440,40 L1440,40 L0,40 Z" />
          </svg>
        )}
        {themeMode === 'dark' && (
          <svg style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 40, zIndex: 3 }} viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#22253a" fillOpacity="0.7" d="M0,20 C360,60 1080,0 1440,40 L1440,40 L0,40 Z" />
          </svg>
        )}
        {/* Banner内容 */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', height: '100%', padding: 32, color: '#fff' }}>
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            size={96}
            style={{ marginRight: 32, border: '4px solid #fff', boxShadow: '0 2px 8px #1677ff33' }}
          />
          <div>
            <Title level={2} style={{ color: '#fff', marginBottom: 8 }}>Hi，欢迎来到我的博客！</Title>
            <Paragraph style={{ color: '#e6f7ff', fontSize: 18, marginBottom: 8 }}>{signature}</Paragraph>
            <Space>
              <Button icon={<GithubOutlined />} href="https://github.com" target="_blank" ghost type="primary">GitHub</Button>
              <Button icon={<TwitterOutlined />} href="https://twitter.com" target="_blank" ghost type="primary">Twitter</Button>
              <Button icon={<MailOutlined />} href="mailto:example@email.com" ghost type="primary">邮箱</Button>
            </Space>
          </div>
        </div>
      </div>

      {/* 彩色分割线和趣味元素 */}
      <Divider orientation="left" plain style={{ fontSize: 16 }}>
        <SmileOutlined style={{ color: '#faad14', marginRight: 8 }} />
        每日一句
      </Divider>
      <Paragraph style={{ fontSize: 18, textAlign: 'center', color: '#faad14', marginBottom: 0 }}>{dailyQuote}</Paragraph>

      {/* 精选文章轮播 */}
      <Card title="精选推荐" style={{ borderRadius: 12 }} bodyStyle={{ padding: 0 }}>
        <Carousel autoplay dots={true} style={{ borderRadius: 12, overflow: 'hidden' }}>
          {featuredPosts.map(post => (
            <div key={post.id} style={{ display: 'flex', alignItems: 'center', minHeight: 220, background: 'var(--card-bg)', padding: 24 }}>
              <img
                src={post.coverImage}
                alt={post.title}
                style={{ width: 220, height: 120, objectFit: 'cover', borderRadius: 8, marginRight: 32 }}
              />
              <div style={{ flex: 1 }}>
                <Title level={4} style={{ margin: 0 }}>{post.title}</Title>
                <Paragraph type="secondary" style={{ margin: '8px 0' }}>{post.excerpt}</Paragraph>
                <Space wrap>
                  {post.tags.map(tag => (
                    <Tag key={tag.id} color={tag.color}>{tag.name}</Tag>
                  ))}
                </Space>
                <Button type="link" onClick={() => navigate(`/posts/${post.id}`)} style={{ marginLeft: 16 }}>
                  阅读更多
                </Button>
              </div>
            </div>
          ))}
        </Carousel>
      </Card>

      {/* 最新文章 */}
      <Card title="最新文章" style={{ borderRadius: 12 }}>
        <Row gutter={[24, 24]}>
          {latestPosts.map(post => (
            <Col xs={24} sm={12} md={8} key={post.id}>
              <Card
                hoverable
                cover={<img src={post.coverImage} alt={post.title} style={{ height: 120, objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />}
                style={{ borderRadius: 12 }}
                bodyStyle={{ padding: 16 }}
                onClick={() => navigate(`/posts/${post.id}`)}
              >
                <Title level={5} style={{ margin: 0 }}>{post.title}</Title>
                <Paragraph type="secondary" ellipsis={{ rows: 2 }}>{post.excerpt}</Paragraph>
                <Space wrap>
                  {post.tags.map(tag => (
                    <Tag key={tag.id} color={tag.color}>{tag.name}</Tag>
                  ))}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* 标签云 */}
      <Card title="热门标签" style={{ borderRadius: 12, textAlign: 'center' }}>
        <Space wrap size={[8, 16]}>
          {mockTags.map(tag => (
            <Tag.CheckableTag
              key={tag.id}
              checked={selectedTag === tag.name}
              style={{ fontSize: 16, padding: '6px 18px', borderRadius: 20, background: selectedTag === tag.name ? tag.color : undefined, color: selectedTag === tag.name ? '#fff' : undefined, cursor: 'pointer' }}
              onChange={() => {
                setSelectedTag(tag.name);
                navigate(`/posts?tag=${tag.name}`);
              }}
            >
              {tag.name}
            </Tag.CheckableTag>
          ))}
        </Space>
      </Card>
    </Space>
  );
};

export default Home; 