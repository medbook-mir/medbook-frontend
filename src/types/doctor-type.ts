export type DoctorType = {
  doctor_id: number
  user: {
    id: number
    first_name: string
    last_name: string
    middle_name?: string
    email: string
    phone_number: string
    gender: string
    is_verified: boolean
    avatar?: string
    bio?: string
    experience_years?: number
    rating?: number
    consultation_fee?: number
  }
  specialty: {
    id: number
    name: string
    category: string
    description: string
    is_active: boolean
  }
  specializations?: DoctorSpecialization[]
  languages?: DoctorLanguage[]
  education?: DoctorEducation[]
  experience?: DoctorExperience[]
  certificates?: DoctorCertificate[]
  services?: DoctorService[]
  location?: DoctorLocation
  schedule?: DoctorSchedule[]
  reviews?: DoctorReview[]
  blog_posts?: DoctorBlogPost[]
}

export type DoctorLanguage = {
  id: string
  name: string
  code: string
}

export type DoctorSpecialization = {
  id: string
  name: string
  description?: string
}

export type DoctorEducation = {
  id: string
  institution: string
  degree: string
  field_of_study: string
  start_date: string
  end_date?: string
  description?: string
}

export type DoctorExperience = {
  id: string
  position: string
  hospital: string
  start_date: string
  end_date?: string
  description?: string
}

export type DoctorCertificate = {
  id: string
  name: string
  issuing_organization: string
  issue_date: string
  expiry_date?: string
  certificate_url?: string
}

export type DoctorService = {
  id: string
  name: string
  description?: string
  price?: number
  duration?: number
}

export type DoctorLocation = {
  id: string
  address: string
  city: string
  country: string
  latitude?: number
  longitude?: number
  phone?: string
  email?: string
}

export type DoctorSchedule = {
  id: string
  day_of_week: number
  start_time: string
  end_time: string
  is_available: boolean
}

export type DoctorReview = {
  id: string
  patient_name: string
  rating: number
  comment: string
  created_at: string
}

export type DoctorBlogPost = {
  id: string
  title: string
  content: string
  excerpt?: string
  featured_image?: string
  created_at: string
  updated_at: string
}
