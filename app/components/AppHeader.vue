<script setup lang="ts">
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
const links = [
  { to: '/chi-siamo', label: 'Chi siamo' },
  { to: '/team', label: 'Il team' },
  { to: '/eventi', label: 'Eventi e news' },
]
</script>

<template>
  <header class="site-header">
    <div class="wrap">
      <NuxtLink to="/" class="brand" aria-label="Liguria Insieme, home">
        <LogoMark />
        <span class="brand-name">Liguria Insieme<small>la nuova esperienza civica</small></span>
      </NuxtLink>
      <button class="menu-btn" type="button" :aria-expanded="open" aria-controls="menu" @click="open = !open">
        {{ open ? 'Chiudi' : 'Menu' }}
      </button>
      <nav id="menu" class="nav" :class="{ 'is-open': open }" aria-label="Principale">
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</NuxtLink>
        <NuxtLink to="/aderisci" class="nav-cta">Aderisci</NuxtLink>
      </nav>
    </div>
  </header>
</template>
