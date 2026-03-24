<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import { ref, computed } from 'vue'
const cart = useCartStore();

// Simulacion de DB de cursos
const products = [
  { 
    id: 1, 
    name: 'Vue 3 Pro: Composition API', 
    price: 49.99, 
    category: 'Cursos',
    description: 'Domina el framework más moderno con proyectos reales y arquitectura limpia.',
    duration: 25,
    image: 'https://placehold.co/300x200/059669/ffffff?text=Vue+3+Pro' 
  },
  { 
    id: 2, 
    name: 'Tailwind CSS desde cero', 
    price: 35.00, 
    category: 'Cursos',
    description: 'Aprende a diseñar interfaces increíbles sin salir de tu HTML.',
    duration: 15,
    image: 'https://placehold.co/300x200/059669/ffffff?text=Tailwind' 
  },
  { 
    id: 3, 
    name: 'Mentoría 1-to-1 Frontend', 
    price: 80.00, 
    category: 'Mentorías',
    description: 'Sesión personalizada de 1 hora para revisar tu código y carrera profesional.',
    duration: 1,
    image: 'https://placehold.co/300x200/1c1917/ffffff?text=Mentoria+FE' 
  },
  { 
    id: 4, 
    name: 'Certificación Oficial Pinia', 
    price: 120.00, 
    category: 'Certificaciones',
    description: 'Examen y certificado oficial que avala tus conocimientos en estado global.',
    duration: 10,
    image: 'https://placehold.co/300x200/059669/ffffff?text=Cert+Pinia' 
  },
  { 
    id: 5, 
    name: 'Scrum Master Essentials', 
    price: 65.00, 
    category: 'Metodologías',
    description: 'Aprende a gestionar equipos ágiles y ceremonias de alta productividad.',
    duration: 20,
    image: 'https://placehold.co/300x200/78716c/ffffff?text=Scrum' 
  },
  { 
    id: 6, 
    name: 'Kanban para Desarrolladores', 
    price: 40.00, 
    category: 'Metodologías',
    description: 'Optimiza el flujo de trabajo de tu equipo y elimina cuellos de botella.',
    duration: 12,
    image: 'https://placehold.co/300x200/78716c/ffffff?text=Kanban' 
  }
];
// FILTROS
const searchQuery = ref('');
const selectedCategory = ref('Todos')

// Categorias de los botones
const categories = ['Todos', 'Cursos', 'Mentorías', 'Certificaciones', 'Metodologías'];

const filteredProducts = computed(() => {
    return products.filter((product) => {
        const matchesCategory = selectedCategory.value === 'Todos' || product.category === selectedCategory.value;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
        return matchesCategory && matchesSearch;
    })

})
</script>

<template>
  <div class="p-8 bg-stone-50 min-h-screen">
    <header class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-black text-stone-900 tracking-tight">Explorar Contenido</h1>
      <div class="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-bold text-sm">
        🛒 {{ cart.totalItems }} Items | Total: {{ cart.totalPrice.toFixed(2) }}€
      </div>
    </header>
    <div class="mb-10 space-y-6">
        <div class="relative max-w-md">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-stone-400">🔍</span>
            <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Buscar por nombre..." 
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            />
        </div>
        <div class="flex flex-wrap gap-2">
            <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
                'px-5 py-2 rounded-full font-bold text-sm transition-all',
                selectedCategory === cat 
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-100' 
                : 'bg-white text-stone-600 border border-stone-200 hover:border-emerald-400'
            ]"
            >
                {{ cat }}
            </button>
        </div>
    </div>
    <!--- Lista de productos --->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col"
      >
        <div class="relative overflow-hidden flex-shrink-0">
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"/>
          <span class="absolute top-2 right-2 bg-stone-900/80 text-white text-[10px] px-2 py-1 rounded font-bold backdrop-blur-sm">
            {{ product.category }}
          </span>
        </div>

        <div class="p-5 flex-grow flex flex-col">
          <div class="mb-3 flex-shrink-0">
            <h2 class="text-lg font-bold text-stone-900 leading-tight h-12 line-clamp-2">{{ product.name }}</h2>
            <p class="text-emerald-600 font-black text-xl mt-1">{{ product.price.toFixed(2) }}€</p>
          </div>
          
          <p class="text-stone-500 text-xs line-clamp-2 mb-4 leading-relaxed">
            {{ product.description }}
          </p>

          <div class="flex items-center text-stone-400 text-[11px] font-semibold uppercase tracking-wider mb-5">
            <span>⏱️ {{ product.duration }} horas</span>
          </div>

          <button 
            @click="cart.addToCart(product)"
            class="w-full mt-auto bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 active:scale-95 transition-all shadow-lg shadow-emerald-100">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  </div>
</template>