import React from 'react';
import { Card, Space, Tag, Typography, Avatar } from 'antd';
import { HeartOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Post } from '../../types/post';
import { Link } from 'react-router-dom';

const { Text, Title } = Typography;

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
      <Card
        hoverable
        cover={
          <div style={{ 
            height: 200, 
            overflow: 'hidden',
            position: 'relative'
          }}>
            <img
              alt={post.title}
              src={post.coverImage}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease'
              }}
            />
          </div>
        }
        bodyStyle={{ padding: 20 }}
      >
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Space wrap>
            {post.tags.map(tag => (
              <Tag key={tag.id} color={tag.color}>
                {tag.name}
              </Tag>
            ))}
          </Space>

          <Title level={4} style={{ margin: 0 }}>
            {post.title}
          </Title>

          <Text type="secondary" style={{ 
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {post.excerpt}
          </Text>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 8 
          }}>
            <Space>
              <Avatar src={post.author.avatar} />
              <Text>{post.author.name}</Text>
            </Space>

            <Space size="large">
              <Space>
                <ClockCircleOutlined />
                <Text type="secondary">{post.readTime} 分钟</Text>
              </Space>
              <Space>
                <HeartOutlined />
                <Text type="secondary">{post.likes}</Text>
              </Space>
            </Space>
          </div>
        </Space>
      </Card>
    </Link>
  );
};

export default PostCard; 