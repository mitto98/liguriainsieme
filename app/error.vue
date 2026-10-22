<script setup lang="ts">
defineProps<{ error: { statusCode?: number } }>()
</script>

<template>
  <NuxtLayout>
    <section class="page-head">
      <div class="wrap">
        <h1>Pagina <em>non trovata</em></h1>
        <p>L'indirizzo che cerchi non esiste o è stato spostato.</p>
        <p><NuxtLink class="btn" to="/" @click="clearError()">Torna alla home</NuxtLink></p>
      </div>
    </section>
  </NuxtLayout>
</template>
