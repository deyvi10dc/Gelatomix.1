// Crear objeto; propiedades(nuevaFruta, frutas, cantidad y totalFrutas)
// methods: para agregarFruta() para agregar y dejar en blanco la caja del input
// computed: para definir operación con propiedades se encargará de sumar todas las frutas.

const {createApp} = Vue 
createApp({
    data(){
        return{
            nuevaTopping:"",
            cantidad:"",
            toppings:[],
            totalToppings:""
        }
    },
    methods:{
        agregarTopping(){
            this.topppings.push({nombre:this.nuevaTopping,cantidad:this.cantidad})
            console.log("Array:", this.toppings);
            this.nuevaTopping =""
            this.cantidad =""
        }
    },
    computed:{
        sumarCantidades(){
            this.totalToppings=0
            for(topping of this.topppings){
                this.totalToppings += topping.cantidad
            }
            return this.totalToppings
        }

    }
}).mount("#compras1")