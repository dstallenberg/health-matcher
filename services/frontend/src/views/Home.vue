<template>
  <CareRequest v-if="usertype === 'client'"/>
  
</template>

<script lang="ts" setup>
import {useAppStore} from '../store/app'
import CareRequest from '@/components/CareRequest.vue';

const { usertype } = useAppStore()
</script>
