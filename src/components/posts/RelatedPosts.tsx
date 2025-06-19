import React from 'react';
import { Card, List, Space, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Post } from '../../types/post';

const { Text } = Typography;

interface RelatedPostsProps {
  posts: Post[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  return (
    <Card size="small" title="相关文章">
      <List
        itemLayout="vertical"
        dataSource={posts}
        renderItem={(post) => (
          <List.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Link
              to={`/posts/${post.id}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <Space direction="vertical" size="small">
                <Text strong>{post.title}</Text>
                <Space wrap size={[0, 8]}>
                  {post.tags.map((tag) => (
                    <Tag key={tag.id} color={tag.color}>
                      {tag.name}
                    </Tag>
                  ))}
                </Space>
              </Space>
            </Link>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default RelatedPosts; 