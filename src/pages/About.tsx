import React from 'react';
import { Typography, Row, Col, Card, Avatar, Space } from 'antd';
import SkillProgress from '../components/about/SkillProgress';
import Timeline from '../components/about/Timeline';
import ContactCard from '../components/about/ContactCard';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  const skills = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'TypeScript', level: 85, color: '#3178c6' },
    { name: 'Node.js', level: 80, color: '#68a063' },
    { name: 'Python', level: 75, color: '#ffd43b' },
    { name: 'DevOps', level: 70, color: '#2496ed' },
  ];

  const experiences = [
    {
      time: '2022 - 现在',
      title: '高级前端开发工程师 @ 某科技公司',
      description: '负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目。',
      tags: ['React', 'TypeScript', '微前端', '团队管理'],
    },
    {
      time: '2020 - 2022',
      title: '前端开发工程师 @ 某互联网公司',
      description: '参与电商平台的开发和优化，提升了平台性能和用户体验。',
      tags: ['Vue.js', 'Node.js', '性能优化'],
    },
    {
      time: '2018 - 2020',
      title: '全栈开发工程师 @ 某创业公司',
      description: '作为早期员工参与产品从 0 到 1 的开发过程。',
      tags: ['React', 'Python', 'PostgreSQL'],
    },
  ];

  const projects = [
    {
      time: '2023',
      title: '开源项目：React 组件库',
      description: '一个现代化的 React 组件库，获得了 1000+ Star。',
      tags: ['React', 'TypeScript', 'Storybook'],
      link: 'https://github.com/username/project',
    },
    {
      time: '2022',
      title: '技术博客',
      description: '分享前端开发经验和最佳实践，月访问量 10k+。',
      tags: ['技术写作', '知识分享'],
      link: 'https://blog.example.com',
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* 个人简介 */}
      <Card>
        <Row gutter={24} align="middle">
          <Col xs={24} sm={8} md={6} style={{ textAlign: 'center' }}>
            <Avatar
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              size={200}
              style={{ marginBottom: 20 }}
            />
          </Col>
          <Col xs={24} sm={16} md={18}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={2} style={{ marginBottom: 8 }}>你好，我是张三</Title>
                <Paragraph type="secondary" style={{ fontSize: 16 }}>
                  高级前端开发工程师 / 技术博主
                </Paragraph>
              </div>
              <Paragraph style={{ fontSize: 16 }}>
                我是一名拥有 5 年经验的前端开发工程师，专注于构建高性能、可扩展的 Web 应用。
                热爱开源社区，积极参与技术分享。在工作之余，我喜欢写技术博客，记录学习心得和
                经验总结。
              </Paragraph>
            </Space>
          </Col>
        </Row>
      </Card>

      <Row gutter={24}>
        <Col xs={24} md={16}>
          {/* 工作经历 */}
          <Card title="工作经历" style={{ marginBottom: 24 }}>
            <Timeline items={experiences} />
          </Card>

          {/* 开源项目 */}
          <Card title="开源项目">
            <Timeline items={projects} />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          {/* 技能特长 */}
          <Card title="技能特长" style={{ marginBottom: 24 }}>
            {skills.map(skill => (
              <SkillProgress
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </Card>

          {/* 联系方式 */}
          <ContactCard
            contactInfo={{
              github: 'https://github.com',
              twitter: 'https://twitter.com',
              linkedin: 'https://linkedin.com',
              email: 'example@email.com',
              wechat: 'wechat_id',
            }}
          />
        </Col>
      </Row>
    </Space>
  );
};

export default About; 