<script setup lang="ts">
import { useRandom } from '~/composables'
import { macarons } from '~/config/color'
const props = defineProps<{
  words: { name: string; value: number }[]
}>()

interface WordItem { name: string; value: number; color: string; x: string; y: string; size: string }

let readyList: { name: string; value: number }[] = []
const renderList = ref<WordItem[]>([])

const { fromArray, spliceArray, integerRange } = useRandom()

const { width, height } = useWindowSize()
const reset = () => {
  renderList.value = []
  readyList = props.words.slice(0)
}
const { pause, resume, isActive } = useIntervalFn(() => {
  if (!readyList.length) {
    reset()
    return
  }
  const word = spliceArray(readyList)
  const tempList = [...renderList.value]
  if (renderList.value.length > 20)
    tempList.shift()
  renderList.value = [...tempList, {
    ...word,
    color: fromArray(macarons),
    x: `${integerRange(0, width.value - 50)}px`,
    y: `${integerRange(0, height.value - 50)}px`,
    size: fromArray(['text-lg', 'text-xl', 'text-2xl', 'text-3xl']),
  }]
}, 500, { immediate: false })

const toggle = () => {
  isActive.value ? pause() : resume()
}

defineExpose({
  pause,
  isActive,
  toggle,
})

onMounted(() => {
  reset()
  resume()
})
</script>

<template>
  <section
    relative h-full select-none
    text-2xl
    overflow-hidden
  >
    <div
      v-for="item of renderList" :key="item.name" absolute :style="{
        left: item.x,
        top: item.y,
        color: item.color,
      }"
      :class="[item.size]"
      animate-zoom-in-up
    >
      {{ item.name }}
    </div>
  </section>
</template>
