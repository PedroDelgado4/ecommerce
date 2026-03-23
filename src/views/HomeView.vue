<script setup lang="ts">
import { useCartStore } from '../stores/cart';

const cart = useCartStore();

// Simulacion de DB de cursos
const products = [
    { id: 1, name: 'Curso Vue', price: 49.99, image: 'https://placehold.co/300x200?text=Vue+3' },
    { id: 2, name: 'Pinia Masterclass', price: 29.99, image: 'https://placehold.co/300x200?text=Pinia'},
    { id: 3, name: 'Tailwind para Pros', price: 34.99, image: 'https://placehold.co/300x200?text=Tailwind' },
    { id: 4, name: 'Typescript Avanzado', price: 54.99, image: 'https://placehold.co/300x200?text=TypeScript' }
]

</script>

<template>
    <div class="p-8">
        <header class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800">Cursos disponibles</h1>
            <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                Productos en el carrito: {{ cart.totalItems }} | Precio total: {{ cart.totalPrice }}
            </div>
        </header>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
                v-for="product in products"
                :key="product.id"
                class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img :src="product.image" alt="Curso {{ product.name }}" class="w-full h-48 object-cover"/>

                <div class="p-4">
                    <h2 class="text-xl font-semibold">{{ product.name }}</h2>
                    <p class="text-gray-600 mt-2">{{ product.price }}</p>
                    <button 
                        @click="cart.addToCart(product)"
                        class="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue transition-colors">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>