<template>
    <div class="mediaBox" v-on:click="rotateMedia" v-bind:class="{rotateMedia: mediaBean.rotateFlag}">
        <img v-bind:id="mediaBean.mediaId" @load="callMethod" class="image rotateMedia" v-if="mediaBean.mediaType == 'image'" v-bind:src="mediaBean.mediaPath" v-bind:data-original="mediaBean.mediaPath"/>
        <video v-bind:id="mediaBean.mediaId" preload="auto" class="video rotateMedia" v-else-if="mediaBean.mediaType == 'video'" v-bind:src="mediaBean.mediaPath" v-bind:data-original="mediaBean.mediaPath"></video>
    </div>
</template>

<script>
    export default {
        name: 'Media',
        data() {
            return {

            }
        },
        computed: {
        },
        mounted: function() {
            if(this.mediaBean.mediaType == 'video') {
                var _self = this;
                var videoMedia = document.getElementById(this.mediaBean.mediaId);
                videoMedia.addEventListener('loadedmetadata', function(){
                    _self.callMethod();
                });
            }
        },
        methods: {
            rotateMedia: function() {
                this.mediaBean.rotateFlag = !this.mediaBean.rotateFlag;

                if(this.mediaBean.mediaType == 'video') {
                    if(this.mediaBean.rotateFlag) {
                        this.$el.children[0].volume = 0.3;
                        this.$el.children[0].play();
                    } else {
                        this.$el.children[0].pause();
                    }
                }
            },
            callMethod: function(){
                this.$emit('childMethod', 'childParam');
                //第一个参数名为调用的方法名，第二个参数为需要传递的参数
            },
            UUIDCom: function() {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            },
            getUUID: function() {
                return (this.UUIDCom() + this.UUIDCom() + "-"+ this.UUIDCom() + "-" + this.UUIDCom() +
                    "-" + this.UUIDCom() + "-" + this.UUIDCom() + this.UUIDCom() + this.UUIDCom());
            }
        },
        props: {
            mediaBean: {

            }
        },
        watch: {
            mediaBean: function(mediaData) {
                console.info(1);
            }
        }
    }
</script>

<style scoped>
    #sun .mediaBox {
        line-height: 0;
        cursor: pointer;
        background-image: url("../../assets/image/png/1526738538339.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border: 1px solid #CCCCCC;
        box-shadow: 0 0 8px #CCCCCC;
        border-radius: 5px;
        transition: 0.5s;
        transform-style: preserve-3d;
        float: left;
    }

    #sun .mediaBox:hover {
        box-shadow: 0 0 10px #999999;
    }

    #sun .rotateMedia {
        transform: rotateY(180deg);
    }

    #sun .image, #sun .video {
        width: 200px;
        border-radius: 5px;
        background-color: rgba(247,247,247,0.8);
        border: 0px;
        padding: 8px;
    }
</style>
