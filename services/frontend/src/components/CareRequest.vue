<template>
    <v-card
      class="mx-auto"
      width="400"
    >
      <template v-slot:title>
        Care Request
      </template>
  
      <v-card-text>
        <v-form ref="form" @submit.prevent="submitRequest" v-model="isFormValid">
          <v-text-field
            v-model="careForm.name"
            label="Name"
            :rules="rules.name"
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
            :rules="rules.start"
          >
          </v-text-field>
          <v-text-field 
          v-model="careForm.end"
            type="datetime-local"
            label="End date/time"
            :rules="rules.end"
          >
          </v-text-field>
          <v-textarea
            v-model="careForm.additionalInformation"
            label="Additional Information"
            type="datetime-local"
            :rules="rules.additionalInformation"
          ></v-textarea>

          <v-btn :disabled="!isFormValid" :loading="isLoading" type="submit" block class="mt-2">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts" setup>
import { NewCareRequest } from 'api';
import {useCareRequestStore} from '../store/careRequest'
import { ref } from 'vue';
import { reactive } from 'vue';

const { createCareRequest } = useCareRequestStore()

const form = ref(null)

const careForm: NewCareRequest = reactive({
  kind: 'household',
  start: 0,
  end: 0,
  name: '',
  additionalInformation: ''
})

const rules = {
  additionalInformation: [
    (value) => {
      if (value?.length > 0) return true

      return "Additional information cannot be empty"
    }
  ],
  name: [
    (value) => {
      if (value?.length > 3) return true

      return "Name must be at least 3 characters"
    }
  ],
  start: [
    (value) => {
      if (value === 0) return 'Start date/time cannot be empty';

      return true
    }
  ],
  end: [
  (value) => {
      if (value === 0) return 'End date/time cannot be empty';
      return true
    }
  ]
}

const kindOptions = ['household', 'medical']

const isLoading = ref(false)

const isFormValid = ref(false)

function submitRequest() {
  isLoading.value = true

  createCareRequest(careForm)
    .then((id) => {
      isLoading.value = false
      form.value.reset()
    })
    .catch((error) => {
      isLoading.value = false
      form.value.reset()
    })
}

  </script>
  