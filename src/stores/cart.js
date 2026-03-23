import { defineStore } from "pinia"
import {ref, computed} from "vue"

export const useCartStore = defineStore("cart", () => {
    // 1. STATE: los datos
    const items = ref([])

    // 2. GETTERS: Datos derivados
    // Calculo de total de productos y precio automaticamente
    const totalItems = computed( () => items.value.length)
    const totalPrice = computed( () => items.value.reduce((acc, product) => acc + product.price, 0) )
    
    // 3. ACTIONS: Funciones para cambiar el estado (metodos)
    function addToCart(product) {
        items.value.push(product)
    }

    function removeFromCart(productId){
        items.value = items.value.filter(product => product.id !== productId)
    }

    return {
        items,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart
    }
})