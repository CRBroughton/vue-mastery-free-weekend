<script setup lang="ts">
import { useMouse } from './mouse'

const { x, y } = useMouse()
</script>

<template>
  Mouse position is at: {{ x }}, {{ y }}
</template>

<style scoped>

</style>
