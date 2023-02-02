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
        <button class="ms-5 prev" @click="goToPrev()"><i class="fa-solid fa-xl fa-circle-arrow-left"></i></button>
        <div class="container">
            <div class="row">

                <div v-for="(jumbo, i) in jumbos" class="d-flex  justify-content-center align-items-center">
                    <div v-if="i === currentIndex" class="d-flex  justify-content-center align-items-center">
                        <div class="col-6 d-flex flex-column align-item-center">
                            <h2>{{ jumbo.title }}
                                <span class="d-block">{{ jumbo.title2 }} <b><i>{{ jumbo.specialTitle }}</i></b></span>
                            </h2>
                            <p class="mt-3">{{ jumbo.text }}</p>
                            <button class="mt-3" type="submit">READ MORE</button>
                        </div>
                        <div class="col-6 d-flex justify-content-right">
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
        <button @click="goToNext()" class="me-5 next"><i class="fa-solid fa-xl fa-circle-arrow-right"></i></button>

    </div>
</template>
<style scoped lang="scss">
.row {
    height: 400px;
    width: 100%;
    // border: 2px dashed blue
}

.row .col-6 {
    // border: 2px dashed gold;

    height: 400px;

    h2 {
        font-size: 50px;
    }

    ;

    button {
        padding: 10px;
        border: 3px solid pink;
        background-color: #fff;
        font-size: 15px;
        width: 40%
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
    color: pink;
}

.fa-circle {
    color: pink;
    cursor: pointer
}

.view {
    display: flex;
}
</style>