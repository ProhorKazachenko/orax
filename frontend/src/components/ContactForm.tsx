'use client'
import { UIButton } from '@/components/ui/UIButton'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import * as v from 'valibot'
import { valibotResolver } from '@hookform/resolvers/valibot'
import clsx from 'clsx'
import { submitForm } from '@/actions/submitForm'
import { useEffect, useRef, useState, useTransition } from 'react'

interface FormValues {
  name: string
  contact: string
  message: string
}

export const ContactForm = () => {
  const t = useTranslations('Form')
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<boolean | null>(null)

  const formRef = useRef<HTMLDivElement | null>(null)

  const schema = v.object({
    name: v.pipe(
      v.string(t('nameError')),
      v.nonEmpty(t('nameError')),
      v.maxLength(128, t('nameError')),
    ),
    contact: v.union(
      [
        v.pipe(v.string(t('emailError')), v.email(t('emailError'))),
        v.pipe(v.string(t('emailError')), v.regex(/^\+?\d{10,15}$/, t('emailError'))),
      ],
      t('emailError'),
    ),
    message: v.union([v.literal(''), v.pipe(v.string(), v.trim(), v.maxLength(512))]),
  })
  const {
    register,
    formState: { errors, touchedFields },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: valibotResolver(schema),
  })
  const onSubmit = (data: FormValues) => {
    setResult(null)
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    startTransition(async () => {
      const res = await submitForm(formData)
      setResult(res.success)
    })
  }

  useEffect(() => {
    console.log(result)
    if (!formRef.current) return
    const currentHeight = formRef.current?.offsetHeight || 0
    formRef.current.style.height = `${currentHeight}px`
  }, [result])
  return (
    <section className={'section container'}>
      <h2>{t('title')}</h2>
      <div className='max-w-[480px] lg:max-w-1/2'>
        <p className={'mt-2 mb-3 max-w-[500px] sm:mb-6 md:mt-4'}>{t('description')}</p>
        <div ref={formRef}>
          {result === true && (
            <p className={'h4 font-heading text-active'}>
              Thank you!
              <br />
              Your submission has been received!
            </p>
          )}
          {result !== true && (
            <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col items-stretch gap-6'}>
              <div>
                <input
                  className={clsx('w-full', {
                    'border-error !border-3 !border-solid':
                      (touchedFields.name && errors.name?.message) || result === false,
                  })}
                  type='text'
                  placeholder={t('name')}
                  {...register('name')}
                />
                <p className={'text-error mt-1 text-xs'}>
                  {touchedFields.name && errors.name?.message}
                </p>
              </div>
              <div>
                <input
                  className={clsx('w-full', {
                    '!border-error !border-3 !border-solid':
                      (touchedFields.contact && errors.contact?.message) || result === false,
                  })}
                  type='text'
                  placeholder={t('email')}
                  {...register('contact')}
                />
                <p className={'text-error mt-1 text-xs'}>
                  {touchedFields.contact && errors.contact?.message}
                </p>
              </div>
              <div>
                <textarea
                  className={clsx('w-full', {
                    'border-error !border-3 !border-solid':
                      touchedFields.message && errors.message?.message,
                  })}
                  id=''
                  rows={4}
                  placeholder={t('message')}
                  {...register('message')}
                />
                <p className={'text-error mt-1 text-xs'}>
                  {touchedFields.message && errors.message?.message}
                </p>
                {result === false && (
                  <p className={'text-error mt-1'}>
                    Oops! Something went wrong while submitting the form.
                  </p>
                )}
              </div>
              <UIButton
                className={'disabled:bg-active/30 mt-2 sm:self-start'}
                disabled={isPending}
                type={'submit'}
              >
                {t('send')}
              </UIButton>
              <p>
                {t('policyPre')}{' '}
                <Link
                  href={'/documents/privacy'}
                  className={
                    'font-inherit !text-active paragraph hover:!text-accent active:!text-accent'
                  }
                >
                  {t('policy')}
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
