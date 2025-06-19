import { Post, Tag } from '../types/post';

export const mockTags: Tag[] = [
  { id: 1, name: 'React', color: '#61dafb' },
  { id: 2, name: 'TypeScript', color: '#3178c6' },
  { id: 3, name: '前端开发', color: '#f9a825' },
  { id: 4, name: '后端开发', color: '#388e3c' },
  { id: 5, name: '设计模式', color: '#7b1fa2' },
];

export const mockPosts: Post[] = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: `${index + 1}. 深入理解 React 的状态管理与性能优化`,
  excerpt: '在现代前端开发中，状态管理是一个非常重要的话题。本文将深入探讨 React 中的状态管理方案，以及如何优化应用性能...',
  content: '',
  coverImage: `https://picsum.photos/800/400?random=${index}`,
  tags: mockTags.slice(0, Math.floor(Math.random() * 3) + 1),
  author: {
    name: '张三',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  },
  publishDate: '2024-03-15',
  readTime: Math.floor(Math.random() * 10) + 5,
  likes: Math.floor(Math.random() * 100) + 10,
})); 