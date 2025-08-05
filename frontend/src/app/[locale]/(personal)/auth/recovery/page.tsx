import { BackButton } from '@/components/ui/BackButton'
import { RecoveryForm } from '@/components/auth/RecoveryForm'

export default function Page() {
  return (
    <div className={'container py-8'}>
      <BackButton />
      <RecoveryForm />
    </div>
  )
}
