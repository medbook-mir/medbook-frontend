import { useQuery } from '@tanstack/react-query'
import doctorAPI from '@/api/v1/doctorAPI'
import { DoctorType } from '@/types/doctor-type'

export const useDoctors = () => {
  return useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const response = await doctorAPI.getDoctors()
      return response.data.data
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000 // 10 minutes
  })
}

export const useDoctor = (id: string) => {
  return useQuery({
    queryKey: ['doctor', id],
    queryFn: async () => {
      const response = await doctorAPI.getDoctor(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000 // 10 minutes
  })
}

export const useCompleteDoctorData = (id: string) => {
  return useQuery({
    queryKey: ['complete-doctor', id],
    queryFn: async () => {
      const response = await doctorAPI.getCompleteDoctorData(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000 // 10 minutes
  })
}

export const useDoctorLanguages = (id: string) => {
  return useQuery({
    queryKey: ['doctor-languages', id],
    queryFn: async () => {
      const response = await doctorAPI.getDoctorLanguages(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000 // 15 minutes
  })
}

export const useDoctorSpecializations = (id: string) => {
  return useQuery({
    queryKey: ['doctor-specializations', id],
    queryFn: async () => {
      const response = await doctorAPI.getDoctorSpecializations(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000 // 15 minutes
  })
}

export const useDoctorEducation = (id: string) => {
  return useQuery({
    queryKey: ['doctor-education', id],
    queryFn: async () => {
      const response = await doctorAPI.getDoctorEducation(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000 // 15 minutes
  })
}

export const useDoctorExperience = (id: string) => {
  return useQuery({
    queryKey: ['doctor-experience', id],
    queryFn: async () => {
      const response = await doctorAPI.getDoctorExperience(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000 // 15 minutes
  })
}

export const useDoctorCertificates = (id: string) => {
  return useQuery({
    queryKey: ['doctor-certificates', id],
    queryFn: async () => {
      const response = await doctorAPI.getDoctorCertificates(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000 // 15 minutes
  })
}

export const useDoctorServices = (id: string) => {
  return useQuery({
    queryKey: ['doctor-services', id],
    queryFn: async () => {
      const response = await doctorAPI.getDoctorServices(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000 // 10 minutes
  })
}

export const useDoctorLocation = (id: string) => {
  return useQuery({
    queryKey: ['doctor-location', id],
    queryFn: async () => {
      const response = await doctorAPI.getDoctorEducation(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000 // 15 minutes
  })
}

export const useDoctorSchedule = (id: string) => {
  return useQuery({
    queryKey: ['doctor-schedule', id],
    queryFn: async () => {
      const response = await doctorAPI.getDoctorSchedule(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 2 * 60 * 1000, // 2 minutes (schedule changes frequently)
    gcTime: 5 * 60 * 1000 // 5 minutes
  })
}

export const useDoctorReviews = (id: string) => {
  return useQuery({
    queryKey: ['doctor-reviews', id],
    queryFn: async () => {
      const response = await doctorAPI.getDoctorReviews(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000 // 10 minutes
  })
}

export const useDoctorBlogPosts = (id: string) => {
  return useQuery({
    queryKey: ['doctor-blog-posts', id],
    queryFn: async () => {
      const response = await doctorAPI.getDoctorBlogPosts(id)
      return response.data.data
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000 // 15 minutes
  })
}
