import React from 'react';
import { Timeline as AntTimeline, Typography, Tag } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <AntTimeline
      mode="left"
      items={items.map(item => ({
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        children: (
          <div style={{ paddingBottom: 20 }}>
            <Text type="secondary">{item.time}</Text>
            <div style={{ margin: '8px 0' }}>
              <Text strong style={{ fontSize: 16 }}>
                {item.link ? (
                  <Link href={item.link} target="_blank">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </Text>
            </div>
            <Text>{item.description}</Text>
            {item.tags && (
              <div style={{ marginTop: 8 }}>
                {item.tags.map((tag, index) => (
                  <Tag key={index} color="blue" style={{ marginRight: 8 }}>
                    {tag}
                  </Tag>
                ))}
              </div>
            )}
          </div>
        )
      }))}
    />
  );
};

export default Timeline; 