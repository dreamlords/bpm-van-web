<template>
  <component v-if="svgInstance" :is="svgInstance" />
</template>
<script lang="ts">
import { Component, computed, defineComponent, PropType } from 'vue'
import * as Icon from '@element-plus/icons-vue'

const iconFiles: Record<string, { default: Component }> = import.meta.glob('@/assets/icons/*.svg', { eager: true })
const iconNames = Object.keys(iconFiles).map(it => it.substring(it.lastIndexOf('/') + 1).replace('.svg', ''))

// /src/assets/icons/resize.svg

export default defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props){
    const svgInstance = computed<Component | undefined>(() => {
      const iconObj: Record<string, Component> = Icon
      if (Object.prototype.hasOwnProperty.call(Icon, props.name)) {
        return iconObj[props.name]
      } else if (iconNames.includes(props.name)) {
        return iconFiles[`/src/assets/icons/${props.name}.svg`].default
      }
      return undefined
    })
    return {
      svgInstance
    }
  }
})
</script>


