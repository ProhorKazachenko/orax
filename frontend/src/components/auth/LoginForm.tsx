'use client'
import { PasswordInput } from '@/components/ui/PasswordInput'
import { UIButton } from '@/components/ui/UIButton'
import { Link } from '@/i18n/navigation'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import * as v from 'valibot'
import { UIInput } from '@/components/ui/UIInput'
import { useState } from 'react'
import { useLoginUser } from '@/lib/api/user/user.mutations'

interface FormData {
  email: string
  password: string
}
const schema = v.object({
  email: v.pipe(v.string(), v.nonEmpty('Incorrect email'), v.email('Incorrect email')),
  password: v.pipe(
    v.string(),
    v.nonEmpty('Incorrect password'),
    v.minLength(8, 'Incorrect password'),
  ),
})

export const LoginForm = () => {
  const [formError, setFormError] = useState<boolean | string>(false)
  const loginMutation = useLoginUser({
    onError: (error) => {
      if (error.status === 404 || error.status === 401) {
        setFormError('Incorrect email or password')
        return
      }
      setFormError(true)
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
    setFormError(false)
    loginMutation.mutate(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-3 md:w-2/3 lg:w-1/2 xl:w-2/5'
    >
      <h2>Login</h2>
      <p>Enter the email and password you specified during registration</p>

      <div className='flex flex-col items-stretch gap-4 pt-3 md:items-start'>
        <UIInput
          type='text'
          placeholder={'Email'}
          {...register('email')}
          autoComplete={'email'}
          error={errors.email?.message}
          wrapperClassName={'w-full'}
          disabled={loginMutation.isPending}
        />
        <PasswordInput
          placeholder={'Create a password'}
          {...register('password')}
          autoComplete={'new-password'}
          error={errors.password?.message}
          wrapperClassName={'w-full'}
          disabled={loginMutation.isPending}
        />
        {formError && (
          <p className={'text-error mt-1'}>
            {typeof formError === 'string'
              ? formError
              : 'Oops! Something went wrong while submitting the form.'}
          </p>
        )}
        <div className={'w-full text-end'}>
          <Link
            href={'/auth/forgot'}
            className={'!text-active hover:!text-accent active:!text-accent font-extrabold'}
          >
            Forgot your password?
          </Link>
        </div>
      </div>

      <div className={'flex flex-col gap-4 pt-5 md:items-start'}>
        <UIButton type={'submit'} disabled={loginMutation.isPending}>
          Login
        </UIButton>
      </div>
    </form>
  )
}
