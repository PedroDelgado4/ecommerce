<template>
  <nav class="p-4 bg-gray-800 text-white flex gap-4">
    <router-link to="/" class="hover:text-blue-400">Tienda</router-link>
    <router-link to="/carrito" class="hover:text-blue-400">Carrito</router-link>
  </nav>
  
  <router-view />
</template>