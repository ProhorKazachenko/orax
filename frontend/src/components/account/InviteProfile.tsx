'use client'
import { UIButton } from '@/components/ui/UIButton'
import { useEffect, useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { UIInput } from '@/components/ui/UIInput'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import * as v from 'valibot'
import { useUpdatePhone } from '@/lib/api/user/user.mutations'
import { useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

interface FormData {
  phone: string
}

const schema = v.object({
  phone: v.pipe(
    v.string(),
    v.nonEmpty('Incorrect phone'),
    v.regex(/^\+?\d{10,15}$/, 'Incorrect phone'),
  ),
})

export const InviteProfile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const queryClient = useQueryClient()
  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const updatePhoneMutation = useUpdatePhone({
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['self'] })
      setIsOpen(false)
    },
  })

  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: valibotResolver(schema),
  })
  const handleClose = () => {
    setIsOpen(false)
    router.replace({
      pathname: pathname,
      query: {},
    })
  }

  useEffect(() => {
    if (params.get('new')) {
      setIsOpen(true)
    }
  }, [params])
  const onSubmit = (data: FormData) => {
    updatePhoneMutation.mutate({ phone: data.phone.replace('+', '') })
  }
  return (
    <div className='mt-8 flex flex-1 flex-col items-center gap-8 sm:mt-10 md:mt-16'>
      <p className={'h4 font-heading max-w-[320px] text-center md:max-w-[500px]'}>
        Put your USDT, BTC or ETH under management and earn income from a capital-protected
        strategy.
      </p>
      <UIButton onClick={() => setIsOpen(true)}>I want to invest</UIButton>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className={'md:max-w-[470px]'}>
          <h2>Start investing?</h2>
          <p className={'mt-4'}>
            Leave your contact details in WhatsApp or Telegram and we will contact you to discuss
            all the details
          </p>
          <form
            className={'mt-6 flex flex-col gap-4 md:items-start'}
            onSubmit={handleSubmit(onSubmit)}
          >
            <UIInput
              wrapperClassName={'w-full'}
              placeholder={'Phone'}
              error={formState.errors.phone?.message}
              autoComplete={'mobile tel'}
              {...register('phone')}
              disabled={updatePhoneMutation.isPending}
            />
            <UIButton type={'submit'} disabled={updatePhoneMutation.isPending}>
              Send
            </UIButton>
            <p>
              I have read and accept the{' '}
              <Link
                href={'/documents/tob'}
                className={'!text-active hover:!text-accent !font-serif'}
              >
                terms
              </Link>{' '}
              and conditions
            </p>
          </form>
        </div>
      </Modal>
    </div>
  )
}
