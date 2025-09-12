'use client'

import { Tabs } from 'antd'
import { useState } from 'react'
import Profile from './profile'
import { DoctorType } from '@/types/doctor-type'

interface DoctorTabsProps {
  doctor: DoctorType
}

const DoctorTabs = ({ doctor }: DoctorTabsProps) => {
  const [activeKey, setActiveKey] = useState('info')

  const tabItems = [
    {
      key: 'info',
      label: 'Info',
      children: <Profile doctor={doctor} />,
    },
    {
      key: 'education',
      label: 'Education',
      children: <div>Education content coming soon...</div>,
    },
    {
      key: 'experience',
      label: 'Experience',
      children: <div>Experience content coming soon...</div>,
    },
    {
      key: 'diploma',
      label: 'Diploma & Certificates',
      children: <div>Diploma & Certificates content coming soon...</div>,
    },
    {
      key: 'reviews',
      label: 'Reviews',
      children: <div>Reviews content coming soon...</div>,
    },
    {
      key: 'blog',
      label: 'Blog & media',
      children: <div>Blog & media content coming soon...</div>,
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
