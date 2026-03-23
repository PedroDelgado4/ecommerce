<script setup>
import { useCartStore } from '../stores/cart';

const cart = useCartStore();
</script>

<template>
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <router-link to="/" class="text-2xl font-black text-blue-600 tracking-tighter">
                    EDU <span class="text-gray-900">STORE</span>
                </router-link>
                <div class="flex items-center gap-8">
                    <router-link to="/" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                        Tienda
                    </router-link>
                    <router-link to="/carrito" class="relative group p-2 bg-gray-100 rounded-full hover:bg-blue-50 transition-all">
                        <span class="text-xl">🛒</span>
                        <span 
                        v-if="cart.totalItems > 0"
                        class="absolute -top-1 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce"
                        >
                        {{ cart.totalItems }}
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>