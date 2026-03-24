<script setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/cart';

const cart = useCartStore();

// Estado reactivo para controlar la visibilidad del modal de aviso
const showCheckoutModal = ref(false);
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
        
        <button 
          @click="showCheckoutModal = true"
          class="w-full mt-4 bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all transform active:scale-95"
        >
          Finalizar compra
        </button>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showCheckoutModal" class="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div @click="showCheckoutModal = false" class="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"></div>
          
          <div class="relative bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center border border-stone-100">
            <div class="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
              🚀
            </div>
            <h3 class="text-2xl font-black text-stone-900 mb-2 italic tracking-tight">¡Gracias por explorar!</h3>
            <p class="text-stone-500 mb-8 leading-relaxed">
              Esta es una <strong>web de demostración técnica</strong>. No hay una pasarela de pago real implementada, por lo que no se ha realizado ningún cargo ni transacción.
            </p>
            <button 
              @click="showCheckoutModal = false"
              class="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-lg"
            >
              Entendido, volver
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
/* Animación suave para el Modal */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>