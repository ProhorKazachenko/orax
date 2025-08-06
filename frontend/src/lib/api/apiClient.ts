import axios from 'axios'
import { getCookie } from 'cookies-next/client'

const baseURL = process.env.NEXT_PUBLIC_API_URL,
  isServer = typeof window === 'undefined'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import('next/headers')
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
  } else {
    const token = getCookie('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
  }
  return config
})

export default api
