import axios from 'axios'
import { env } from '@/utils/env'

export const api = axios.create({
  baseURL: env.NEXT_API_URL,
})
