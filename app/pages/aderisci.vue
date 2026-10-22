<script setup lang="ts">
import { contatti } from '~/data/site'
useHead({ title: 'Aderisci · Liguria Insieme' })

type Stato = 'idle' | 'invio' | 'ok' | 'errore' | 'manuale'
const stato = ref<Stato>('idle')
const form = reactive({ nome: '', cognome: '', comune: '', email: '', telefono: '', profilo: 'Cittadino', messaggio: '', consenso: false })

const profili = ['Cittadino', 'Amministratore locale', 'Professionista', 'Associazione', 'Altro']

function righe() {
  return [
    `Nome: ${form.nome} ${form.cognome}`,
    `Comune: ${form.comune}`,
    `Email: ${form.email}`,
    `Telefono: ${form.telefono || '-'}`,
    `Profilo: ${form.profilo}`,
    '',
    form.messaggio,
  ].join('\n')
}

async function invia() {
  if (contatti.formEndpoint) {
    stato.value = 'invio'
    try {
      const res = await fetch(contatti.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form }),
      })
      stato.value = res.ok ? 'ok' : 'errore'
    } catch {
      stato.value = 'errore'
    }
  } else if (contatti.email) {
    const oggetto = encodeURIComponent('Adesione a Liguria Insieme')
    window.location.href = `mailto:${contatti.email}?subject=${oggetto}&body=${encodeURIComponent(righe())}`
    stato.value = 'ok'
  } else {
    stato.value = 'manuale'
  }
}
</script>

<template>
  <div>
    <section class="page-head">
      <div class="wrap">
        <h1>Aderisci <em>a Liguria Insieme</em></h1>
        <p>La call for action è aperta a cittadini, amministratori, professionisti e associazioni. Lascia i tuoi dati: ti ricontatteremo il prima possibile.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap split">
        <form class="form" @submit.prevent="invia">
          <div>
            <label for="nome">Nome</label>
            <input id="nome" v-model="form.nome" required autocomplete="given-name" />
          </div>
          <div>
            <label for="cognome">Cognome</label>
            <input id="cognome" v-model="form.cognome" required autocomplete="family-name" />
          </div>
          <div>
            <label for="comune">Comune di residenza</label>
            <input id="comune" v-model="form.comune" required autocomplete="address-level2" />
          </div>
          <div>
            <label for="profilo">Chi sei</label>
            <select id="profilo" v-model="form.profilo">
              <option v-for="p in profili" :key="p">{{ p }}</option>
            </select>
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" required autocomplete="email" />
          </div>
          <div>
            <label for="tel">Telefono <span class="hint">(facoltativo)</span></label>
            <input id="tel" v-model="form.telefono" type="tel" autocomplete="tel" />
          </div>
          <div class="full">
            <label for="msg">Vuoi dirci qualcosa? <span class="hint">(facoltativo)</span></label>
            <textarea id="msg" v-model="form.messaggio" />
          </div>
          <div class="full">
            <label class="check" for="consenso">
              <input id="consenso" v-model="form.consenso" type="checkbox" required />
              <span>Acconsento al trattamento dei dati personali per essere contattato in merito a Liguria Insieme.</span>
            </label>
          </div>
          <div class="full">
            <button class="btn btn--navy" type="submit" :disabled="stato === 'invio'">
              {{ stato === 'invio' ? 'Invio in corso…' : 'Invia adesione' }}
            </button>
          </div>
          <div class="full" aria-live="polite">
            <p v-if="stato === 'ok'" class="notice notice--ok">Grazie! La tua adesione è stata inviata.</p>
            <p v-else-if="stato === 'errore'" class="notice">Non è stato possibile inviare il modulo. Riprova tra poco.</p>
            <p v-else-if="stato === 'manuale'" class="notice">Le adesioni online saranno attivate a breve. Riprova a breve.</p>
          </div>
        </form>

        <div>
          <p class="label">Chi può aderire</p>
          <ul class="aside-list">
            <li><strong>Cittadini</strong>Chi vuole partecipare alla vita civile senza identificarsi in un partito.</li>
            <li><strong>Amministratori</strong>Chi lavora ogni giorno sulla concretezza nei comuni e nei municipi.</li>
            <li><strong>Professionisti</strong>Chi porta competenze ed esperienza al servizio della Liguria.</li>
            <li><strong>Associazioni</strong>Realtà della società civile che condividono i nostri valori.</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
