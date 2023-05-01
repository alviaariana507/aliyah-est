import useStore from '@/store/useStore'
import useSwr from 'swr'

const useCrewList = () => {
  const { getCrewList } = useStore()
  const { data, isLoading, error, mutate } = useSwr('crewList', getCrewList)

  return {
    data,
    loading: isLoading,
    error,
    mutate,
  }
}

export default useCrewList
