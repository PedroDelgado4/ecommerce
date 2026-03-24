<script setup>
import Navbar from './components/Navbar.vue';
</script>


<template>
  <div class="min-h-screen bg-stone-50 font-sans antialiased text-stone-900">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>