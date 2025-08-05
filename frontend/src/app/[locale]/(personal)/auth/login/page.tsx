import { BackButton } from '@/components/ui/BackButton'
import { LoginForm } from '@/components/auth/LoginForm'

export default function Login() {
  return (
    <div className={'container py-8'}>
      <BackButton />
      <LoginForm />
    </div>
  )
}
