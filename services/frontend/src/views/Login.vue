<template>
  <v-card
    class="mx-auto"
    width="400"
  >
    <template v-slot:title>
      Who are you?
    </template>

    <v-card-text>
      <v-row>
        <v-col>
          <v-btn @click="() => setUsertype('client')" to="/">
            I am a client
          </v-btn>
        </v-col>
        <v-col>
          <v-btn @click="() => setUsertype('caregiver')" to="/">
            I am a caregiver
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import {useAppStore} from '../store/app'

const { setUsertype } = useAppStore()

</script>
