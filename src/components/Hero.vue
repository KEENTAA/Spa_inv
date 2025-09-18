<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed, defineExpose } from 'vue'

const prefersReduced = ref(false)
const paused = ref(false)
const phase = ref<'gather' | 'orbit'>('gather')
const runId = ref(0)

const logos = [
  { name: 'Hardware', url: 'https://cdn-icons-png.flaticon.com/128/4618/4618814.png', id: 'hardware' },
  { name: 'Software', url: 'https://cdn-icons-png.flaticon.com/128/2010/2010990.png', id: 'software' },
  { name: 'Networking', url: 'https://cdn-icons-png.flaticon.com/128/10560/10560531.png', id: 'networking' },
  { name: 'Cybersecurity', url: 'https://cdn-icons-png.flaticon.com/128/7827/7827955.png', id: 'cybersecurity' },
  { name: 'AI & Data', url: 'https://cdn-icons-png.flaticon.com/128/4616/4616790.png', id: 'ai-data' },
  { name: 'Cloud Systems', url: 'https://cdn-icons-png.flaticon.com/128/7792/7792463.png', id: 'cloud-systems' },
  { name: 'Design & UX', url: 'https://cdn-icons-png.flaticon.com/128/3159/3159310.png', id: 'design-ux' },
] as const

const radius = 140

function handleHover(isHovering: boolean) {
  paused.value = isHovering
}

function replay() {
  runId.value++
  phase.value = prefersReduced.value ? 'orbit' : 'gather'
  paused.value = false
  if (!prefersReduced.value) {
    const total = 2600 + logos.length * 120 + 200
    window.setTimeout(() => (phase.value = 'orbit'), total)
  }
}

function onLogoClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  replay()
}

const orbitStyle = computed(() => ({
  animationPlayState: paused.value ? 'paused' as const : 'running' as const,
}))


const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.scrollY;
    const middleOfViewport = window.innerHeight / 2;
    const targetScrollPosition = absoluteElementTop - middleOfViewport + (elementRect.height / 2);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth',
    });
  }
};

const mobileGridClass = computed(() => {
  const count = logos.length
  if (count <= 2) {
    return 'grid-cols-' + count
  }
  return 'grid-cols-3'
})

onMounted(() => {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReduced.value = mq.matches
  if (prefersReduced.value) {
    phase.value = 'orbit'
  } else {
    const total = 2600 + logos.length * 120 + 200
    window.setTimeout(() => (phase.value = 'orbit'), total)
  }
  const listener = () => (prefersReduced.value = mq.matches)
  mq.addEventListener?.('change', listener)
  onUnmounted(() => mq.removeEventListener?.('change', listener))
})

defineExpose({ replay })
</script>

<template>
  <section id="top" class="relative h-screen w-full overflow-hidden gradient-soft">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 backdrop-blur-[2px]"></div>
    
    <div class="relative z-10 h-full w-full flex flex-col items-center justify-center">
      <div class="text-center max-w-2xl px-6">
        <h1 class="text-4xl md:text-6xl font-extralight tracking-tight text-slate-800">
          La sección de Inventario de las 7 Areas
        </h1>
        <p class="mt-4 text-slate-600">
          Siete disciplinas orbitando una visión. Hardware, software, redes, seguridad, IA, nube y diseño — en elegante armonía.
        </p>
      </div>

      <div class="mt-10">
        <div class="grid" :class="[mobileGridClass, 'sm:grid-cols-4 md:grid-cols-7 gap-6 sm:gap-8 justify-items-center']">
          <div 
            v-for="(logo, i) in logos" 
            :key="i" 
            class="flex flex-col items-center justify-center text-center p-2 group"
          >
            <a @click="scrollToSection(logo.id)" class="cursor-pointer">
              <img 
                :src="logo.url"
                :alt="logo.name + ' logo'"
                class="w-12 h-12 transition duration-500 ease-in-out filter brightness-50 group-hover:brightness-100"
              />
            </a>
            <span 
              class="mt-2 text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors duration-500"
            >
              {{ logo.name }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-6 flex justify-center">
      <a href="#areas" class="text-slate-500 text-sm hover:text-slate-700 transition-colors">Desplazar</a>
    </div>
  </section>
</template>

<style scoped>
[data-orbit] { transform-origin: center; }
</style>