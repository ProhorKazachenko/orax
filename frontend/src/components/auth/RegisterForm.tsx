'use client'
import { PasswordInput } from '@/components/ui/PasswordInput'
import { UIButton } from '@/components/ui/UIButton'
import { Link } from '@/i18n/navigation'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import * as v from 'valibot'
import { UIInput } from '@/components/ui/UIInput'
import { useRegisterUser } from '@/lib/api/user/user.mutations'
import { useState } from 'react'

interface FormData {
  email: string
  password: string
  repeatPassword: string
}
const schema = v.pipe(
  v.object({
    email: v.pipe(v.string(), v.nonEmpty('Incorrect email'), v.email('Incorrect email')),
    password: v.pipe(
      v.string(),
      v.nonEmpty('Incorrect password'),
      v.minLength(8, 'Incorrect password'),
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

export const RegisterForm = () => {
  const [formError, setFormError] = useState<boolean>(false)
  const registerMutation = useRegisterUser({
    onError: () => {
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
    registerMutation.mutate({
      email: data.email,
      password: data.password,
      password_confirmation: data.repeatPassword,
    })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-3 md:w-2/3 lg:w-1/2 xl:w-2/5'
    >
      <h2>Register</h2>
      <p>Enter your email and create a password of at least 8 characters</p>

      <div className='flex flex-col items-stretch gap-4 pt-3 md:items-start'>
        <UIInput
          type='text'
          placeholder={'Email'}
          {...register('email')}
          autoComplete={'email'}
          error={errors.email?.message}
          wrapperClassName={'w-full'}
          disabled={registerMutation.isPending}
        />
        <PasswordInput
          placeholder={'Create a password'}
          {...register('password')}
          autoComplete={'new-password'}
          error={errors.password?.message}
          wrapperClassName={'w-full'}
          disabled={registerMutation.isPending}
        />
        <PasswordInput
          placeholder={'Repeat password'}
          {...register('repeatPassword')}
          autoComplete={'new-password'}
          error={errors.repeatPassword?.message}
          wrapperClassName={'w-full'}
          disabled={registerMutation.isPending}
        />
        {formError && (
          <p className={'text-error mt-1'}>Oops! Something went wrong while submitting the form.</p>
        )}
      </div>

      <div className={'flex flex-col gap-4 pt-5 md:items-start'}>
        <UIButton type={'submit'} disabled={registerMutation.isPending}>
          Register
        </UIButton>
        <p>
          By clicking the “Register” button, you agree to the{' '}
          <Link
            className={'!text-active hover:!text-accent active:!text-accent !font-serif'}
            href={'/documents/privacy'}
          >
            Data&nbsp;Protection and Privacy&nbsp;Policy
          </Link>
        </p>
      </div>
    </form>
  )
}
