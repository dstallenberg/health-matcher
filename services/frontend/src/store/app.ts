// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    usertype: 'unknown'
  }),
  actions: {
    setUsertype(usertype: 'client' | 'caregiver') {
      this.usertype = usertype
    },
    logout() {
      this.usertype = 'unknown'
    }
  }
})

