<script lang="ts" setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import 'echarts-wordcloud'

defineProps<{ option: any }>()
use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

provide(THEME_KEY, 'dark')
</script>

<template>
  <VChart :option="option" />
</template>

