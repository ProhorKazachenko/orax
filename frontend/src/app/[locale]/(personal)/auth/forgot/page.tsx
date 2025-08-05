import { BackButton } from '@/components/ui/BackButton'
import { ForgotForm } from '@/components/auth/ForgotForm'

export default function Page() {
  return (
    <div className={'container flex flex-1 flex-col pt-8'}>
      <BackButton />
      <ForgotForm />
    </div>
  )
}
