import React, { useState, useEffect } from 'react';
import { Modal, Input, List, Tag, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../types/post';
import { mockPosts } from '../../data/mockData';

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ visible, onClose }) => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchText) {
      setResults([]);
      return;
    }

    const searchResults = mockPosts.filter(post => {
      const searchLower = searchText.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.name.toLowerCase().includes(searchLower))
      );
    });

    setResults(searchResults);
  }, [searchText]);

  const handleSelect = (post: Post) => {
    navigate(`/posts/${post.id}`);
    onClose();
    setSearchText('');
  };

  return (
    <Modal
      title="搜索文章"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <div style={{ marginBottom: 24 }}>
        <Input
          size="large"
          placeholder="输入关键词搜索文章..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          autoFocus
        />
      </div>

      {searchText ? (
        results.length > 0 ? (
          <List
            dataSource={results}
            renderItem={post => (
              <List.Item
                onClick={() => handleSelect(post)}
                style={{ cursor: 'pointer', padding: '12px' }}
                className="search-result-item"
              >
                <List.Item.Meta
                  title={post.title}
                  description={
                    <>
                      <div style={{ marginBottom: 8 }}>{post.excerpt}</div>
                      <div>
                        {post.tags.map(tag => (
                          <Tag key={tag.id} color={tag.color}>
                            {tag.name}
                          </Tag>
                        ))}
                      </div>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        ) : (
          <Empty description="未找到相关文章" />
        )
      ) : (
        <div style={{ textAlign: 'center', color: '#999' }}>
          输入关键词开始搜索
        </div>
      )}
    </Modal>
  );
};

export default SearchModal; 