import { onMounted, onUnmounted, ref } from 'vue'

export function useCenterActivation(elRef: { value: HTMLElement | null }, offsetRatio = 0.2) {
  const active = ref(false)
  const handler = () => {
    const el = elRef.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const viewportCenter = window.innerHeight / 2
    const elementCenter = rect.top + rect.height / 2
    const distance = Math.abs(elementCenter - viewportCenter)
    const activateDistance = window.innerHeight * offsetRatio
    active.value = distance < activateDistance
  }

  onMounted(() => {
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handler)
    window.removeEventListener('resize', handler)
  })

  return { active }
}
