<script setup>
import { useCartStore } from '../stores/cart';
// Definimos los eventos que el componente puede emitir (para cerrar el drawer)
defineProps(['isOpen'])
const emit = defineEmits(['close'])
const cart = useCartStore();
</script>

<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div v-if="isOpen" class="fixed inset-0 z-[100] flex justify-end">
        
        <div 
          @click="emit('close')" 
          class="fixed inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
        ></div>

        <div class="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-stone-200">
          
          <div class="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
            <h2 class="text-xl font-black text-stone-900 uppercase tracking-tighter">Tu Carrito</h2>
            <button @click="emit('close')" class="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500 font-bold">
              ✕
            </button>
          </div>

          <div class="flex-grow overflow-y-auto p-6 space-y-4">
            <div v-if="cart.items.length === 0" class="text-center py-10 text-stone-400 font-medium">
              El carrito está vacío 🍃
            </div>
            
            <div v-for="item in cart.items" :key="item.id" class="flex gap-4 p-3 rounded-xl border border-stone-100 hover:border-emerald-200 transition-colors">
              <img :src="item.image" class="w-16 h-16 object-cover rounded-lg shadow-sm" />
              <div class="flex-grow">
                <h4 class="text-sm font-bold text-stone-900 leading-tight">{{ item.name }}</h4>
                <p class="text-emerald-600 font-black text-sm">{{ item.price.toFixed(2) }}€</p>
              </div>
              <button @click="cart.removeFromCart(item.id)" class="text-stone-300 hover:text-red-500 transition-colors">
                ✕
              </button>
            </div>
          </div>

          <div class="p-6 border-t border-stone-100 bg-stone-50">
            <div class="flex justify-between items-center mb-6">
              <span class="text-stone-500 font-bold">Total estimado</span>
              <span class="text-2xl font-black text-emerald-600 tracking-tighter">{{ cart.totalPrice.toFixed(2) }}€</span>
            </div>
            <router-link 
              to="/carrito" 
              @click="emit('close')"
              class="block w-full bg-emerald-600 text-white text-center py-4 rounded-2xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all active:scale-95"
            >
              Ir al Checkout
            </router-link>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Clases de animación de VUE */
.drawer-enter-active, .drawer-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
/* El panel entra desde la derecha (100% de su ancho) */
.drawer-enter-form, .drawer-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

</style>