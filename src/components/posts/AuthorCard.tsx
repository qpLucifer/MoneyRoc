import React from 'react';
import { Card, Avatar, Typography, Space, Button } from 'antd';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface AuthorCardProps {
  author: {
    name: string;
    avatar: string;
    bio?: string;
    github?: string;
    twitter?: string;
  };
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <Card size="small">
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Space align="start">
          <Avatar
            src={author.avatar}
            size={64}
            style={{ border: '2px solid #f0f0f0' }}
          />
          <Space direction="vertical" size={0}>
            <Title level={5} style={{ margin: 0 }}>
              {author.name}
            </Title>
            {author.bio && (
              <Text type="secondary" style={{ fontSize: '14px' }}>
                {author.bio}
              </Text>
            )}
          </Space>
        </Space>

        <Space wrap>
          {author.github && (
            <Button
              icon={<GithubOutlined />}
              href={author.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          )}
          {author.twitter && (
            <Button
              icon={<TwitterOutlined />}
              href={author.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Button>
          )}
        </Space>
      </Space>
    </Card>
  );
};

export default AuthorCard; 