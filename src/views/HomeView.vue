<script setup lang="ts">
import { useCartStore } from '../stores/cart';

const cart = useCartStore();

</script>

<template>
    <div class="p-8">
        <h1 class="text-3xl font-bold text-blue-600">Tienda de cursos online</h1>
        <p class="mt-4">Productos del carrito: {{cart.totalItems}}</p>
        <button 
        @click="cart.addToCart({id: 1, name: 'Curso Vue', price: 50})" 
        class="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">Comprar</button>
    </div>

</template>