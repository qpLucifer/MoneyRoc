import React from 'react';
import { Card, Space, Typography, Button } from 'antd';
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  MailOutlined,
  WechatOutlined
} from '@ant-design/icons';

const { Text } = Typography;

interface ContactInfo {
  github?: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
  wechat?: string;
}

interface ContactCardProps {
  contactInfo: ContactInfo;
}

const ContactCard: React.FC<ContactCardProps> = ({ contactInfo }) => {
  return (
    <Card title="联系方式">
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        {contactInfo.github && (
          <Button
            icon={<GithubOutlined />}
            href={contactInfo.github}
            target="_blank"
            block
          >
            GitHub
          </Button>
        )}
        {contactInfo.twitter && (
          <Button
            icon={<TwitterOutlined />}
            href={contactInfo.twitter}
            target="_blank"
            block
          >
            Twitter
          </Button>
        )}
        {contactInfo.linkedin && (
          <Button
            icon={<LinkedinOutlined />}
            href={contactInfo.linkedin}
            target="_blank"
            block
          >
            LinkedIn
          </Button>
        )}
        {contactInfo.email && (
          <Button
            icon={<MailOutlined />}
            href={`mailto:${contactInfo.email}`}
            block
          >
            {contactInfo.email}
          </Button>
        )}
        {contactInfo.wechat && (
          <Space style={{ width: '100%', justifyContent: 'center' }}>
            <WechatOutlined style={{ fontSize: 20 }} />
            <Text copyable>{contactInfo.wechat}</Text>
          </Space>
        )}
      </Space>
    </Card>
  );
};

export default ContactCard; 