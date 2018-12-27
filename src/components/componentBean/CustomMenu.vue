<template>
    <div id="customMenuBox" :class="{'flexWidthBig': flexWidth != null && flexWidth, 'flexWidthSmall': flexWidth != null && !flexWidth}">
        <logo></logo>
        <div class="menuBox common-scrollbar" :class="{'flexWidthBig': flexWidth, 'flexWidthSmall': !flexWidth}" @mouseenter="enter()" @mouseleave="leave()">
            <div class="menuList">
                <menuButton v-for="(menuButtonBean, index) in menuButtonList" :key="index" :menu-button-bean="menuButtonBean"></menuButton>
            </div>
        </div>
    </div>
</template>

<script>
    import logo from './Logo'
    import menuButton from './MenuButton'

    import bus from '../../bus/Bus'

    export default {
        name: 'CustomMenu',
        data() {
            return {
                flexWidth: null,
                hovering: false,
                menuButtonList: [{'buttonIconClass': "dota"},{'buttonIconClass': "cartoon"},{'buttonIconClass': "sport"},{'buttonIconClass': "color"}]
            }
        },
        components: {
            logo,
            menuButton
        },
        mounted: function() {
            var _self = this
            // 用$on事件来接收参数
            bus.$on('flexWidth', (data) => {
                _self.flexWidth = data
            })
        },
        methods: {
            enter: function() {
                if((this.flexWidth != null && !this.flexWidth)) {
                    this.flexWidth = true;
                    this.hovering = true;
                }
            },
            leave: function() {
                if(this.hovering) {
                    this.flexWidth = false;
                    this.hovering = false;
                }
            }
        }
    }
</script>

<style scoped>
    #customMenuBox {
        width: 250px;
        height: 100%;
        border-right: 1px solid #AAA;
        box-sizing: border-box;
        position: fixed;
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
        from {width: 250px;}
        to {width: 80px;}
    }

    @keyframes small2big {
        from {width: 80px;}
        to {width: 250px;}
    }

    .menuBox {
        padding: 10px;
        box-sizing: border-box;
        overflow-y: auto;
        position: fixed;
        top: 60px;
        bottom: 0px;
        cursor: pointer;
    }
</style>
<style>

</style>
