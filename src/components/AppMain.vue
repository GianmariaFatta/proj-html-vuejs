<script>
import { store } from '../store'
import CreateCard from './CreateCard.vue';
import CreateBlog from './CreateBlog.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            isVisible: false,
            store,
            phases: [{
                icon: "fa-solid fa-lightbulb fa-2xl fs-1",
                title: "First theres an idea",
                paragraph: "Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.",
            },
            {
                icon: "fa-regular fa-comment fa-2xl fs-1",
                title: "Then we talk about",
                paragraph: "Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.",
            },
            {
                icon: "fa-solid fa-cloud fa-2xl fs-1",
                title: "And we think about",
                paragraph: "Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.",
            },
            {
                icon: "fa-solid fa-pen-ruler fa-2xl fs-1",
                title: "So we draw along",
                paragraph: "Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.",
            },
            ]
        }
    },
    methods: {
        goToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        // onScroll() {
        //     this.isVisible = window.scrollY >50
        // }
    },
    components: { CreateCard, CreateBlog },
}
</script>

<template>
    <div class="container-fluid p-0">
        <div class="row d-flex justify-content-center align-items-center m-0">
            <CreateCard v-for="(card, i) in store.cardsMain" :key="i" :card="card" />
        </div>
    </div>
    <div class="container">
        <div class="process-box">
            <h2>Working <b><i>process</i></b></h2>
            <div class="row work-process d-flex justify-content-bewtween align-items-center ">
                <div v-for="(phase, i) in phases" :key="i"
                    class="col-3 text-center d-flex flex-column align-items-center d-flex flex-column align-items-center">
                    <div class="d-flex align-items-center justify-content-center mb-2">
                        <i :class="phase.icon"></i>
                    </div>
                    <h4>{{ phase.title }}</h4>
                    <p>{{ phase.paragraph }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="recruiting text-center d-flex align-items-center">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <h2>Want to work with us? Send us <b><i>a message!</i></b></h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil corrupti ipsum dicta voluptatem adipisci
                impedit amet hic optio repudiandae explicabo, eius officia quisquam quis dignissimos. Amet ipsam
                deleniti
                sint eveniet?</p>
            <button><a href="#">CONTACT</a></button>
        </div>
    </div>
    <CreateBlog />
    <!-- back to top bottom -->
    <div class="back-to-top d-flex align-items-center justify-content-center" @click="goToTop()">
        <i class="fa-solid fa-arrow-up"></i>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/variables' as*;

.back-to-top {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 40px;
    right: 60px;
    z-index: 2;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: $light-green;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;


}

.process-box {
    height: 500px;
}

.row {
    flex-wrap: wrap;
    height: auto;

}

.work-process {
    margin: 0 auto;
    padding: 10px;
    background-image: url(../assets/img/svg/svg-3.svg);
    background-repeat: no-repeat;
    background-position: 60px 23px;
    height: 250px;
}

h2 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 50px;
}

.col-3 {
    div {
        border-radius: 50%;
        height: 200px;
        width: 70%;
        background-color: $light-pink;
    }
}

.recruiting {
    height: 500px;
    background-image: url(../assets/img/h-2-background-1.jpg);

    button {
        background-color: $light-orange;
        width: 200px;
        height: 60px;
        font-weight: bolder;
        border: none;

        &:hover {
            background-color: $middle-pink;

            a {
                color: $my_white;
            }
        }
    }

    a {
        text-decoration: none;
        color: black;
    }
}

// color

.fa-lightbulb {
    color: $winter_sky;
}

.fa-comment {
    color: $money_gold;
}

.fa-cloud {
    color: $old_pink;
}

.fa-pen-ruler {
    color: $strong_orange
}
</style>