<template>
    <div id="loadingBox" class="center">
        <div id="loading"></div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>

    #loadingBox {
        width: 100%;
        height: 100%;
        background-color: rgba(250, 250, 250, 0.8);
    }

    #loading {
        width: 100px;
        height: 100px;
        background-image: url("../../assets/icon/gif/loading.gif");
        background-size: cover;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
