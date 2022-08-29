<script setup lang="ts">
import { useHasLearnedCloud } from '~/composables'

const [hasLearnedOption] = useHasLearnedCloud()
</script>

<template>
  <main>
    <Charts :option="hasLearnedOption" h-sm overflow-hidden />
    <!-- 固钉-新增词云 -->
    <div i-carbon-add-filled fixed bottom-sm right-xl text-4xl c-blue />
  </main>
</template>
