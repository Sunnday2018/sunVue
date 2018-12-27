<template>
    <div id="menuButtonBox">
        <div class="menuButton">
            <div class="buttonIcon" :class="menuButtonBean.buttonIconClass"></div>
            <div class="buttonName">年轻时的</div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MenuButton',
        data() {
            return {

            }
        },
        components: {

        },
        props: {
            menuButtonBean: {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    #menuButtonBox {
        padding: 2px 0px 2px 0px;
    }

    .menuButton {
        width: 100%;
        height: 45px;
        padding: 10px 10px;
        box-sizing: border-box;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0);
        border-radius: 5px;
    }

    .menuButton:hover {
        border: 1px solid #AAAAAA;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .menuButton div {
        display: inline-block;
        vertical-align: top;
    }

    .buttonIcon {
        width: 25px;
        height: 25px;
        box-sizing: border-box;
    }

    .buttonName {
        height: 25px;
        line-height: 25px;
    }

    .dota {
        background-image: url("../../assets/icon/png/menu/dota_menu_icon.png");
        background-size: cover;
    }

    .cartoon {
        background-image: url("../../assets/icon/png/menu/cartoon_menu_icon.png");
        background-size: cover;
    }

    .color {
        background-image: url("../../assets/icon/png/menu/color_menu_icon.png");
        background-size: cover;
    }

    .sport {
        background-image: url("../../assets/icon/png/menu/sport_menu_icon.png");
        background-size: cover;
    }

</style>
