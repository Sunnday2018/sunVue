<template>
    <div id="InformBox" :class="{'flexWidthBig': flexWidth != null && flexWidth, 'flexWidthSmall': flexWidth != null && !flexWidth}">
        <div id="menu_ctrl" @click="changeMenu"></div>
    </div>
</template>

<script>
    import bus from '../../bus/Bus'

    export default {
        name: 'Inform',
        data() {
            return {
                flexWidth: null
            }
        },
        methods: {
            changeMenu: function() {
                var _self = this;
                if(_self.flexWidth == null) {
                    _self.flexWidth = false;
                } else {
                    _self.flexWidth = !_self.flexWidth;
                }

                bus.$emit('flexWidth', _self.flexWidth );
            }
        }
    }
</script>

<style scoped>

    #InformBox {
        height: 60px;
        border-bottom: 1px solid #AAA;
        box-sizing: border-box;
        position: fixed;
        top: 0px;
        left: 250px;
        right: 0px;
    }

    .flexWidthBig {
        animation: small2big 1.5s;
        animation-fill-mode:forwards;
    }

    .flexWidthSmall {
        animation: big2small 1.5s;
        animation-fill-mode:forwards;
    }

    @keyframes big2small {
        from {left: 250px;}
        to {left: 80px;}
    }

    @keyframes small2big {
        from {left: 80px;}
        to {left: 250px;}
    }

    #menu_ctrl {
        width: 25px;
        height: 25px;
        background-image: url("../../assets/icon/png/menu/menu_ctrl.png");
        background-size: cover;
        margin-top: 15px;
        margin-left: 15px;
    }

</style>
