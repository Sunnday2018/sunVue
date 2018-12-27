<template>
    <div id="languageBox">
        <ul class="center">
            <li v-for="lang in languageStoreData">{{lang}}</li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'Language',
        data() {
            return {
                languageData: [
                    '最近老是心不在焉的',
                    '做什么事情都没精神',
                    '我以为我生病了',
                    '事实上',
                    '我真的生病了',
                    '只不过生的是相思病',
                    '让我如此思念',
                    '都得病了',
                    '每次看到你可爱的笑',
                    '不管发生什么',
                    '都会觉得很开心',
                    '遇见你真好'
                ],
                languageStoreData: ['','','','','','','','','','','','',''],
                currentIndex: 0,
                currentLineIndex: 1
            }
        },
        mounted: function() {
            var _self = this;

            var time = setInterval(function() {
                Vue.set(_self.languageStoreData, _self.currentIndex, _self.languageData[_self.currentIndex].substring(0, _self.currentLineIndex));
                _self.currentLineIndex++;

                if(_self.currentLineIndex > _self.languageData[_self.currentIndex].length) {
                    _self.currentIndex++;
                    _self.currentLineIndex = 1;

                    if(_self.currentIndex == _self.languageData.length) {
                        clearInterval(time);
                        _self.$emit('childMethod', 'completeLoad');
                    }
                }

            }, 200);
        },
        methods: {

        }
    }
</script>

<style scoped>

    #languageBox {
        width: 100%;
        height: 100%;
        background-color: rgba(250, 250, 250, 0.8);
        position: fixed;
        top: 0px;
        left: 0px;
    }

    .center {
        position: absolute;
        top: 30%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .center li {
        height: 25px;
        line-height: 25px;
        font-size: 22px;
        font-family: STXingkai;
        color: #FF34B3;
    }

</style>
