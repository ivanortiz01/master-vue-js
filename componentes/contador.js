Vue.component('contador', {
    template: ` 
    <div>
        <h3>Contador: {{numero}}</h3>
        <button @click="numero++">+</button>
    </div>
    `,
    data() {
        return {
            numero: 0
        }
    },
})