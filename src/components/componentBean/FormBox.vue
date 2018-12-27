<template>
    <div id="formBox" class="center">
        <ul>
            <li id="mediaForm" v-if="formType == 1">
                <div id="add" class="center"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'FormBox',
        data() {
            return {
                formType: 1
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

    #formBox {
        width: 600px;
        height: 400px;
        background-color: rgba(250, 250, 250, 0.8);
        border: 1px solid beige;
        border-radius: 5px;
        box-shadow: 0 0 8px #CCCCCC;
    }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    #formBox ul {
        width: 100%;
        height: 100%;
    }

    #formBox ul li {
        width: 100%;
        height: 100%;
        list-style: none;
        position: relative;
    }

    #formBox ul li #add {
        width: 100px;
        height: 100px;
        border: 2px dashed deepskyblue;
        border-radius: 5px;
        background-image: url("../../assets/icon/png/add.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        cursor: pointer;
    }

    #formBox ul li #add:hover {
        border: 2px dashed dodgerblue;
    }

</style>
