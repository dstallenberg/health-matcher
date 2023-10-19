<template>
  <CareRequest v-if="usertype === 'client'"/>
  <CareRequestList v-else-if="usertype === 'caregiver'"></CareRequestList>
  <Login v-else></Login>
</template>

<script lang="ts" setup>
import CareRequestList from '@/components/CareRequestList.vue';
import {useAppStore} from '../store/app'
import CareRequest from '@/components/CareRequest.vue';
import Login from '@/components/Login.vue';
import { computed } from 'vue';

const store = useAppStore()

const usertype = computed(() => {
    return store.usertype
})
</script>
