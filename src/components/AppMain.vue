<script>
import { store } from '../store'
import CreateCard from './CreateCard.vue';
export default {
    name: 'AppMain',
    data() {
        return {
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
    components: { CreateCard },
}
</script>

<template>
    <div class="container-fluid p-0">
        <div class="row d-flex justify-content-center align-items-center m-0">
            <CreateCard v-for="(card, i) in store.cardsMain" :key="card" :card="card" />
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
</template>

<style scoped lang="scss">
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
    background-size: contain;
    height: 250px;
}

h2 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 50px;
}

.col-12 {


    .card {
        padding: 20px;
        height: 400px;
    }
}

.col-3 {
    div {
        border-radius: 50%;
        height: 200px;
        width: 70%;
        background-color: #FAF7F1;
    }
}

// color

.fa-lightbulb {
    color: #BADAC9
}

.fa-comment {
    color: #F8D12D
}

.fa-cloud {
    color: #80465F
}

.fa-pen-ruler {
    color: #EB6950
}
</style>