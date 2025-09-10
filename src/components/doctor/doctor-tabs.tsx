'use client'

import { Tabs } from 'antd'
import { useState } from 'react'

const DoctorTabs = () => {
  const [activeKey, setActiveKey] = useState('education')

  const tabItems = [
    {
      key: 'info',
      label: 'Info',
    },
    {
      key: 'education',
      label: 'Education',
    },
    {
      key: 'experience',
      label: 'Experience',
    },
    {
      key: 'diploma',
      label: 'Diploma & Certificates',
    },
    {
      key: 'reviews',
      label: 'Reviews',
    },
    {
      key: 'blog',
      label: 'Blog & media',
    },
  ]

  return (
    <div className="border-b border-[#EBEBEB]">
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        items={tabItems}
        className="doctor-tabs"
        tabBarStyle={{
          marginBottom: 0,
          borderBottom: 'none',
        }}
        tabBarGutter={40}
      />
    </div>
  )
}

export default DoctorTabs
