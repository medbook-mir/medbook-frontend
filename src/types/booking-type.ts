export interface BookingDoctor {
  id: number
  fullName: string
  specialty: string
  clinic: string
  profileImageUrl: string | null
}

export interface BookingPatient {
  id: number
  fullName: string
  phoneNumber: string
  email: string | null
}

export interface BookingType {
  id: number
  appointmentNumber: string
  date: string
  time: string
  type: string
  status: string
  notes: string
  canCancel: boolean
  canReschedule: boolean
  doctor: BookingDoctor
  patient: BookingPatient
  createdAt: string
  updatedAt: string
  cancelledAt: string | null
}

export interface BookingsResponse {
  success: boolean
  data: BookingType[]
}
