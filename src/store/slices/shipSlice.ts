import { toast } from '@/components/ui/toast'
import { errorHandlerClient } from '@/lib/error-handler'
import axios from 'axios'
import { mutate } from 'swr'
import { StateCreator } from 'zustand'
import { IShipState } from '../types'

const createShipSlice: StateCreator<IShipState> = (set) => ({
  getShipList: async () => {
    try {
      const res = await axios.get('/api/ship')
      return res.data
    } catch (error) {
      errorHandlerClient(error)
    }
  },
  addShip: async (data, router) => {
    try {
      const res = await axios.post('/api/ship', data)

      toast({
        title: 'Success',
        type: 'success',
        message: res.data.message,
      })

      router.replace('/ship')
      mutate('shipList')
    } catch (error) {
      errorHandlerClient(error)
    }
  },
  editShip: async (data, router) => {
    try {
      const res = await axios.put('/api/ship', data)

      toast({
        title: 'Success',
        type: 'success',
        message: res.data.message,
      })

      router.replace('/ship')
      mutate('shipList')
    } catch (error) {
      errorHandlerClient(error)
    }
  },
  deleteShip: async (id) => {
    try {
      set((state) => ({ ...state, loadingDelete: true }))
      const res = await axios.delete(`/api/ship?id=${id}`)

      toast({
        title: 'Success',
        type: 'success',
        message: res.data.message,
      })
      set((state) => ({ ...state, loadingDelete: false }))
      mutate('shipList')
    } catch (error) {
      errorHandlerClient(error)
    }
  },
  shipTableColumns: [
    { field: 'col1', headerName: 'IMO Number', width: 200 },
    { field: 'col2', headerName: 'Name', width: 200 },
    { field: 'col3', headerName: 'Type', width: 200 },
    { field: 'col4', headerName: 'Flag', width: 150 },
    { field: 'col5', headerName: 'GRT', width: 100 },
    { field: 'col6', headerName: 'DWT', width: 100 },
    { field: 'col7', headerName: 'HP', width: 100 },
    { field: 'col8', headerName: 'Call Sign', width: 150 },
    { field: 'col9', headerName: 'Year Built', width: 150 },
  ],
})

export default createShipSlice
