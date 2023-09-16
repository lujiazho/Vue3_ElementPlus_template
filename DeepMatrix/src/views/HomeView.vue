<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="welcomeWarpper">
      <TheWelcome />
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .welcomeWarpper {
    display: flex; /* needed for align vertical */
    flex-direction: column; /* for flex to work on only vertical */
    min-height: 100vh;
    justify-content: center; /* align vertical */
    width: 800px;
  }
  main {
    flex: 1;
    display: flex;
    align-items: center; /* Center content vertically */
    justify-content: center; /* Center content horizontally */
  }
}
</style>