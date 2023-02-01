<script>

export default {
    name: 'CreateCard',
    props: {
        card: String
    }
}
</script>

<template>
    <div class="col-4 p-0">
        <div class="card p-0">
            <img class="img-fluid" :src="card" alt="">
        </div>
    </div>
</template>

<style scoped lang="scss">
.col-4 {
    height: 600px;
    border: 2px dashed orange
}

.card {
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>