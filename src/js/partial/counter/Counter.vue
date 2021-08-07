<template>
    <div>
        <div>Count: {{ count }}</div>
        <div>Double count: {{ doubleCount }}</div>
        <button @click="increment">Increment count</button>
    </div>
</template>

<script>

    export default {
        computed: {
            count() {
                return this.$store.state.counter.count
            },
            doubleCount() {
                return this.$store.getters.doubleCount
            }
        },
        methods: {
            increment() {
                this.$store.commit('increment')
            }
        }
    }

</script>