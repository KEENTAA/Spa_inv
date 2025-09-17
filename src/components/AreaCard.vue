<script setup lang="ts">
import { ref } from 'vue'
import { useCenterActivation } from '@/composables/useCenterActivation'

interface Props {
  title: string
  description: string
  align: 'left' | 'right'
  id?: string
}

const props = defineProps<Props>()
const el = ref<HTMLElement | null>(null)
const { active } = useCenterActivation(el, 0.2)
</script>

<template>
  <section :id="id" ref="el" class="py-10">
    <div class="max-w-6xl mx-auto px-4">
      <div
        class="relative rounded-2xl glass gradient-border p-6 md:p-10"
        :class="[
          props.align === 'left' ? 'ml-0 md:ml-12 md:mr-24' : 'mr-0 md:mr-12 md:ml-24',
          active
            ? (props.align === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right')
            : (props.align === 'left' ? 'animate-slide-out-left' : 'animate-slide-out-right'),
        ]"
      >
        <h3 class="text-2xl md:text-3xl font-light text-slate-800">{{ title }}</h3>
        <p class="mt-3 text-slate-600">{{ description }}</p>
      </div>
    </div>
  </section>
</template>
