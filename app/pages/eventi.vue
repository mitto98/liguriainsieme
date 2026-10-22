<script setup lang="ts">
import { stampa } from '~/data/site'
useHead({ title: 'Eventi e news · Liguria Insieme' })
</script>

<template>
  <div>
    <section class="page-head">
      <div class="wrap">
        <h1>Eventi <em>e news</em></h1>
        <p>Gli appuntamenti del movimento e cosa si è scritto di Liguria Insieme.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="label">Appuntamenti</p>
        <ol class="timeline">
          <li>
            <span class="when">Ottobre 2026</span>
            <div class="what">
              <h3>Assemblea costituente</h3>
              <p>La convention che segna l'avvio del movimento: presentazione del quadro dirigente definitivo e del progetto politico completo, con la call for action aperta a tutti coloro che vogliono aderire.</p>
              <span class="tbd">Data e luogo in aggiornamento</span>
            </div>
          </li>
        </ol>
        <p style="margin-top: 1.5rem">
          Vuoi essere avvisato? <NuxtLink to="/aderisci">Lascia i tuoi contatti</NuxtLink>.
        </p>
      </div>
    </section>

    <section class="section section--sky">
      <div class="wrap">
        <p class="label" style="color: var(--navy)">Rassegna stampa</p>
        <ul class="press">
          <li v-for="a in stampa" :key="a.url">
            <a :href="a.url" target="_blank" rel="noopener">
              <span class="src">{{ a.testata }}</span>
              <span class="t">{{ a.titolo }}</span>
              <span class="d">{{ a.data }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
