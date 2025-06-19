import React, { useEffect, useState } from 'react';
import { Anchor, Card } from 'antd';
import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor';

const TableOfContents: React.FC = () => {
  const [items, setItems] = useState<AnchorLinkItemProps[]>([]);

  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2, h3');
    const anchorItems: AnchorLinkItemProps[] = [];

    headings.forEach((heading, index) => {
      // 为每个标题添加 id
      const id = `heading-${index}`;
      heading.id = id;

      // 创建锚点项
      const item: AnchorLinkItemProps = {
        key: id,
        href: `#${id}`,
        title: heading.textContent || '',
      };

      // 根据标题层级设置缩进
      if (heading.tagName === 'H2') {
        item.className = 'ps-4';
      } else if (heading.tagName === 'H3') {
        item.className = 'ps-8';
      }

      anchorItems.push(item);
    });

    setItems(anchorItems);
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <Card
      size="small"
      title="目录"
      style={{
        position: 'sticky',
        top: 80,
        maxHeight: 'calc(100vh - 100px)',
        overflow: 'auto'
      }}
    >
      <Anchor
        items={items}
        affix={false}
        onClick={(e) => e.preventDefault()}
        targetOffset={80}
      />
    </Card>
  );
};

export default TableOfContents; 