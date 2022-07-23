<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { useMouse } from './mouse'

const { x, y } = useMouse()
const title = useTitle('Composables Demo', { titleTemplate: '%s | My Demo' })
</script>

<template>
  Mouse position is at: {{ x }}, {{ y }}
</template>

<style scoped>

</style>
