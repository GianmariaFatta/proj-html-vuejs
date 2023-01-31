<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
            currentPage: "0"
        }

    }, methods: {
        setCurrentPage(index) {
            this.currentPage = index
        }
    }
}
</script>
<template>
    <ul class="d-flex align-items-center justify-content-between">
        <a :class="{ 'active': i === currentPage }" v-for="(page, i) in store.pages" :key="i" href="#"
            @click="setCurrentPage(i)">
            <li><b>{{ page }}</b></li>
        </a>
    </ul>

</template>

<style scoped>
a {
    text-decoration: none;
    list-style-type: none;
    color: black;
    margin-top: 20px
}

.active {
    border-bottom: 2px solid pink;
}
</style>