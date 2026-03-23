<script setup>
import { useCartStore } from '../stores/cart';
const cart = useCartStore();
</script>


<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold m-8 text-gray-800">Tu Carrito</h1>
    
    <div v-if="cart.items.length === 0" class="text-center py-20 border-2 border-dashed rounded-xl">
      <p class="text-gray-500 text-xl">No hay productos en el carrito.</p>
      <router-link to="/" class="mt-4 inline-block text-blue-600 hover:underline">
        Volver a la tienda
      </router-link>
    </div>

    <div v-else>
      <div class="space-y-4">
        <div v-for="item in cart.items" :key="item.id" class="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white">
          <div class="flex items-center gap-4">
            <img :src="item.image" alt="Curso {{ item.name }}" class="w-16 h-16 object-cover rounded"/>
            <div>
              <h3 class="font-bold text-lg">{{ item.name }}</h3>
              <p class="text-gray-600 font-medium">{{ item.price }}€</p>
            </div>
          </div>
          <button
            @click="cart.removeFromCart(item.id)"
            class="text-red-500 hover:bg-red-50 px-3 py-1 rounded transition-colors">Eliminar</button>
        </div>
      </div>
      <div class="mt-10 p-6 bg-gray-50 rounded-xl border">
        <div class="flex justify-between items-center text-xl font-bold">
          <span>Total a pagar:</span>
          <span class="text-blue-600">{{ cart.totalPrice.toFixed(2) }}€</span>
        </div>
        <button class="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 shadow-md">Finalizar compra</button>
      </div>
    </div>
  </div>
</template>