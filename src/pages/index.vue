<script setup lang="ts">
import { words } from '~/composables/index'
// import { useHasLearnedCloud } from '~/composables'
// const [hasLearnedOption] = useHasLearnedCloud()
const wordsRef = ref()
const onAdd = () => {
  wordsRef.value.toggle()
}
</script>

<template>
  <main bg-dark-2 h-screen font-dy>
    <!-- 词云-已学习 -->
    <ParticleWords ref="wordsRef" :words="words" />
    <!-- <Charts :option="hasLearnedOption" h-full overflow-hidden /> -->
    <!-- 固钉-新增词云 -->
    <div drop-shadow-color="blue op-31" drop-shadow-md fixed bottom-sm right-xl @click="onAdd">
      <div i-carbon-add-filled text-4xl c-blue active:c-blue-5 />
    </div>
  </main>
</template>
