<template>
    <div id="mediaManagerBox">

    </div>
</template>

<script>
    import menuButton from './MenuButton'

    export default {
        name: 'MediaManager',
        data() {
            return {

            }
        },
        components: {
            menuButton
        },
        methods: {
            tabChange: function () {
                this.$emit('ee', '');
            }
        }
    }
</script>

<style scoped>
    #mediaManagerBox {
        height: 100%;
        border-right: 1px solid #AAA;
        box-sizing: border-box;
        position: fixed;
    }

</style>
