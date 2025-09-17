<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  name: string
  hue: number
  size?: number
  index: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
})

const show = ref(false)
const emit = defineEmits<{
  (e: 'hover', hovering: boolean): void
}>()

function onEnter() {
  show.value = true
  emit('hover', true)
}
function onLeave() {
  show.value = false
  emit('hover', false)
}
</script>

<template>
  <div
    class="relative select-none"
    :style="{ width: props.size + 'px', height: props.size + 'px' }"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @touchstart.prevent="onEnter"
    @touchend.prevent="onLeave"
  >
    <div
      class="rounded-full shadow-glow"
      :style="{
        background:
          `radial-gradient(60% 60% at 30% 30%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 60%), conic-gradient(from 0deg, hsl(${props.hue} 100% 85%), hsl(${props.hue} 95% 70%), hsl(${props.hue} 80% 75%), hsl(${props.hue} 90% 88%))`,
        boxShadow: `0 0 24px hsla(${props.hue} 100% 70% / 0.45), inset 0 2px 8px rgba(255,255,255,0.8)`,
      }"
    >
      <div class="h-full w-full rounded-full" />
    </div>

    <transition name="fade">
      <div
        v-if="show"
        class="absolute left-1/2 -translate-x-1/2 -top-10 whitespace-nowrap px-3 py-1 rounded-full glass gradient-border text-slate-700 text-xs shadow-subtle"
      >
        {{ props.name }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity 200ms ease, transform 200ms ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; transform: translateY(4px); }
</style>
