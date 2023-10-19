// Utilities
import { CareRequest, CreateSuccess, ModifySuccess, NewCareRequest } from 'api'
import axios from 'axios'
import { defineStore } from 'pinia'

export type CareRequestState = {
    careRequests: CareRequest[]
}

export const useCareRequestStore = defineStore('careRequest', {
  state: () => (({
    careRequests: []
  }) as CareRequestState),
  getters: {
    getCareRequests(state) {
        return state.careRequests
    }
  },
  actions: {
    async fetchCareRequests() {
      try {
        const data = await axios.get<CareRequest[]>('http://localhost:8080/care-request')
        this.careRequests = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async createCareRequest(careRequest: NewCareRequest) {
        try {
            const data = await axios.post<CreateSuccess>('http://localhost:8080/care-request', careRequest)
            return data.data.id
          } catch (error) {
            alert(error)
            console.log(error)
          }
    },
    async applyToCareRequest(id: string) {
      try {
        const data = await axios.post<ModifySuccess>('http://localhost:8080/care-request/apply', {id: id})
        return data.data.id
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})

