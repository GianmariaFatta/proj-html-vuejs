<script>

export default {
    name: 'CreateCard',
    props: {
        card: Object
    }
}
</script>

<template>
    <div class="col-4 p-0">
        <div class="card p-0 rounded-0">
            <img class="img-fluid position-relative" :src="card.img" alt="">
            <div class="mini-banner p-3 ps-4 ">
                <h5>{{ card.title }}</h5>
                <P><i> {{ card.subtitle }} </i>
                </P>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/variables' as*;

.col-4 {
    height: 650px;
    // border: 2px dashed orange
}

.card {
    width: 100%;
    height: 100%;


    img {
        width: 100%;
        height: 100%;
    }
}

.mini-banner {
    display: none;
    position: absolute;
    top: 45%;
    left: 0;
    width: 45%;
    height: 15%;
    background-color: $my_white;
}

.card:hover .mini-banner {
    display: block;

}
</style>