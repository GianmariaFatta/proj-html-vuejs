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
            <div v-for="(article, i) in store.articles" :key="i" class="col-4 ">
                <img class="img-fluid mb-4 " :src="article.cover" alt="">
                <h4 class="mb-3">{{ article.title }}</h4>
                <address>by {{ article.author }}</address>
                <div class="flag">
                    <div id="flag-top" class="d-flex justify-content-center align-items-center">
                        <h1>{{ article.day }}</h1>
                    </div>
                    <div id="flag-down" class="text-center">{{ article.month_year }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.row {
    height: 600px;
}

.col-4 {
    position: relative;

}

.col-4:hover img {}

.flag {
    position: absolute;
    bottom: 330px;
    left: 40px
}

#flag-top {
    width: 70px;
    height: 65px;
    background-color: #C0E1CF;
}

#flag-down {
    width: 70px;
    height: 85px;
    background-color: #F3D0C7;
    clip-path: polygon(50% 30%, 100% 40%, 100% -100%, -50% 50%);
}
</style>