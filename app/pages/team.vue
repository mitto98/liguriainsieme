<script setup lang="ts">
import { guida, coordinamento, territori } from '~/data/site'
useHead({ title: 'Il team · Liguria Insieme' })
</script>

<template>
  <div>
    <section class="page-head">
      <div class="wrap">
        <h1>Il <em>team</em></h1>
        <p>Il coordinamento regionale e i responsabili sui territori, da Ponente a Levante.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="label">Guida del movimento</p>
        <ul class="leaders">
          <li v-for="p in guida" :key="p.nome">
            <p class="role">{{ p.ruolo }}</p>
            <p class="name">{{ p.nome }}</p>
            <p>{{ p.nota }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section" style="padding-top: 0">
      <div class="wrap">
        <p class="label">Coordinamento regionale</p>
        <ul class="roster">
          <li v-for="p in coordinamento" :key="p.nome">
            <strong>{{ p.nome }}</strong>
            <span v-if="p.nota">{{ p.nota }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section section--navy">
      <div class="wrap">
        <p class="label">Coordinatori territoriali</p>
        <ul class="roster" style="column-count: 1; columns: 1">
          <li v-for="t in territori" :key="t.area" style="display: grid; grid-template-columns: minmax(10rem, 16rem) 1fr; gap: 1rem; border-color: rgb(255 255 255 / 0.25)">
            <span style="font-family: var(--display); font-size: 1.7rem; color: var(--orange); text-transform: uppercase; letter-spacing: 0.04em; line-height: 1.1">{{ t.area }}</span>
            <strong style="color: #fff; font-size: 1.15rem">{{ t.nome }}</strong>
          </li>
        </ul>
        <p style="margin-top: 1.5rem; color: var(--sky)">Ulteriori incarichi saranno assegnati nelle prossime settimane.</p>
      </div>
    </section>
  </div>
</template>
