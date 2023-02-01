<script>
export default {
    name: 'Jumbo'
}
</script>

<template>
    <div class="mt-5 d-flex align-items-center ">
        <button class="ms-5 prev"><i class="fa-solid fa-xl fa-circle-arrow-left"></i></button>
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-6 ">
                    <h2>Devotions that
                        <span class="d-block">never <b><i>ends</i></b></span>
                    </h2>
                    <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum non molestiae
                        asperiores porro?Lorem ipsum dolor sit amet, consectetur adipisicing. </p>
                    <button class="mt-3" type="submit">READ MORE</button>
                </div>
                <div class="col-3">
                    <img class="" src="../assets/img/h-2-slider-img-15.png" alt="">
                </div>
                <div class="col-3">
                    <img class="" src="../assets/img/h-2-slider-img-16.png" alt="">
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center p-2">
                <i class="fa-solid fa-xs fa-circle p-2"></i>
                <i class="fa-solid fa-xs fa-circle p-2"></i>
                <i class="fa-solid fa-xs fa-circle p-2"></i>
            </div>
        </div>
        <button class="me-5 next"><i class="fa-solid fa-xl fa-circle-arrow-right"></i></button>
    </div>
</template>
<style scoped lang="scss">
.row {
    height: 500px;
    width: 100%;
    border: 2px dashed blue
}

.row .col-6 {
    border: 2px dashed gold;

    height: 500px;

    h2 {
        font-size: 50px;
    }

    ;

    button {
        padding: 10px;
        border: 3px solid pink;
        background-color: #fff;
        font-size: 15px;
    }

}

.col-3 {
    border: 2px solid green;
    height: 100%;

    img {
        width: 90%;
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
</style>