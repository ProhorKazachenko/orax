import { UIButton } from '@/components/ui/UIButton'
import { Link } from '@/i18n/navigation'

export default function AuthPage() {
  return (
    <div className={'container py-24 md:py-43'}>
      <div className='flex flex-col gap-3 md:w-2/3 lg:w-1/2 xl:w-2/5'>
        <h1>Authorization</h1>
        <p>
          Want to earn with us? Transfer your USDT, BTC or ETH to management and earn income from a
          strategy with capital protection!
        </p>
        <Link href={'/auth/register'} className={'w-full'}>
          <UIButton className={'w-full'}>Register</UIButton>
        </Link>
        <Link href={'/auth/login'} className={'py-4 text-center font-extrabold'}>
          I already have an account
        </Link>
      </div>
    </div>
  )
}
