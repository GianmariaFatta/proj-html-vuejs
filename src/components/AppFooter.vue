<script>
export default {
    name: 'appFooter',
    data() {
        return {
            icons: [
                "fa-brands fa-twitter fa-lg", "fa-brands fa-pinterest-p fa-lg", "fa-brands fa-facebook-f fa-lg", "fa-brands fa-linkedin-in fa-lg"
            ]
        }
    }
}
</script>

<template>
    <footer>
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-3 d-flex flex-column justify-content-center align-items-start text-center ">
                    <img src="../assets/img/logo-sidearea-1.png" class="mb-2" alt="">
                    <p class="">Let's Get Creative</p>
                </div>
                <div class="col-3 d-flex flex-column justify-content-center align-items-start text-center ">
                    <a href="#">
                        <p>maree@qodeinteractive.com</p>
                    </a>
                    <a href="#">
                        <p>+44645 321 789</p>
                    </a>
                </div>
                <div class="col-3 d-flex flex-column justify-content-center align-items-start text-center ">
                    <a href="#">
                        <p>Avenue d'Auderghem 10</p>
                    </a>
                    <a href="#">
                        <p>1040 Brussels, Belgium</p>
                    </a>
                </div>
                <div class="col-3 d-flex flex-column justify-content-center align-items-start text-center ">
                    <a href="#">
                        <p>Stay in touch with us</p>
                    </a>
                    <div class="d-flex ustify-content-between gap-4">
                        <a v-for="(icon, i) in icons" :key="i" href="#">
                            <i :class="icon"></i>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    width: 100%;
    height: 200px;
    background-color: #C0E1CF;

    a {
        text-decoration: none;
        color: #000
    }
}

.col-3 {
    // border: 2px dashed darkred;
    height: 100%
}
</style>