import { RegisterForm } from '@/components/auth/RegisterForm'
import { BackButton } from '@/components/ui/BackButton'

export default function Page() {
  return (
    <div className={'container py-8'}>
      <BackButton />
      <RegisterForm />
    </div>
  )
}
