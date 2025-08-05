'use client'
import { PasswordInput } from '@/components/ui/PasswordInput'
import { UIButton } from '@/components/ui/UIButton'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import * as v from 'valibot'

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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: valibotResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

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
      </div>

      <div className={'flex flex-col gap-4 pt-5 md:items-start'}>
        <UIButton type={'submit'}>Save</UIButton>
      </div>
    </form>
  )
}
