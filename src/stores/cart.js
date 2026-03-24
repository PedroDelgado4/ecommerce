import { defineStore } from "pinia"
import {ref, computed, watch} from "vue"

export const useCartStore = defineStore("cart", () => {
    // 1. STATE: los datos
    // Intentamos cargar datos previos del carrito
    const savedCart = localStorage.getItem("cart")
    // Si hay datos, los pasamos de JSON a Array, si no, un array vacio
    const items = ref(savedCart ? JSON.parse(savedCart) : [])

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

    // 3. WATCHER: Vigilamos el array 'items'
    // Cada vez que cambie, lo guardamos en localStorage convertido a texto (JSON)
    watch(items, (newItems) => {
        localStorage.setItem("cart", JSON.stringify(newItems))
    }, { deep: true }) // 'deep: true' es vital para vigilar cambios DENTRO del array

    return {
        items,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart
    }
})