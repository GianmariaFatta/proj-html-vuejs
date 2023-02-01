<script>
import { store } from "../store"
export default {
    name: 'CreateBlog',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center mt-5">
            <div v-for="(article, i) in store.articles" :key="i" class="col-4">
                <img class="img-fluid mb-4" :src="article.cover" alt="">
                <h4 class="mb-3">{{ article.title }}</h4>
                <address>by {{ article.author }}</address>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.row {
    height: 600px;
}
</style>