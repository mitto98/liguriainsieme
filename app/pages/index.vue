<script setup lang="ts">
import { movimento, valori, territori, liste } from '~/data/site'
useHead({ title: 'Liguria Insieme · la nuova esperienza civica' })
</script>

<template>
  <div>
    <section class="hero">
      <LigSilhouette class="hero-art" />
      <div class="wrap">
        <h1 class="hero-title"><span>Liguria</span><span>Insieme</span></h1>
        <p class="hero-tag">{{ movimento.sottotitolo }}</p>
        <div class="hero-body">
          <div>
            <p>{{ movimento.definizione }}</p>
            <p class="hero-sign">— {{ movimento.coordinatore }}, Coordinatore regionale</p>
          </div>
          <NuxtLink class="btn" to="/aderisci">Aderisci al movimento</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap split">
        <div>
          <p class="label">Il movimento</p>
          <h2 class="h-lg">Una casa aperta per chi fa</h2>
        </div>
        <div>
          <p class="lead">
            Liguria Insieme mette in rete esperienze, competenze e amministratori delle liste civiche liguri, senza cancellarne le identità: le rende più forti, coordinate e riconoscibili.
          </p>
          <p>
            Un movimento regionale, strutturato su tutto il territorio e aperto a chi vuole contribuire. L'obiettivo è regionale: presentarsi alle prossime amministrative con un unico nome, un unico simbolo, un'unica identità.
          </p>
          <p><NuxtLink class="link-arrow" to="/chi-siamo">Leggi la storia del movimento →</NuxtLink></p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0">
      <div class="wrap">
        <p class="label">I nostri valori</p>
        <ol class="values">
          <li v-for="(v, i) in valori" :key="v.nome">
            <span class="n">0{{ i + 1 }}</span>
            <span class="v">{{ v.nome }}</span>
            <p>{{ v.testo }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section section--navy">
      <div class="wrap">
        <p class="label">Sul territorio</p>
        <h2 class="h-lg">Da Ventimiglia<br />a La Spezia</h2>
        <p class="coast-ends" aria-hidden="true"><span>Ponente</span><span>Levante</span></p>
        <ol class="coast">
          <li v-for="t in territori" :key="t.area">
            <p class="area">{{ t.area }}</p>
            <p class="who">{{ t.nome }}<br /><span style="font-size: 0.85rem; color: var(--sky)">Coordinatore territoriale</span></p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section section--sky">
      <div class="wrap">
        <p class="label" style="color: var(--navy)">Hanno già aderito</p>
        <ul class="liste">
          <li v-for="l in liste" :key="l">{{ l }}</li>
        </ul>
      </div>
    </section>

    <section class="section section--blue">
      <div class="wrap cta">
        <div>
          <p class="next">Prossimo appuntamento</p>
          <h2 class="h-xl">Assemblea costituente</h2>
          <p style="margin-top: 1.5rem">
            Ottobre 2026. Saranno presentati il quadro dirigente definitivo e il progetto politico completo. Data e luogo saranno pubblicati qui.
          </p>
        </div>
        <div>
          <p>Cittadini, amministratori, professionisti, associazioni: la chiamata è per tutti.</p>
          <NuxtLink class="btn" to="/aderisci">Unisciti a noi</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
