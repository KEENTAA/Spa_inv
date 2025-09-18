<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import AreaCard from '@/components/AreaCard.vue'

const heroRef = ref<InstanceType<typeof Hero> | null>(null)
function replay() {
  heroRef.value?.replay()
}

const areas = [
  {
    id: 'hardware',
    title: 'Hardware',
    description:
      'Precision-built systems engineered for performance, reliability, and seamless integration.',
  },
  {
    id: 'software',
    title: 'Software',
    description:
      'Modern applications crafted with clean architecture, automation, and outstanding UX.',
  },
  {
    id: 'networking',
    title: 'Networking',
    description:
      'Low-latency, secure, and scalable networks that connect your world effortlessly.',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description:
      'Proactive defense with zero-trust strategies, continuous monitoring, and rapid response.',
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    description:
      'From data pipelines to intelligent systems — actionable insights at every step.',
  },
  {
    id: 'cloud-systems',
    title: 'Cloud Systems',
    description:
      'Resilient, automated infrastructure across clouds with observability and cost control.',
  },
  {
    id: 'design-ux',
    title: 'Design & UX',
    description:
      'Minimal, elegant interfaces focused on clarity, accessibility, and delight.',
  },
]
</script>

<template>
  <div class="relative">
    <Navbar @replay="replay" />
    <main>
      <Hero ref="heroRef" />

      <div id="areas" />
      <section class="py-20">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-center text-3xl md:text-4xl font-extralight text-slate-800">
            Seven areas. One orbit.
          </h2>
          <p class="text-center mt-3 text-slate-600">
            Explore how each discipline powers the whole.
          </p>
        </div>
      </section>

      <section class="mb-20">
        <div class="grid gap-8">
          <AreaCard
            v-for="(a, idx) in areas"
            :key="a.id"
            :id="a.id"
            :title="a.title"
            :description="a.description"
            :align="idx % 2 === 0 ? 'left' : 'right'"
            :is-mobile="true"
          />
        </div>
      </section>

      <footer class="py-16">
        <div class="max-w-6xl mx-auto px-4 text-center text-slate-500">
          © {{ new Date().getFullYear() }} HAGEN Co. All rights reserved.
        </div>
      </footer>
    </main>
  </div>
</template>
