<template>
  <n-button type="primary" @click="state.count++">Counter {{ state.count }}</n-button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { NButton } from 'naive-ui'

const state = reactive({ count: 0 })
</script>
