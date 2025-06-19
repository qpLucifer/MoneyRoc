import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Space,
  Row,
  Col,
  Tag,
  Divider,
  Button,
  message,
} from "antd";
import {
  HeartOutlined,
  HeartFilled,
  ClockCircleOutlined,
  CalendarOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import TableOfContents from "../components/posts/TableOfContents";
import AuthorCard from "../components/posts/AuthorCard";
import RelatedPosts from "../components/posts/RelatedPosts";
import { Post } from "../types/post";
import { mockPosts } from "../data/mockData";

const { Title, Text } = Typography;

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    // 模拟获取文章详情
    const currentPost = mockPosts.find((p: Post) => p.id === Number(id));
    if (currentPost) {
      setPost({
        ...currentPost,
        content: `
# ${currentPost.title}

## 引言

在现代前端开发中，状态管理是一个非常重要的话题。本文将深入探讨 React 中的状态管理方案，以及如何优化应用性能。

## 为什么需要状态管理？

在构建大型应用时，我们经常需要在不同组件之间共享状态。这就带来了一些挑战：

- 状态的一致性
- 状态更新的性能
- 代码的可维护性

### 常见的状态管理方案

1. **Context + useReducer**
   - 适用于中小型应用
   - 无需额外依赖
   - 易于理解和使用

2. **Redux**
   - 适用于大型应用
   - 完整的状态管理解决方案
   - 强大的开发者工具

3. **Zustand**
   - 轻量级状态管理
   - 简单直观的 API
   - 优秀的性能表现

## 性能优化技巧

### 1. 使用 useMemo 和 useCallback

\`\`\`typescript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
\`\`\`

### 2. 状态分割

将应用状态按照功能模块分割，避免不必要的重渲染。

### 3. 使用 React.memo

\`\`\`typescript
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

## 总结

通过合理的状态管理和性能优化，我们可以构建出高性能、可维护的 React 应用。
`,
      });

      // 模拟获取相关文章
      const related = mockPosts
        .filter((p: Post) => p.id !== Number(id))
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    message.success(isLiked ? "取消点赞成功" : "点赞成功");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    message.success("链接已复制到剪贴板");
  };

  if (!post) {
    return null;
  }

  return (
    <Row gutter={24}>
      <Col xs={24} xl={16}>
        <article>
          {/* 文章头部 */}
          <div style={{ marginBottom: 40 }}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div
                style={{
                  height: 400,
                  overflow: "hidden",
                  borderRadius: 8,
                  position: "relative",
                }}
              >
                <img
                  src={post.coverImage}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <Space direction="vertical" size="middle">
                <Space wrap>
                  {post.tags.map((tag) => (
                    <Tag key={tag.id} color={tag.color}>
                      {tag.name}
                    </Tag>
                  ))}
                </Space>

                <Title style={{ margin: 0 }}>{post.title}</Title>

                <Space split={<Divider type="vertical" />}>
                  <Space>
                    <CalendarOutlined />
                    <Text type="secondary">{post.publishDate}</Text>
                  </Space>
                  <Space>
                    <ClockCircleOutlined />
                    <Text type="secondary">{post.readTime} 分钟阅读</Text>
                  </Space>
                </Space>
              </Space>
            </Space>
          </div>

          {/* 文章内容 */}
          <div className="markdown-content">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* 文章底部 */}
          <div style={{ marginTop: 40 }}>
            <Space size="large">
              <Button
                icon={isLiked ? <HeartFilled /> : <HeartOutlined />}
                onClick={handleLike}
                type={isLiked ? "primary" : "default"}
              >
                {post.likes + (isLiked ? 1 : 0)} 赞
              </Button>
              <Button icon={<ShareAltOutlined />} onClick={handleShare}>
                分享
              </Button>
            </Space>
          </div>
        </article>
      </Col>

      <Col xs={24} xl={8}>
        <Space
          direction="vertical"
          size="large"
          style={{ width: "100%", position: "sticky", top: 80 }}
        >
          <TableOfContents />
          <AuthorCard
            author={{
              ...post.author,
              bio: "热爱技术，热爱分享。专注于前端开发和用户体验设计。",
              github: "https://github.com",
              twitter: "https://twitter.com",
            }}
          />
          <RelatedPosts posts={relatedPosts} />
        </Space>
      </Col>
    </Row>
  );
};

export default PostDetail;
