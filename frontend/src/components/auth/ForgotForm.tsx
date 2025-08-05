'use client'
import { UIButton } from '@/components/ui/UIButton'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import * as v from 'valibot'
import { UIInput } from '@/components/ui/UIInput'
import { useState } from 'react'
import { ForgotSuccess } from '@/components/auth/ForgotSuccess'

interface FormData {
  email: string
}
const schema = v.object({
  email: v.pipe(v.string(), v.nonEmpty('Incorrect email'), v.email('Incorrect email')),
})

export const ForgotForm = () => {
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<FormData>({
    resolver: valibotResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return <ForgotSuccess email={getValues('email')} />
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-3 md:w-2/3 lg:w-1/2 xl:w-2/5'
    >
      <h2>
        Recover <br className={'max-lg:hidden'} />
        password
      </h2>
      <p>
        Enter the email you specified during registration, and we will send you a link to reset your
        password
      </p>

      <div className='flex flex-col items-stretch gap-4 pt-3 md:items-start'>
        <UIInput
          type='text'
          placeholder={'Email'}
          {...register('email')}
          autoComplete={'email'}
          error={errors.email?.message}
          wrapperClassName={'w-full'}
        />
      </div>

      <div className={'flex flex-col gap-4 pt-5 md:items-start'}>
        <UIButton type={'submit'}>Send</UIButton>
      </div>
    </form>
  )
}
