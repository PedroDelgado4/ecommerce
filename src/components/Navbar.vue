<script setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/cart';
import CartDrawer from './CartDrawer.vue'
const cart = useCartStore();
const isDrawerOpen = ref(false); //Estado para el drawer
</script>

<template>
  <nav class="bg-white/90 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <router-link to="/" class="text-2xl font-black text-emerald-600 tracking-tighter">
          EDU <span class="text-stone-900">STORE</span>
        </router-link>

        <div class="flex items-center gap-8">
          <router-link to="/" class="text-stone-600 hover:text-emerald-600 font-bold transition-colors">
            Tienda
          </router-link>

          <button 
            @click="isDrawerOpen = true" 
            class="relative group p-2 bg-stone-100 rounded-xl hover:bg-emerald-50 transition-all"
          >
            <span class="text-xl">🛒</span>
            <span v-if="cart.totalItems > 0" class="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
              {{ cart.totalItems }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <CartDrawer :isOpen="isDrawerOpen" @close="isDrawerOpen = false" />
</template>