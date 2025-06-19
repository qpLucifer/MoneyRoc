export interface Tag {
  id: number;
  name: string;
  color: string;
}

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: Tag[];
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: number;
  likes: number;
} 