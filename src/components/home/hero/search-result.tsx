'use client'

import React, { useEffect, useState } from 'react'
import { Input, Select, Row, Col, Typography, Spin, Empty } from 'antd'
import { mockDoctors } from '@/utils/helper'
import { useRouter } from 'next/navigation'
import { DoctorCard } from '@/components/shared/doctor-card'

const { Option } = Select
const { Title, Text } = Typography

const DoctorSearchResult = ({ searchDoctor }: { searchDoctor: string }) => {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<typeof mockDoctors>([])
  const router = useRouter()

  useEffect(() => {
    if (!searchDoctor) {
      setResults([])
      return
    }

    setLoading(true)
    const timeout = setTimeout(() => {
      const filtered = mockDoctors.filter((doc) => doc.name.toLowerCase().includes(searchDoctor.toLowerCase()))
      setResults(filtered)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [searchDoctor])

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <Title level={4} style={{ fontWeight: 500, color: '#0D0D0D', fontSize: 20 }}>
        Search result:
      </Title>

      <Row style={{ marginBottom: 24, width: '100%', gap: 16 }}>
        <Col flex={1.5}>
          <Select placeholder="Language" style={{ width: '100%' }}>
            <Option value="en">English</Option>
            <Option value="uz">Uzbek</Option>
            <Option value="ru">Russian</Option>
          </Select>
        </Col>
        <Col flex={1}>
          <Input placeholder="Text" style={{ width: '100%' }} />
        </Col>
      </Row>

      {loading ? (
        <Spin style={{ margin: '0 auto', display: 'block' }} tip="Loading doctors..." />
      ) : results.length > 0 ? (
        results.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} router={router} />)
      ) : searchDoctor ? (
        <Empty description="No doctors found" />
      ) : null}
    </div>
  )
}

export default DoctorSearchResult
