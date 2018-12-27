<template>
    <div id="sun">
        <media v-on:childMethod="loadMedia" v-for="(mediaBean, index) in mediaList" :key="index" :media-bean="mediaBean"></media>
    </div>
</template>

<script>
    import media from './componentBean/Media'

    export default {
        name: 'Sun',
        data() {
            return {
                mediaList: [],
                loadNumber: 0,
                blocksIt: {
                    col: 0,
                    width: 200,
                    offsetX: 10,
                    offsetY: 5,
                    padding: 8,
                    border: 1
                }

            }
        },
        components: {
            media
        },
        mounted: function() {
            window.document.title = 'Media List';
            this.getAllMedia();
            this.reSizeWatch(this);
        },
        methods: {
            getAllMedia: function() {
                var url = "http://127.0.0.1:8086/sun/getAllMedia";
                var _self = this;

                $.ajax({
                    url: url,
                    type: 'Get',
                    dataType: 'json',
                    success: function (data) {
                      _self.mediaList.sort(function() {return 0.5 - Math.random()});
                    },
                    error: function (data) {
                        _self.mediaList.sort(function() {return 0.5 - Math.random()});
                    }
                });
            },
            reLocation: function(_self) {
                var winWidth = $(window).width();
                var mediaWidth = _self.blocksIt.width +
                    _self.blocksIt.padding * 2 +
                    _self.blocksIt.border * 2;

                var newCol = parseInt(winWidth / (mediaWidth + _self.blocksIt.offsetX));

                if(newCol != _self.col) {
                    _self.blocksIt.col = newCol;
                    $('#sun').BlocksIt({
                        numOfCol: _self.blocksIt.col,
                        width: mediaWidth,
                        offsetX: _self.blocksIt.offsetX,
                        offsetY: _self.blocksIt.offsetY
                    });
                }
            },
            reSizeWatch: function(_self) {
                window.onresize = () => {
                    return (() => {
                        _self.reLocation(_self);
                    })();
                }
            },
            loadMedia: function() {
                this.loadNumber++;

                if(this.loadNumber == this.mediaList.length) {
                    this.reLocation(this);
                    this.$emit('childMethod', 'completeLoad');
                }
            },
            UUIDCom: function() {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            },
            getUUID: function() {
                return (this.UUIDCom() + this.UUIDCom() + "-"+ this.UUIDCom() + "-" + this.UUIDCom() +
                    "-" + this.UUIDCom() + "-" + this.UUIDCom() + this.UUIDCom() + this.UUIDCom());
            }
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

        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }

    #sun {
        width: 100%;
        height: 100%;
    }
</style>
