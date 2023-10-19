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
            <!-- <v-list-item v-for="(value, index) in requests" :key="index">
                <v-list-item-title>
                 {{ value.kind }} {{ value.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ (new Date(value.start)).toLocaleString() }} -> {{ (new Date(value.end)).toLocaleString() }}
                </v-list-item-subtitle>
                <v-divider inset/>
                {{ value.additionalInformation }}
                <v-divider inset/>
            </v-list-item> -->

            <v-dialog width="500" v-for="(value, index) in requests" :key="index">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" text="Open Dialog"> 
                  {{ value.name }}
                  <v-list-item-subtitle>
                    {{ (new Date(value.start)).toLocaleString() }} -> {{ (new Date(value.end)).toLocaleString() }}
                  </v-list-item-subtitle>
                </v-list-item>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Care Request Information">
                  <v-card-text>
                    <b>name:</b> {{ value.name }}<br>
                    <b>type:</b> {{  value.kind }}<br>
                    <b>Start:</b> {{ (new Date(value.start)).toLocaleString() }}<br>
                    <b>End:</b> {{ (new Date(value.end)).toLocaleString() }}<br>
                    <b>Additional Information:</b><br>
                    {{ value.additionalInformation }}
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Apply"
                      @click="isActive.value = false && apply(value.id)"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
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

function apply(id: string) {
  // TODO
}

  </script>
  