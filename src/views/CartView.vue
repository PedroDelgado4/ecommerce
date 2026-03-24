<script setup>
import { useCartStore } from '../stores/cart';
const cart = useCartStore();
</script>

<template>
  <div class="p-8 max-w-4xl mx-auto min-h-screen">
    <h1 class="text-3xl font-black mb-10 text-stone-900 tracking-tight text-center md:text-left">Tu Carrito</h1>
    
    <div v-if="cart.items.length === 0" class="text-center py-20 border-2 border-dashed border-stone-200 rounded-3xl bg-white">
      <p class="text-stone-400 text-xl font-medium">Tu carrito está esperando nuevos cursos.</p>
      <router-link to="/" class="mt-6 inline-block bg-stone-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-stone-800 transition-all shadow-lg">
        Volver a la tienda
      </router-link>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-4">
        <div v-for="item in cart.items" :key="item.id" class="flex items-center justify-between p-4 border border-stone-200 rounded-2xl shadow-sm bg-white">
          <div class="flex items-center gap-4">
            <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-xl"/>
            <div>
              <h3 class="font-bold text-stone-900 leading-tight">{{ item.name }}</h3>
              <p class="text-emerald-600 font-black text-lg">{{ item.price.toFixed(2) }}€</p>
            </div>
          </div>
          <button
            @click="cart.removeFromCart(item.id)"
            class="text-stone-400 hover:text-red-500 p-2 transition-colors font-bold text-xl"
          >
            ✕
          </button>
        </div>
      </div>

      <div class="h-fit p-6 bg-white rounded-3xl border border-stone-200 shadow-sm">
        <h2 class="text-lg font-bold text-stone-900 mb-4">Resumen de compra</h2>
        <div class="flex justify-between items-center text-stone-600 mb-2">
           <span class="text-sm font-medium">Subtotal</span>
           <span class="font-bold">{{ cart.totalPrice.toFixed(2) }}€</span>
        </div>
        <div class="border-t border-stone-100 my-4 pt-4 flex justify-between items-center text-xl">
          <span class="font-bold text-stone-900">Total:</span>
          <span class="text-emerald-600 font-black tracking-tighter">{{ cart.totalPrice.toFixed(2) }}€</span>
        </div>
        <button class="w-full mt-4 bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all transform active:scale-95">
          Finalizar compra
        </button>
      </div>
    </div>
  </div>
</template>