<script setup lang="ts">
import { territori } from '~/data/site'
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <p class="footer-big">Liguria <em>Insieme</em></p>
          <p>Movimento civico regionale. Da Ventimiglia a La Spezia.</p>
        </div>
        <div>
          <h2>Il sito</h2>
          <ul>
            <li><NuxtLink to="/chi-siamo">Chi siamo</NuxtLink></li>
            <li><NuxtLink to="/team">Il team</NuxtLink></li>
            <li><NuxtLink to="/eventi">Eventi e news</NuxtLink></li>
            <li><NuxtLink to="/aderisci">Aderisci</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h2>Sul territorio</h2>
          <ul>
            <li v-for="t in territori" :key="t.area">{{ t.area }}</li>
          </ul>
        </div>
      </div>
      <p class="legal">© 2026 Liguria Insieme. Sito ufficiale del movimento.</p>
    </div>
  </footer>
</template>
