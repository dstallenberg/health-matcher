<template>
    <v-card
      class="mx-auto"
      width="400"
    >
      <template v-slot:title>
        Care Requests
      </template>
  
      <v-card-text>
        <v-list>
            <v-list-item v-for="(value, index) in requests" :key="index">
                <v-list-item-title>
                 {{ value.kind }} {{ value.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ (new Date(value.start)).toLocaleString() }} -> {{ (new Date(value.end)).toLocaleString() }}
                </v-list-item-subtitle>
                <v-divider inset/>
                {{ value.additionalInformation }}
                <v-divider inset/>
            </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts" setup>
import { computed } from 'vue';
import {useCareRequestStore} from '../store/careRequest'
import { onMounted } from 'vue';

const store = useCareRequestStore()

const requests = computed(() => {
    return store.careRequests
})

onMounted(() => {
    store.fetchCareRequests()
})


  </script>
  