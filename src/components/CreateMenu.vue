<script>
import { store } from '../store'
export default {
    name: 'CreateMenu',
    data() {
        return {
            store,
            currentPage: 0,
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
        <li :class="{ 'active': i === currentPage }" v-for="(page, i) in store.pages" :key="i"><a href="#"
                @click="setCurrentPage(i)"><b>{{ page }}</b> </a></li>

    </ul>

</template>

<style scoped lang="scss">
@use '../assets/scss/variables' as*;

li {
    list-style-type: none;
    margin-top: 20px
}

a {
    text-decoration: none;
    color: black;
}

.active {
    border-bottom: 5px solid $sweet_pink;
}
</style>