<template>
    <div id="uploadMedia">
        <formBox></formBox>
    </div>
</template>

<script>
    import formBox from './componentBean/FormBox.vue'

    export default {
        name: 'UploadMedia',
        data() {
            return {

            }
        },
        components: {
            formBox
        },
        methods: {

        }
    }
</script>

<style>
    html, body {
        background-image: url("../assets/image/png/1526736631778.png");
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>

<style scoped>

    #uploadMedia {
        width: 100%;
        height: 100%;
        text-align: center;
    }

</style>
