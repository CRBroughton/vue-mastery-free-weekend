<script setup lang="ts">
import { ref } from 'vue'
import { useRefHistory, useTitle } from '@vueuse/core'
import { useMouse } from './mouse'

const { x, y } = useMouse()
const title = useTitle('Composables Demo', { titleTemplate: '%s | My Demo' })

const count = ref(0)
const { undo } = useRefHistory(count)
</script>

<template>
  Mouse position is at: {{ x }}, {{ y }}

  <div>
    Count is {{ count }}
    <button @click="count++">
      Increase Count
    </button>
    <button @click="undo">
      Undo Count
    </button>
  </div>
</template>

<style scoped>

</style>
