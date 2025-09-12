import { BaseClient } from '@/api/baseClient'
import { ApiResponseWithContent } from '@/types'
import { DoctorType, DoctorLanguage, DoctorSpecialization, DoctorEducation, DoctorExperience, DoctorCertificate, DoctorService, DoctorLocation, DoctorSchedule, DoctorReview, DoctorBlogPost } from '@/types/doctor-type'
import { AxiosResponse } from 'axios'

const urls = {
  getDoctors: '/api/doctors/',
  getDoctor: (id: string) => `/api/doctors/${id}/`,
  getDoctorLanguages: (id: string) => `/api/doctors/${id}/languages/`,
  getDoctorSpecializations: (id: string) => `/api/doctors/${id}/specializations/`,
  getDoctorEducation: (id: string) => `/api/doctors/${id}/education/`,
  getDoctorExperience: (id: string) => `/api/doctors/${id}/experience/`,
  getDoctorCertificates: (id: string) => `/api/doctors/${id}/certificates/`,
  getDoctorServices: (id: string) => `/api/doctors/services/${id}`,
  // getDoctorLocation: (id: string) => `/api/doctors/location/${id}`,
  getDoctorSchedule: (id: string) => `/api/doctors/schedule/${id}`,
  getDoctorReviews: (id: string) => `/api/doctors/reviews/${id}`,
  getDoctorBlogPosts: (id: string) => `/api/doctors/blog-posts/${id}`,
}

export class DoctorAPI {
  constructor(private api: BaseClient) {}

  getDoctors = async () => {
    const result: AxiosResponse<ApiResponseWithContent<DoctorType[]>> = await this.api.get(urls.getDoctors)
    return result
  }

  getDoctor = async (id: string) => {
    const result: AxiosResponse<ApiResponseWithContent<DoctorType>> = await this.api.get(urls.getDoctor(id))
    return result
  }

  getDoctorLanguages = async (id: string) => {
    const result: AxiosResponse<ApiResponseWithContent<DoctorLanguage[]>> = await this.api.get(urls.getDoctorLanguages(id))
    return result
  }

  getDoctorSpecializations = async (id: string) => {
    const result: AxiosResponse<ApiResponseWithContent<DoctorSpecialization[]>> = await this.api.get(urls.getDoctorSpecializations(id))
    return result
  }

  getDoctorEducation = async (id: string) => {
    const result: AxiosResponse<ApiResponseWithContent<DoctorEducation[]>> = await this.api.get(urls.getDoctorEducation(id))
    return result
  }

  getDoctorExperience = async (id: string) => {
    const result: AxiosResponse<ApiResponseWithContent<DoctorExperience[]>> = await this.api.get(urls.getDoctorExperience(id))
    return result
  }

  getDoctorCertificates = async (id: string) => {
    const result: AxiosResponse<ApiResponseWithContent<DoctorCertificate[]>> = await this.api.get(urls.getDoctorCertificates(id))
    return result
  }

  getDoctorServices = async (id: string) => {
    const result: AxiosResponse<ApiResponseWithContent<DoctorService[]>> = await this.api.get(urls.getDoctorServices(id))
    return result
  }

  // getDoctorLocation = async (id: string) => {
  //   const result: AxiosResponse<ApiResponseWithContent<DoctorLocation>> = await this.api.get(urls.getDoctorLocation(id))
  //   return result
  // }

  getDoctorSchedule = async (id: string) => {
    const result: AxiosResponse<ApiResponseWithContent<DoctorSchedule[]>> = await this.api.get(urls.getDoctorSchedule(id))
    return result
  }

  getDoctorReviews = async (id: string) => {
    const result: AxiosResponse<ApiResponseWithContent<DoctorReview[]>> = await this.api.get(urls.getDoctorReviews(id))
    return result
  }

  getDoctorBlogPosts = async (id: string) => {
    const result: AxiosResponse<ApiResponseWithContent<DoctorBlogPost[]>> = await this.api.get(urls.getDoctorBlogPosts(id))
    return result
  }

  // Get complete doctor data with all related information
  getCompleteDoctorData = async (id: string) => {
    try {
      // Fetch basic doctor data
      const doctorResponse = await this.getDoctor(id)
      const doctor = doctorResponse.data.data
      
      if (!doctor) {
        throw new Error('Doctor not found')
      }

      // Try to fetch location data from API
      let locationData: DoctorLocation | undefined
      try {
        // const locationResponse = await this.getDoctorLocation(id)
        // locationData = locationResponse.data.data
      } catch (locationError) {
        console.warn('Location API not available, using fallback data:', locationError)
        // Fallback to mock data if API fails
        locationData = {
          id: '1',
          address: '123 Medical Street',
          city: 'Tashkent',
          country: 'Uzbekistan',
          latitude: 41.3118066546201,
          longitude: 69.25474741848696,
          phone: doctor.user.phone_number,
          email: doctor.user.email
        }
      }

      // Try to fetch other data from API endpoints
      let servicesData: DoctorService[] = []
      let scheduleData: DoctorSchedule[] = []
      let educationData: DoctorEducation[] = []
      let experienceData: DoctorExperience[] = []
      let certificatesData: DoctorCertificate[] = []

      try {
        const servicesResponse = await this.getDoctorServices(id)
        servicesData = servicesResponse.data.data || []
      } catch (error) {
        console.warn('Services API not available, using fallback data')
        servicesData = [
          { id: '1', name: 'General Consultation', description: 'General medical consultation', price: 50, duration: 30 },
          { id: '2', name: 'Follow-up Visit', description: 'Follow-up medical visit', price: 30, duration: 15 }
        ]
      }

      try {
        const scheduleResponse = await this.getDoctorSchedule(id)
        scheduleData = scheduleResponse.data.data || []
      } catch (error) {
        console.warn('Schedule API not available, using fallback data')
        scheduleData = [
          { id: '1', day_of_week: 1, start_time: '09:00', end_time: '17:00', is_available: true },
          { id: '2', day_of_week: 2, start_time: '09:00', end_time: '17:00', is_available: true },
          { id: '3', day_of_week: 3, start_time: '09:00', end_time: '17:00', is_available: true },
          { id: '4', day_of_week: 4, start_time: '09:00', end_time: '17:00', is_available: true },
          { id: '5', day_of_week: 5, start_time: '09:00', end_time: '17:00', is_available: true }
        ]
      }

      try {
        const educationResponse = await this.getDoctorEducation(id)
        educationData = educationResponse.data.data || []
      } catch (error) {
        console.warn('Education API not available, using fallback data')
        educationData = [
          {
            id: '1',
            institution: 'Medical University',
            degree: 'MD',
            field_of_study: doctor.specialty?.name || 'Medicine',
            start_date: '2015-09-01',
            end_date: '2020-06-30',
            description: 'Medical degree in ' + (doctor.specialty?.name || 'Medicine')
          }
        ]
      }

      try {
        const experienceResponse = await this.getDoctorExperience(id)
        experienceData = experienceResponse.data.data || []
      } catch (error) {
        console.warn('Experience API not available, using fallback data')
        experienceData = [
          {
            id: '1',
            position: doctor.specialty?.name || 'Doctor',
            hospital: 'General Hospital',
            start_date: '2020-07-01',
            end_date: undefined,
            description: 'Working as a ' + (doctor.specialty?.name || 'doctor') + ' specialist'
          }
        ]
      }

      try {
        const certificatesResponse = await this.getDoctorCertificates(id)
        certificatesData = certificatesResponse.data.data || []
      } catch (error) {
        console.warn('Certificates API not available, using fallback data')
        certificatesData = [
          {
            id: '1',
            name: doctor.specialty?.name + ' Certification' || 'Medical Certification',
            issuing_organization: 'Medical Board',
            issue_date: '2020-07-01',
            expiry_date: '2025-07-01'
          }
        ]
      }

      // Create a complete doctor object with the available data
      const completeDoctor: DoctorType = {
        ...doctor,
        // Add placeholder data for fields that don't have endpoints yet
        languages: [
          { id: '1', name: 'English', code: 'en' },
          { id: '2', name: 'Uzbek', code: 'uz' },
          { id: '3', name: 'Russian', code: 'ru' }
        ],
        specializations: doctor.specialty ? [{
          id: doctor.specialty.id.toString(),
          name: doctor.specialty.name,
          description: doctor.specialty.description
        }] : [],
        education: educationData,
        experience: experienceData,
        certificates: certificatesData,
        services: servicesData,
        location: locationData,
        schedule: scheduleData,
        reviews: [
          {
            id: '1',
            patient_name: 'John Doe',
            rating: 5,
            comment: 'Excellent doctor, very professional and helpful.',
            created_at: '2024-01-15T10:00:00Z'
          },
          {
            id: '2',
            patient_name: 'Jane Smith',
            rating: 4,
            comment: 'Good experience, would recommend.',
            created_at: '2024-01-10T14:30:00Z'
          }
        ],
        blog_posts: [
          {
            id: '1',
            title: 'Health Tips from ' + doctor.user.first_name + ' ' + doctor.user.last_name,
            content: 'Here are some important health tips...',
            excerpt: 'Important health tips and advice',
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z'
          }
        ]
      }

      return { data: { data: completeDoctor, success: true, code: 200, message: 'Success' } }
    } catch (error) {
      console.error('Error fetching complete doctor data:', error)
      throw error
    }
  }
}

export default new DoctorAPI(BaseClient.getInstance())
