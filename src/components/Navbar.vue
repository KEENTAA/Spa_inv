<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const open = ref(false)
const scrolled = ref(false)

const links = [
  { id: 'hardware', label: 'Hardware' },
  { id: 'software', label: 'Software' },
  { id: 'networking', label: 'Networking' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'ai-data', label: 'AI & Data' },
  { id: 'cloud-systems', label: 'Cloud Systems' },
  { id: 'design-ux', label: 'Design & UX' },
]

const emit = defineEmits<{ (e: 'replay'): void }>()

function onScroll() {
  const threshold = window.innerHeight * 0.6
  scrolled.value = window.scrollY > threshold
}

function goTop() {
  emit('replay')
}

function onNavClick() {
  open.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-500',
      scrolled
        ? 'bg-white/85 backdrop-blur-md shadow-md'
        : 'bg-transparent backdrop-blur-0 shadow-none',
    ]"
  >
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <a
          href="#top"
          @click.prevent="goTop"
          class="flex items-center gap-2 select-none transition-transform duration-500"
          :class="scrolled ? 'scale-105' : 'scale-100'"
        >
          <div class="rounded-full bg-white/80 px-3 py-1 shadow-subtle text-slate-700 font-medium">
            HAGEN Co
          </div>
        </a>

        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="l in links"
            :key="l.id"
            :href="`#${l.id}`"
            class="px-3 py-2 text-sm text-slate-700 hover:text-slate-900 relative"
          >
            <span class="after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:bg-slate-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"></span>
            {{ l.label }}
          </a>
        </div>

        <button
          class="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 text-slate-700 ring-1 ring-slate-200 bg-white/60 backdrop-blur-xs"
          @click="open = !open"
          aria-label="Open menu"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path v-if="!open" d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.5"/>
            <path v-else d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </button>
      </div>

      <div v-if="open" class="md:hidden pb-3">
        <div class="grid gap-1">
          <a
            v-for="l in links"
            :key="l.id + '-m'"
            :href="`#${l.id}`"
            @click="onNavClick"
            class="px-3 py-2 rounded-md text-slate-700 hover:bg-white/70"
          >
            {{ l.label }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
