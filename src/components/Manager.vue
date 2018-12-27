<template>
    <div id="manager">
        <customMenu></customMenu>
        <inform></inform>
        <router-view></router-view>
        <loading v-show="loadingFlag"></loading>
    </div>
</template>

<script>
    import customMenu from './componentBean/CustomMenu'
    import loading from './componentBean/Loading'
    import inform from './componentBean/Inform'
    import sun from './Sun'

    export default {
        name: 'Manager',
        data() {
            return {
                loadingFlag: false,
                currentView: null
            }
        },
        components: {
            customMenu,
            inform,
            loading,
            sun
        },
        methods: {

        }
    }
</script>

<style>
    html, body {
        /*background-image: url("../assets/image/png/1526736631778.png");*/
        /*background-image: url("http://118.31.68.124:8080/sun/1.png");*/
        background-image: url("../assets/image/jpg/background.jpg");
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>

<style scoped>

    #manager {
        width: 100%;
        height: 100%;
    }

</style>
