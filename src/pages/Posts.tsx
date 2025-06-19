import React, { useState } from 'react';
import { Row, Col, Input, Select, Space, Typography, Pagination, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PostCard from '../components/posts/PostCard';
import { mockPosts, mockTags } from '../data/mockData';

const { Title } = Typography;

const Posts: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
      post.tags.some(tag => selectedTags.includes(tag.name));
    return matchesSearch && matchesTags;
  });

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={2}>探索文章</Title>
        <Title level={5} type="secondary" style={{ fontWeight: 'normal' }}>
          发现有趣的技术文章和见解
        </Title>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={16}>
          <Input
            size="large"
            placeholder="搜索文章..."
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Select
            mode="multiple"
            size="large"
            placeholder="选择标签筛选"
            style={{ width: '100%' }}
            value={selectedTags}
            onChange={setSelectedTags}
            options={mockTags.map(tag => ({
              label: tag.name,
              value: tag.name,
            }))}
          />
        </Col>
      </Row>

      {paginatedPosts.length > 0 ? (
        <>
          <Row gutter={[24, 24]}>
            {paginatedPosts.map(post => (
              <Col xs={24} sm={12} lg={8} key={post.id}>
                <PostCard post={post} />
              </Col>
            ))}
          </Row>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Pagination
              current={currentPage}
              total={filteredPosts.length}
              pageSize={pageSize}
              onChange={setCurrentPage}
              showSizeChanger={false}
            />
          </div>
        </>
      ) : (
        <Empty
          description="暂无相关文章"
          style={{ marginTop: 40 }}
        />
      )}
    </Space>
  );
};

export default Posts; 