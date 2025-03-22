'use client';

import { Button, Card, ConfigProvider, Input, Tabs, theme, Typography } from 'antd';
import { Metadata } from 'next';
import { memo, useEffect, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import PageTitle from '@/components/PageTitle';
import StructuredData from '@/components/StructuredData';

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

export const generateMetadata = (): Metadata => {
  return {
    description: 'NicorAI Dashboard',
    title: 'Dashboard - NicorAI',
  };
};

interface ChatMessage {
  content: string;
  id: string;
  role: 'user' | 'assistant';
}

interface CardItem {
  description: string;
  id: string;
  title: string;
}

const DashboardPage = memo(() => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [activeCardView, setActiveCardView] = useState<string | null>(null);

  // Light grey background color that matches the logo background
  const nicoraiBgColor = '#E6E6E6';

  const cardItems: CardItem[] = [
    {
      description: 'Get in touch with our team for inquiries and support.',
      id: 'contact',
      title: 'Contact Us',
    },
    {
      description: 'Explore our comprehensive AI and intelligent systems services.',
      id: 'services',
      title: 'Services',
    },
    {
      description: 'Learn about NicorAI and our mission to transform industries with AI.',
      id: 'about',
      title: 'About Us',
    },
    {
      description: 'Discover our cutting-edge research and development initiatives.',
      id: 'research',
      title: 'Research & Development',
    },
    {
      description: 'View real-world examples of our intelligent systems in action.',
      id: 'case-studies',
      title: 'Case Studies',
    }
  ];

  const faqs = [
    {
      answer: 'NicorAI specializes in artificial intelligence, machine learning, natural language processing, and intelligent systems development.',
      question: 'What technologies does NicorAI specialize in?',
    },
    {
      answer: 'Our intelligent systems can automate processes, provide valuable insights from data, enhance customer experiences, and drive innovation in your industry.',
      question: 'How can NicorAI services benefit my business?',
    },
    {
      answer: 'Yes, we develop custom AI solutions tailored to your specific business needs and challenges.',
      question: 'Do you offer custom AI solutions?',
    },
    {
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and more.',
      question: 'What industries do you serve?',
    }
  ];

  useEffect(() => {
    console.log('Dashboard Page Mounted');
  }, []);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      content: input,
      id: Date.now().toString(),
      role: 'user',
    };

    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        content: `This is a simulated response to: "${input}"`,
        id: (Date.now() + 1).toString(),
        role: 'assistant',
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  const renderCardView = (cardId: string) => {
    const card = cardItems.find(item => item.id === cardId);
    if (!card) return null;

    return (
      <Flexbox gap={24} padding={24} width="100%">
        <Flexbox align="flex-start" gap={16}>
          <Button
            onClick={() => setActiveCardView(null)}
            style={{ marginBottom: 16 }}
            type="primary"
          >
            Go Back
          </Button>
          <Title level={2}>{card.title}</Title>
        </Flexbox>
        <Paragraph>
          This is a placeholder content for the {card.title} view.
          This content would be customized for each specific section.
        </Paragraph>
      </Flexbox>
    );
  };

  const renderHomeContent = () => (
    <Flexbox gap={40} width="100%">
      {/* Logo and Intro Section */}
      <Flexbox align="center" gap={24} padding="40px 0">
        <div style={{
          alignItems: 'center',
          backgroundColor: '#1677ff',
          borderRadius: '50%',
          color: 'white',
          display: 'flex',
          fontSize: '2rem',
          fontWeight: 'bold',
          height: 200,
          justifyContent: 'center',
          margin: '0 auto',
          width: 200,
        }}>
          NR
        </div>
        <Title level={1} style={{ marginBottom: 8, textAlign: 'center' }}>
          NicorAI Intelligent Systems
        </Title>
        <Paragraph style={{ fontSize: 18, maxWidth: 800, textAlign: 'center' }}>
          Welcome to NicorAI, where cutting-edge artificial intelligence meets practical business solutions.
          Our intelligent systems are designed to transform your operations and drive innovation.
        </Paragraph>
      </Flexbox>

      {/* Chat Section */}
      <Flexbox gap={16} style={{ margin: '0 auto', maxWidth: 800 }} width="100%">
        <Title level={3}>Ask NicorAI Assistant</Title>
        <Flexbox
          style={{
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: 8,
            height: 400,
            overflowY: 'auto',
            padding: 16,
          }}
          width="100%"
        >
          {messages.length === 0 ? (
            <Flexbox
              align="center"
              height="100%"
              justify="center"
              padding={20}
            >
              <Text style={{
                color: '#666',
                fontSize: 18,
                maxWidth: 600,
                textAlign: 'center',
              }}>
                How can I help you today?
              </Text>
            </Flexbox>
          ) : (
            messages.map((msg) => (
              <Flexbox
                key={msg.id}
                padding={16}
                style={{
                  background: msg.role === 'assistant' ? '#f0f2f5' : 'transparent',
                  borderRadius: 8,
                  marginBottom: 12
                }}
                width="100%"
              >
                <Flexbox gap={16} horizontal style={{ margin: '0 auto' }} width="100%">
                  <div style={{
                    alignItems: 'center',
                    backgroundColor: msg.role === 'assistant' ? '#1677ff' : '#d9d9d9',
                    borderRadius: '50%',
                    color: 'white',
                    display: 'flex',
                    height: 30,
                    justifyContent: 'center',
                    width: 30,
                  }}>
                    {msg.role === 'assistant' ? 'A' : 'U'}
                  </div>
                  <div style={{ color: '#333', flex: 1 }}>{msg.content}</div>
                </Flexbox>
              </Flexbox>
            ))
          )}
        </Flexbox>

        {/* Input Area */}
        <Flexbox width="100%">
          <div style={{
            position: 'relative',
            width: '100%',
          }}>
            <Input.TextArea
              autoSize={{ maxRows: 4, minRows: 1 }}
              onChange={(e) => setInput(e.target.value)}
              onPressEnter={(e) => {
                if (!e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Message NicorAI..."
              style={{
                border: '1px solid #d9d9d9',
                borderRadius: 8,
                padding: '12px 50px 12px 16px',
              }}
              value={input}
            />
            <Button
              onClick={handleSendMessage}
              style={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              type="primary"
            >
              Send
            </Button>
          </div>
        </Flexbox>
      </Flexbox>

      {/* Cards Section */}
      <Flexbox gap={24} width="100%">
        <Title level={3}>Explore NicorAI Services</Title>
        <Flexbox gap={16} horizontal style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {cardItems.map((card) => (
            <Card
              hoverable
              key={card.id}
              onClick={() => setActiveCardView(card.id)}
              style={{
                cursor: 'pointer',
                margin: 8,
                width: 280,
              }}
            >
              <Card.Meta
                description={card.description}
                title={card.title}
              />
            </Card>
          ))}
        </Flexbox>
      </Flexbox>

      {/* FAQ Section */}
      <Flexbox gap={24} style={{ margin: '0 auto', maxWidth: 800 }} width="100%">
        <Title level={3}>Frequently Asked Questions</Title>
        {faqs.map((faq, index) => (
          <Card key={index} style={{ marginBottom: 16, width: '100%' }}>
            <Title level={5}>{faq.question}</Title>
            <Paragraph>{faq.answer}</Paragraph>
          </Card>
        ))}
      </Flexbox>
    </Flexbox>
  );

  return (
    <>
      <StructuredData
        ld={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          description: 'NicorAI Dashboard',
          name: 'Dashboard - NicorAI',
        }}
      />
      <PageTitle title="Dashboard" />

      <ConfigProvider theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorBgBase: nicoraiBgColor,
          colorPrimary: '#1677ff',
        },
      }}>
        <Flexbox height="calc(100vh - 60px)" width="100%">
          {/* Top Navigation Bar */}
          <Flexbox
            horizontal
            justify="space-between"
            padding="8px 16px"
            style={{
              background: '#fff',
              borderBottom: '1px solid #d9d9d9',
            }}
          >
            <Tabs
              activeKey={activeCardView ? activeCardView : 'home'}
              onChange={(key) => {
                if (key === 'home') {
                  setActiveCardView(null);
                } else {
                  setActiveCardView(key);
                }
              }}
              type="card"
            >
              <TabPane key="home" tab="Home" />
              {activeCardView && (
                <TabPane key={activeCardView} tab={cardItems.find(item => item.id === activeCardView)?.title || activeCardView} />
              )}
            </Tabs>
            <Flexbox gap={8} horizontal>
              <Button icon={<span>⚙️</span>} type="text" />
              <Button icon={<span>👤</span>} type="text" />
              <Button icon={<span>🔔</span>} type="text" />
            </Flexbox>
          </Flexbox>

          {/* Main Content Area */}
          <Flexbox
            flex={1}
            style={{
              background: nicoraiBgColor,
              overflowY: 'auto',
              padding: '0 24px 24px',
            }}
          >
            {activeCardView ? renderCardView(activeCardView) : renderHomeContent()}
          </Flexbox>
        </Flexbox>
      </ConfigProvider>
    </>
  );
});

export default DashboardPage;
