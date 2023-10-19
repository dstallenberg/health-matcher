<template>
    <v-card
      class="mx-auto"
      width="400"
    >
      <template v-slot:title>
        Care Request
      </template>
  
      <v-card-text>
        <v-form @submit.prevent="submitRequest">
          <v-text-field
            v-model="careForm.name"
            label="Name"
          ></v-text-field>
          <v-select
            v-model="careForm.kind"
            :items="kindOptions"
            label="Kind"
          ></v-select>
          <v-text-field 
          v-model="careForm.start"
            type="datetime-local"
            label="Start date/time"
          >
          </v-text-field>
          <v-text-field 
          v-model="careForm.end"
            type="datetime-local"
            label="End date/time"
          >
          </v-text-field>
          <v-textarea
            v-model="careForm.additionalInformation"
            label="Additional Information"
            type="datetime-local"
          ></v-textarea>

          <v-btn :loading="isLoading" type="submit" block class="mt-2">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts" setup>
import { NewCareRequest } from 'api';
import {useCareRequestStore} from '../store/careRequest'
import { computed, ref } from 'vue';

const { createCareRequest } = useCareRequestStore()


  const careForm: NewCareRequest = {
    kind: 'household',
    start: 0,
    end: 0,
    name: '',
    additionalInformation: ''
  }

  const kindOptions = ['household', 'medical']

const isLoading = ref(false)

function submitRequest() {
  isLoading.value = true
  // TODO
  createCareRequest(careForm)
    .then((id) => {
      isLoading.value = false
    })
    .catch((error) => {
      isLoading.value = false
    })
}

  </script>
  