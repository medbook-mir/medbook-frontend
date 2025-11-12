'use client'

import { Card, Button, Rate, Row, Col, Avatar, Typography, Space } from 'antd'
import { EnvironmentOutlined, CheckCircleTwoTone } from '@ant-design/icons'
import { mockDoctors } from '@/utils/helper'
import { useRouter } from 'next/navigation'

const { Title, Text } = Typography

export const DoctorCard = ({ doctor, router }: { doctor: (typeof mockDoctors)[0]; router: ReturnType<typeof useRouter> }) => {
  return (
    <Card
      key={doctor.id}
      style={{ borderRadius: 12, marginBottom: 24, border: 'none', boxShadow: '0px 10px 40px 0px #1212121A' }}>
      <Row align="middle" style={{ flexWrap: 'nowrap' }} gutter={16}>
        <Col>
          <Avatar shape="square" size={132} style={{ borderRadius: 16 }} src={doctor.avatar} />
        </Col>
        <Col flex="auto">
          <Space direction="vertical" size={4}>
            <Title level={5} style={{ margin: 0, fontWeight: 500, color: '#0D0D0D' }}>
              {doctor.name} <CheckCircleTwoTone twoToneColor="#52c41a" />
            </Title>
            <Text type="secondary" style={{ color: '#046D5F' }}>
              {doctor.specialty}
            </Text>
            <Text>
              <EnvironmentOutlined /> {doctor.location}
            </Text>
            <Rate disabled allowHalf defaultValue={doctor.rating} />
          </Space>
        </Col>
        <Col>
          <Space size={12} direction="vertical">
            <Button
              onClick={() => router.push(`/book-doctor/${doctor?.id}`)}
              type="primary"
              style={{ borderRadius: 200, width: 120, boxShadow: 'none' }}
            >
              Book now
            </Button>
            <Button
              onClick={() => router.push(`/doctors/${doctor?.id}`)}
              style={{
                borderRadius: 200,
                width: '100%',
                maxWidth: 150,
                boxShadow: 'none',
                color: '#046D5F',
                borderColor: '#046D5F'
              }}
            >
              View profile
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}