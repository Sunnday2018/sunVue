<template>
    <div id="index">
        <sun v-on:childMethod="completeLoad"></sun>
        <music></music>
        <language v-on:childMethod="completeLoad" v-if="showLanguage"></language>
    </div>
</template>

<script>
    import sun from './Sun'
    import music from './componentBean/Music'
    import language from './componentBean/Language'

    export default {
        name: 'Index',
        data() {
            return {
                showLanguage: false,
                completeFlag: false
            }
        },
        components: {
            sun,
            music,
            language
        },
        computed: {

        },
        mounted: function() {
            window.document.title = 'Jeanne1110';
        },
        methods: {
            completeLoad: function() {
                var _self = this;

                if(this.completeFlag) {
                    setTimeout(function() {
                        _self.showLanguage = false;
                    }, 5000);
                } else {
                    this.completeFlag = true;
                }

            }
        },
        props: {

        },
        watch: {

        }
    }
</script>

<style scoped>
    html, body {
        background-image: url("../assets/image/png/1526736631778.png");
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }

    #index {
        width: 100%;
        height: 100%;
        min-width: 500px;
    }

</style>
