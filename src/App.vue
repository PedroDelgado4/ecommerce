<script setup>
import FloatingProfileButton from './components/FloatingProfileButton.vue';
import Navbar from './components/Navbar.vue';
</script>


<template>
  <div class="min-h-screen bg-stone-50 font-sans antialiased text-stone-900">
    <Navbar />
    <main>
      <router-view />
    </main>
    <FloatingProfileButton/>
  </div>
</template>