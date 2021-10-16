const app = Vue.createApp({
    // template: "<h1>VUE GRUPO 41</H1>"

    methods: {
        incNumero() {
            console.log("evento");
            this.numero = this.numero + 1;
        },
        disNumero() {
            this.numero = this.numero - 1;
        },
        ocultar() {
            this.mostrarPokemons = !this.mostrarPokemons; //el not logico ! -->

        },

    },
});
app.mount("#grupo41");
