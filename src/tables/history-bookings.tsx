'use client'

import { TableProps } from 'antd'
import { CustomTable } from '../components/ui/table'
import { Link } from '@/i18n/navigation'
import { Status } from '@/components/ui/status'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import { BookingType } from '@/types/booking-type'
import bookingAPI from '@/api/v1/bookingAPI'


export const HisotryBookings = () => {
  const t = useTranslations('settingsLayout.myBookingsPage')
  const [bookings, setBookings] = useState<BookingType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true)
        const response = await bookingAPI.getBookings()
        if (response.data.success) {
          // Filter for completed or cancelled bookings (history)
          const historyBookings = response.data.data.filter(
            (booking) =>
              booking.status.toLowerCase() === 'completed' ||
              booking.status.toLowerCase() === 'cancelled' ||
              booking.status.toLowerCase() === 'canceled' ||
              booking.cancelledAt !== null
          )
          setBookings(historyBookings)
        }
      } catch (error) {
        console.error('Failed to fetch bookings:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [])

  const getColumns: TableProps<any>['columns'] = [
    {
      key: 'appointmentNumber',
      dataIndex: 'appointmentNumber',
      title: t('orderNumber'),
      width: 180,
      render: (value: string) => <p>#{value}</p>
    },
    {
      key: 'date',
      dataIndex: 'date',
      title: t('date'),
      width: 180,
      render: (value: string, record: BookingType) => (
        <p>
          {value} {record.time}
        </p>
      )
    },
    {
      key: 'type',
      dataIndex: 'type',
      title: t('appointmentType'),
      width: 160,
      render: (value: string) => <p>{value}</p>
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: t('status'),
      width: 180,
      render: (value: string) => {
        const statusLower = value.toLowerCase()
        const mappedStatus =
          statusLower === 'completed'
            ? 'success'
            : statusLower === 'cancelled' || statusLower === 'canceled'
              ? 'canceled'
              : 'canceled'
        return <Status status={mappedStatus as 'canceled' | 'success'} />
      }
    },
    {
      key: 'doctor',
      dataIndex: 'doctor',
      title: t('doctor'),
      width: 360,
      render: (doctor: BookingType['doctor']) => (
        <div>
          <Link
            className="text-[#1F88E4] !underline underline-offset-2"
            href={`/doctors/${doctor.id}`}
          >
            {doctor.fullName}
          </Link>
           <p>{doctor.specialty}</p>
        </div>
      )
    }
  ]

  const dataWithKey = bookings.map((item) => ({ ...item, key: item.id.toString() }))

  return <CustomTable dataSource={dataWithKey} columns={getColumns} loading={loading} />
}
