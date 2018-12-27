<template>
    <div id="logoBox">
        <div id="logo"></div>
        收快递费
    </div>
</template>

<script>
    export default {
        name: 'Logo',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>

    #logoBox {
        width: 100%;
        height: 60px;
        padding: 10px;
        border-bottom: 1px solid #AAA;
        box-sizing: border-box;
    }

    #logo {
        width: 40px;
        height: 40px;
        background-image: url("../../assets/icon/png/logo.png");
        background-size: cover;
        display: inline-block;
    }
</style>
