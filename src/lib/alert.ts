import { toast } from '@/components/ui/toast'

export const alert = (message: string) =>
  toast({
    title: 'Success',
    type: 'success',
    message,
  })
