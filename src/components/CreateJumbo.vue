<script>
export default {
    name: 'Jumbo',
    data() {

        return {
            currentIndex: 0,
            jumbos: [
                {
                    title: "Devotions that",
                    title2: "never",
                    specialTitle: "ends",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum non molestiaeasperiores porro?Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    imgA: "src/assets/img/h-2-slider-img-15.png",
                    imgB: "src/assets/img/h-2-slider-img-16.png",
                },
                {
                    title: "Together is",
                    title2: "",
                    specialTitle: "Better",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum non molestiaeasperiores porro?Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    imgA: "src/assets/img/h-2-slider-img-11.png",
                    imgB: "",
                },
                {
                    title: "The art of love with",
                    title2: "",
                    specialTitle: "Illustrations",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum non molestiaeasperiores porro?Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    imgA: "src/assets/img/short-slider-rev-1-img-3.png",
                    imgB: "",
                }
            ]
        }
    },
    methods: {
        setCurrentIndex(index) {
            this.currentIndex = index
        },
        goToNext() {
            this.currentIndex++
            if (this.currentIndex > this.jumbos.length - 1) {
                this.currentIndex = 0
            }
        },
        goToPrev() {
            this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = this.jumbos.length - 1
            }
        },
    },
};


</script>

<template>
    <div class="mt-5 d-flex align-items-center ">
        <!-- button right -->
        <div class="ms-5 prev" @click="goToPrev()"><i role="button" class="fa-solid fa-2xl fa-circle-arrow-left"></i>
        </div>
        <div class="container">
            <div class="row">

                <div v-for="(jumbo, i) in jumbos" class="d-flex  justify-content-center align-items-center">
                    <div v-if="i === currentIndex" class="d-flex  justify-content-center align-items-center">
                        <div class="col-6 d-flex flex-column align-item-center ms-5 me-5">
                            <h2>{{ jumbo.title }}
                                <span class="d-block">{{ jumbo.title2 }} <b><i>{{ jumbo.specialTitle }}</i></b></span>
                            </h2>
                            <p class="mt-3">{{ jumbo.text }}</p>
                            <button class="mt-3" type="submit">READ MORE</button>
                        </div>
                        <div class="col-6 d-flex justify-content-center p-3 ms-5">
                            <img class="" :src="jumbo.imgA" alt="">
                            <img class="" :src="jumbo.imgB" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center p-2">
                <i v-for="(ball, i) in jumbos" @click="setCurrentIndex(i)" class="fa-solid fa-xs fa-circle p-2"></i>
            </div>
        </div>
        <!-- button next -->
        <div @click="goToNext()" class="me-5 next"><i role="button" class="fa-solid fa-2xl fa-circle-arrow-right"></i>
        </div>

    </div>
</template>
<style scoped lang="scss">
@use '../assets/scss/variables' as*;

.row {
    height: 500px;
    width: 100%;
    // border: 2px dashed blue
}

.row .col-6 {
    // border: 2px dashed gold;
    height: 500px;

    h2 {
        font-size: 65px;
    }

    ;

    button {
        padding: 10px;
        border: 3px solid $sweet_pink;
        background-color: $my_white;
        font-size: 15px;
        width: 40%;

        &:hover {
            background-color: $light_orange;
            color: $my_white
        }
    }

}

.col-3 {
    // border: 2px solid green;
    height: 100%;

    img {
        width: 90%;
        object-fit: cover;
    }
}

.col-6 {
    height: 100%;

    img {
        width: 90%;
        object-fit: cover;
    }

    #guitar_img {
        margin-left: 80px;
        width: 60%;
        object-fit: cover;
    }
}

.prev,
.next {
    border: none;
    color: $sweet_pink;
    ;
}

.fa-circle {
    color: $sweet_pink;
    cursor: pointer
}

.view {
    display: flex;
}
</style>