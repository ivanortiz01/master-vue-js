const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola con Vue',
        frutas: ['Manzana', 'Pera', 'Platano'],
        frutasObj: [
            { nombre: 'Pera', cantidad: 10 },
            { nombre: 'Manzana', cantidad: 8 },
            { nombre: 'Platano', cantidad: 5 },
            { nombre: 'Fresa', cantidad: 0 }
        ],
        nuevaFruta: "",
        totalFrutas: 0
    },
    methods: {
        agregarFruta() {
            if (this.nuevaFruta.length > 0) {
                this.frutas.push(this.nuevaFruta);

                this.frutasObj.push({
                    nombre: this.nuevaFruta,
                    cantidad: 0
                });

                this.nuevaFruta = "";
            }
        }
    },
    computed: {
        sumarFrutas() {
            this.totalFrutas = 0;
            for (fruta of this.frutasObj) {
                this.totalFrutas += fruta.cantidad;
            }
            return this.totalFrutas;
        }
    }
});