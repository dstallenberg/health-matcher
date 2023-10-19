<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-bottle-tonic-plus-outline" />

      Health Matcher
    </v-app-bar-title>
    <v-btn @click="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import {useAppStore} from '../../store/app'

const store = useAppStore()

function logout() {
  store.logout()
}
</script>
