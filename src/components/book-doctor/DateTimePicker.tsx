'use client'

import React, { useState } from 'react'
import { Card, Button, Typography, Row, Col, DatePicker, Empty } from 'antd'
import { LeftOutlined, RightOutlined, CalendarOutlined, CloseOutlined } from '@ant-design/icons'
import { startOfWeek, addDays, subDays, isSameDay, format, startOfMonth } from 'date-fns'
import dayjs from 'dayjs'
import { UpDownIcon } from '@/utils/icons/UpDownIcon'
import { useTranslations } from 'next-intl'
import { XArrowCalendarIcon } from '@/utils/icons/XArroxCalendar'
import ConsultationTypeModal from '@/modals/consultation-type-modal'

const { Title, Text } = Typography

interface DateTimePickerProps {
  timeSlotsByDate: Record<string, string[]>
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ timeSlotsByDate }) => {
  const t = useTranslations('bookingPage')
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(
    startOfWeek(new Date(), { weekStartsOn: 1 }) // Monday as start of week
  )
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showMonthPicker, setShowMonthPicker] = useState<boolean>(false)
  const [showConsultationModal, setShowConsultationModal] = useState<boolean>(false)

  const getWeekDates = (): Date[] => {
    return Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i))
  }

  const handlePrevWeek = () => {
    setCurrentWeekStart(subDays(currentWeekStart, 7))
  }

  const handleNextWeek = () => {
    setCurrentWeekStart(addDays(currentWeekStart, 7))
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime(null)
  }

  const handleTimeClick = (time: string) => {
    setSelectedTime(time)
  }

  const handleMonthChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      const newDate = date.toDate()
      const newWeekStart = startOfWeek(startOfMonth(newDate), { weekStartsOn: 1 })
      setCurrentWeekStart(newWeekStart)
      setShowMonthPicker(false)
      setSelectedDate(null)
      setSelectedTime(null)
    }
  }

  const toggleMonthPicker = () => {
    setShowMonthPicker(!showMonthPicker)
  }

  const handleBookClick = () => {
    setShowConsultationModal(true)
  }

  const handleConsultationConfirm = (consultationType: 'online' | 'in-person') => {
    // Handle the booking logic here
    console.log('Booking confirmed:', {
      date: selectedDate,
      time: selectedTime,
      consultationType
    })
    // You can add your booking API call here
    
    // Navigate to confirmation page
    window.location.href = window.location.pathname + '/confirmation'
  }

  const handleConsultationClose = () => {
    setShowConsultationModal(false)
  }

  const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''
  const timeSlots: string[] = timeSlotsByDate[formattedDate] || []

  return (
    <Card
      style={{
        maxWidth: 790,
        margin: '0 auto',
        boxShadow: '0px 10px 40px 0px #1212121A',
        borderRadius: 16,
        border: 'none',
        padding: 24
      }}
    >
      <Row
        className="direction-col"
        justify="space-between"
        align="middle"
        style={{ marginBottom: 20, paddingBottom: '20px', borderBottom: '1px solid #eee' }}
      >
        <Title level={4} style={{ color: '#046D5F', margin: 0 }}>
          {t('chooseDateAndTime')}
        </Title>
        <div style={{ position: 'relative' }}>
          <Button
            type="text"
            onClick={toggleMonthPicker}
            style={{ 
              padding: '4px 8px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px'
            }}
          >
            <CalendarOutlined /> {format(currentWeekStart, 'MMMM yyyy')}
            <UpDownIcon />
          </Button>
          {showMonthPicker && (
            <DatePicker
                picker="month"
                value={dayjs(currentWeekStart)}
                onChange={handleMonthChange}
                open={true}
                getPopupContainer={() => document.body}
                style={{ visibility: 'hidden', position: 'absolute' }}
                onOpenChange={(open) => {
                  if (!open) setShowMonthPicker(false)
                }}
              />
          )}
        </div>
      </Row>

      <Row justify="space-between" align="middle" style={{ marginBottom: 28 }}>
        <Button icon={<LeftOutlined />} onClick={handlePrevWeek} />
        {getWeekDates().map((date) => (
          <Button
            key={date.toISOString()}
            style={{ width: 58, height: 65, textAlign: 'center', flexDirection: 'column', gap: 0, borderRadius: 8 }}
            type={selectedDate && isSameDay(date, selectedDate) ? 'primary' : 'default'}
            onClick={() => handleDateClick(date)}
          >
            <div style={{ color: '#909090', fontSize: 16 }}>{format(date, 'EEE')}</div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>{format(date, 'd')}</div>
          </Button>
        ))}
        <Button icon={<RightOutlined />} onClick={handleNextWeek} />
      </Row>

      <Row gutter={[8, 8]} style={{ marginBottom: 50, gap: 23 }}>
        {timeSlots.length > 0 ? (
          timeSlots.map((time) => (
            <Col key={time}>
              <Button
                type={time === selectedTime ? 'primary' : 'default'}
                onClick={() => handleTimeClick(time)}
                style={{
                  padding: '9px 20px',
                  borderRadius: 20,
                  backgroundColor: time === selectedTime ? '#046D5F' : '#F5F5F5',
                  boxShadow: 'none'
                }}
              >
                {time}
              </Button>
            </Col>
          ))
        ) : selectedDate ? (
          <Col span={24}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              padding: '30px 15px',
            }}>
              <XArrowCalendarIcon />
              <Text style={{ fontSize: '16px', color: '#666', textAlign: 'center', lineHeight: '1.5' }}>
                {t('noAvailableSlots', { date: format(selectedDate, 'd MMMM, yyyy') })}
              </Text>
            </div>
          </Col>
        ) : null}
      </Row>

      {selectedDate && selectedTime && (
        <Row
          justify="space-between"
          align="middle"
          style={{ border: '1px solid #046D5F', backgroundColor: '#F2F7F6', padding: 8, borderRadius: 16 }}
        >
          <Text style={{ fontSize: 16, fontWeight: 500, marginLeft: 8 }}>
            {format(selectedDate, 'd MMMM, yyyy')}
            <span style={{ marginLeft: 12, marginRight: 12 }}>|</span>
            <span style={{ fontWeight: 400 }}>{selectedTime}</span>
          </Text>
          <Button 
            type="primary" 
            onClick={handleBookClick}
            style={{ borderRadius: 200, width: 100, fontSize: 14, fontWeight: 400, height: 40 }}
          >
            {t('book')}
          </Button>
        </Row>
      )}

      <ConsultationTypeModal
        isOpen={showConsultationModal}
        onClose={handleConsultationClose}
        onConfirm={handleConsultationConfirm}
        doctorName="Dr. Kathrin Schenk-Losse"
        appointmentDate={selectedDate ? format(selectedDate, 'd MMMM, yyyy') : undefined}
        appointmentTime={selectedTime || undefined}
      />
    </Card>
  )
}

export default DateTimePicker
