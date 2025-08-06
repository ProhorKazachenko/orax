import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import api from '@/lib/api/apiClient'
import { AxiosError } from 'axios'
import {
  IGenericMessageResponse,
  ILoginRequest,
  ILoginResponse,
  IPasswordRequestResetRequest,
  IPasswordResetRequest,
  IRegisterRequest,
  IRegisterResponse,
  IUpdatePhoneRequest,
} from '@/lib/api/user/user.types'
import { setCookie } from 'cookies-next/client'
import { useRouter } from '@/i18n/navigation'

export const useRegisterUser = (
  options?: UseMutationOptions<IRegisterResponse, AxiosError, IRegisterRequest>,
) => {
  const router = useRouter()
  return useMutation({
    mutationKey: ['registerUser'],
    mutationFn: (data) =>
      api.post<IRegisterResponse>('/users/auth/register', data).then((data) => data.data),
    onSuccess: (data) => {
      setCookie('token', data.token)
      router.push({
        pathname: '/account',
        query: {
          new: true,
        },
      })
    },
    ...options,
  })
}

export const useLoginUser = (
  options?: UseMutationOptions<ILoginResponse, AxiosError, ILoginRequest>,
) => {
  const router = useRouter()
  return useMutation({
    mutationKey: ['loginUser'],
    mutationFn: (data) =>
      api.post<ILoginResponse>('/users/auth/login', data).then((data) => data.data),
    onSuccess: (data) => {
      setCookie('token', data.token)
      router.push('/account')
    },
    ...options,
  })
}

export const useRequestPasswordReset = (
  options?: UseMutationOptions<IGenericMessageResponse, AxiosError, IPasswordRequestResetRequest>,
) => {
  return useMutation({
    mutationKey: ['requestPasswordReset'],
    mutationFn: (data) => api.post('/users/auth/password/email', data).then((data) => data.data),
    ...options,
  })
}

export const useResetPassword = (
  options?: UseMutationOptions<IGenericMessageResponse, AxiosError, IPasswordResetRequest>,
) => {
  const router = useRouter()
  return useMutation({
    mutationKey: ['resetPassword'],
    mutationFn: (data) =>
      api
        .post<IGenericMessageResponse>('/users/auth/password/reset', data)
        .then((data) => data.data),
    onSuccess: () => {
      router.push('/auth/login')
    },
    ...options,
  })
}

export const useUpdatePhone = (
  options?: UseMutationOptions<IGenericMessageResponse, AxiosError, IUpdatePhoneRequest>,
) => {
  return useMutation({
    mutationKey: ['updatePhone'],
    mutationFn: (data) => api.post('/users/update-phone', data).then(),
    ...options,
  })
}
