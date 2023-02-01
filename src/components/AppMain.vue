<script>
import { store } from '../store'
import CreateCard from './CreateCard.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    components: { CreateCard },
}
</script>

<template>
    <div class="container-fluid p-0">
        <div class="row d-flex justify-content-center align-items-center">
            <CreateCard v-for="(card, i) in store.cardsMain" :key="card" :card="card" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.row {
    flex-wrap: wrap;
    height: auto;
}
</style>