import { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

interface Props extends PropsWithChildren {
  isSecondary?: boolean
  heading: string
  description?: string
  className?: string
  disableTextLength?: boolean
  containerClassName?: string
}

export const Hero: FC<Props> = ({
  isSecondary,
  heading,
  description,
  children,
  className,
  disableTextLength,
  containerClassName,
}) => {
  return (
    <section className={clsx(className)}>
      <div className={clsx('container py-8 sm:py-10 md:py-15 lg:py-20', containerClassName)}>
        <div className={'mb-6 lg:mb-8'}>
          {!isSecondary && (
            <h1
              className={clsx('mb-5 md:mb-3 lg:mb-6', {
                'sm:max-xl:max-w-[70%]': !disableTextLength,
              })}
              dangerouslySetInnerHTML={{ __html: heading?.replace('\n', '<br />') }}
            />
          )}
          {isSecondary && (
            <h2
              className={'font-heading !text-sm font-extrabold text-white/70'}
              dangerouslySetInnerHTML={{ __html: heading?.replace('\n', '<br />') }}
            />
          )}
          {description && (
            <p
              className={clsx({
                'h2 font-heading md:max-w-3/4': isSecondary,
                'sm:max-md:max-w-[55%], sm:max-xl:max-w-[70%]': !isSecondary && !disableTextLength,
              })}
            >
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
