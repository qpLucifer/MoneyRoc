import React from 'react';
import { Progress, Space, Typography } from 'antd';

const { Text } = Typography;

interface SkillProgressProps {
  name: string;
  level: number;
  color: string;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ name, level, color }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <Space style={{ width: '100%', justifyContent: 'space-between', marginBottom: 4 }}>
        <Text strong>{name}</Text>
        <Text type="secondary">{level}%</Text>
      </Space>
      <Progress
        percent={level}
        showInfo={false}
        strokeColor={color}
        trailColor="#f0f0f0"
        size="small"
      />
    </div>
  );
};

export default SkillProgress; 