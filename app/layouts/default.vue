<template>
  <div>
    <a class="skip" href="#main">Vai al contenuto</a>
    <AppHeader />
    <main id="main" tabindex="-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
