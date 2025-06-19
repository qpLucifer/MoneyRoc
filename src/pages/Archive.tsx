import React, { useMemo } from 'react';
import { Timeline, Card, Tag, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import { ClockCircleOutlined } from '@ant-design/icons';
import { mockPosts } from '../data/mockData';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

interface GroupedPosts {
  [key: string]: typeof mockPosts;
}

const Archive: React.FC = () => {
  const groupedPosts = useMemo(() => {
    const sorted = [...mockPosts].sort((a, b) => 
      dayjs(b.publishDate).valueOf() - dayjs(a.publishDate).valueOf()
    );

    return sorted.reduce((acc: GroupedPosts, post) => {
      const year = dayjs(post.publishDate).format('YYYY');
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    }, {});
  }, []);

  const years = Object.keys(groupedPosts).sort((a, b) => Number(b) - Number(a));

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={2}>文章归档</Title>
        <Text type="secondary">
          共计 {mockPosts.length} 篇文章
        </Text>
      </div>

      <Card>
        {years.map(year => (
          <div key={year} style={{ marginBottom: 40 }}>
            <Title level={3} style={{ marginBottom: 24 }}>
              {year}
              <Text type="secondary" style={{ fontSize: 16, marginLeft: 8 }}>
                ({groupedPosts[year].length} 篇)
              </Text>
            </Title>

            <Timeline
              items={groupedPosts[year].map(post => ({
                dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                children: (
                  <div style={{ marginBottom: 20 }}>
                    <Space direction="vertical" size="small">
                      <Text type="secondary">
                        {dayjs(post.publishDate).format('MM-DD')}
                      </Text>
                      <Link
                        to={`/posts/${post.id}`}
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        <Text strong style={{ fontSize: 16 }}>
                          {post.title}
                        </Text>
                      </Link>
                      <Space wrap size={[0, 8]}>
                        {post.tags.map(tag => (
                          <Tag key={tag.id} color={tag.color}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Space>
                    </Space>
                  </div>
                ),
              }))}
            />
          </div>
        ))}
      </Card>
    </Space>
  );
};

export default Archive; 