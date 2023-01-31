<script>
import CreateMenu from './CreateMenu.vue';
export default {
    components: { CreateMenu }
}
</script>

<template>
    <header>
        <div class="container-fluid">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-6 p-4 ">
                    <img src="../../src/assets/img/logo-sidearea-1.png" alt="">
                </div>
                <div class="col-5">
                    <CreateMenu />
                </div>
                <div class="col-1">
                    <img src="../../src/assets/img/svg/svg-1.svg" alt="">
                </div>
            </div>
        </div>

    </header>
</template>

<style scoped lang="scss" >
header {
    width: 100%;
    min-height: 100px;
    border: 2px dashed black
}
</style>