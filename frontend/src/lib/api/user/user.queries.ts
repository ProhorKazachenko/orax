import { queryOptions, useQuery, UseQueryOptions } from '@tanstack/react-query'
import api from '@/lib/api/apiClient'
import { ISelfData } from '@/lib/api/user/user.types'
import { AxiosError } from 'axios'
import { getCookie } from 'cookies-next/client'

export const selfDataOptions = (
  options?: Omit<UseQueryOptions<ISelfData, AxiosError>, 'queryFn' | 'queryKey'>,
) =>
  queryOptions({
    queryKey: ['self'],
    queryFn: () => api.get<ISelfData>('/users/data').then((data) => data.data),
    staleTime: 20000,
    ...options,
  })

export const useSelfData = (
  options?: Omit<UseQueryOptions<ISelfData, AxiosError>, 'queryFn' | 'queryKey'>,
) => {
  const token = getCookie('token')

  return useQuery(selfDataOptions({ enabled: !!token, ...options }))
}
