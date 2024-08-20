<template>
  <n-h1>My Vike + Vue + Naive UI app</n-h1>
  <n-p>This page is: </n-p>
  <n-list>
    <n-list-item>Rendered to HTML.</n-list-item>
    <n-list-item>Interactive. <Counter /></n-list-item>
  </n-list>
</template>

<script lang="ts" setup>
import { NH1, NP, NList, NListItem } from 'naive-ui'
import Counter from '../../components/Counter.vue'
</script>
