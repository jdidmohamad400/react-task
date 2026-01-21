
import { useFormStore } from '../store/useFormStore'

export default function SummaryPage() {
  const { formData } = useFormStore()

  return (
    <div>
      <h2>Summary Page</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  )
}