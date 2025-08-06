'use client'
import { PasswordInput } from '@/components/ui/PasswordInput'
import { UIButton } from '@/components/ui/UIButton'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import * as v from 'valibot'
import { useResetPassword } from '@/lib/api/user/user.mutations'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from '@/i18n/navigation'

interface FormData {
  password: string
  repeatPassword: string
}
const schema = v.pipe(
  v.object({
    password: v.pipe(
      v.string(),
      v.nonEmpty('Incorrect password'),
      v.minLength(8, 'Incorrect password'),
      v.regex(/[A-Z]/, 'At least one capital letter'),
      v.regex(/[a-z]/, 'At least one lowercase letter'),
      v.regex(/[0-9]/, 'At least one number'),
      v.regex(/[^A-Za-z0-9]/, 'At least one special character'),
    ),
    repeatPassword: v.pipe(
      v.string(),
      v.nonEmpty('Incorrect password'),
      v.minLength(8, 'Incorrect password'),
    ),
  }),
  v.forward(
    v.partialCheck(
      [['password'], ['repeatPassword']],
      ({ password, repeatPassword }) => password === repeatPassword,
      'Passwords do not match',
    ),
    ['repeatPassword'],
  ),
)

export const RecoveryForm = () => {
  const [formError, setFormError] = useState<string | null>(null)
  const params = useSearchParams()
  const router = useRouter()

  const resetMutation = useResetPassword({
    onError: (error) => {
      if (error.status === 410) {
        setFormError('This link has expired')
        return
      }
      setFormError('Oops! Something went wrong while submitting the form.')
    },
  })
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: valibotResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    resetMutation.mutate({
      token: params.get('token') as string,
      password: data.password,
      password_confirmation: data.repeatPassword,
    })
  }
  useEffect(() => {
    if (!params.has('token')) {
      router.push('/auth')
    }
  }, [params, router])
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-3 md:w-2/3 lg:w-1/2 xl:w-2/5'
    >
      <h2>
        Create <br className={'max-lg:hidden'} /> a password
      </h2>
      <p>Create a new password of at least 8 characters</p>

      <div className='flex flex-col items-stretch gap-4 pt-3 md:items-start'>
        <PasswordInput
          placeholder={'Create a password'}
          {...register('password')}
          autoComplete={'new-password'}
          error={errors.password?.message}
          wrapperClassName={'w-full'}
        />
        <PasswordInput
          placeholder={'Repeat password'}
          {...register('repeatPassword')}
          autoComplete={'new-password'}
          error={errors.repeatPassword?.message}
          wrapperClassName={'w-full'}
        />
        {formError && <p className={'text-error mt-1'}>{formError}</p>}
      </div>

      <div className={'flex flex-col gap-4 pt-5 md:items-start'}>
        <UIButton type={'submit'}>Save</UIButton>
      </div>
    </form>
  )
}
