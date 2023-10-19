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

          <v-btn type="submit" block class="mt-2">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts" setup>

  type CareRequest = {
    kind: string,
    start: number
    end: number
    name: string
    additionalInformation: string
  }

  const careForm: CareRequest = {
    kind: '',
    start: 0,
    end: 0,
    name: '',
    additionalInformation: ''
  }

  const kindOptions = ['household', 'medical']

function submitRequest() {
  // TODO
}

  </script>
  