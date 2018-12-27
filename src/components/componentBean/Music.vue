<template>
    <div id="musicBox" v-on:click="musicController">
        <canvas v-on:click="" width="500" height="110" id="canvas"></canvas>
        <audio controls loop id="audioDemo" crossOrigin="anonymous">
            <source src="../../assets/music/mp3/1801539785.mp3" type="audio/mpeg">
        </audio>
        <!--<img id="canvasImage" src="http://www.monding.top/image/png/201807072348251.png"/>-->
        <img id="canvasImage" src="http://127.0.0.1:8081/upload/2p.png"/>
        <span id="lrc">{{lrc.currentLrc}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Media',
        data() {
            return {
                musicConfig:{},
                lrc: {
                    data: [
                        {key: '00:39.0', value: '在我的怀里'},
                        {key: '00:43.0', value: '在你的眼里'},
                        {key: '00:47.1', value: '那里春风沉醉'},
                        {key: '00:50.3', value: '那里绿草如茵'},
                        {key: '00:55.1', value: '月光把爱恋'},
                        {key: '00:58.8', value: '洒满了湖面'},
                        {key: '01:02.5', value: '两个人的篝火'},
                        {key: '01:05.9', value: '照亮整个夜晚'},
                        {key: '01:08.9', value: '多少年以后'},
                        {key: '01:12.5', value: '如云般游走'},
                        {key: '01:16.5', value: '那变换的脚步'},
                        {key: '01:19.9', value: '让我们难牵手'},
                        {key: '01:24.3', value: '这一生一世'},
                        {key: '01:28.1', value: '有多少你我'},
                        {key: '01:32.0', value: '被吞没在月光如水的夜里'},
                        {key: '01:44.1', value: '多想某一天'},
                        {key: '01:48.0', value: '往日又重现'},
                        {key: '01:51.8', value: '我们流连忘返'},
                        {key: '01:54.7', value: '在贝加尔湖畔'},
                        {key: '02:30.7', value: '多少年以后'},
                        {key: '02:34.0', value: '往事随云走'},
                        {key: '02:37.8', value: '那纷飞的冰雪'},
                        {key: '02:40.9', value: '容不下那温柔'},
                        {key: '02:45.5', value: '这一生一世'},
                        {key: '02:49.3', value: '这时间太少'},
                        {key: '02:53.2', value: '不够证明融化冰雪的深情'},
                        {key: '03:31.1', value: '多少年以后'},
                        {key: '03:34.5', value: '往事随云走'},
                        {key: '03:38.3', value: '那纷飞的冰雪'},
                        {key: '03:41.6', value: '容不下那温柔'},
                        {key: '03:45.9', value: '这一生一世'},
                        {key: '03:49.6', value: '这时间太少'},
                        {key: '03:53.8', value: '不够证明融化冰雪的深情'},
                        {key: '04:11.1', value: '就在某一天'},
                        {key: '04:15.0', value: '你忽然出现'},
                        {key: '04:19.2', value: '你清澈又神秘'},
                        {key: '04:22.4', value: '在贝加尔湖畔'},
                        {key: '04:27.6', value: '你清澈又神秘'},
                        {key: '04:31.0', value: '像贝加尔湖畔'},
                        {key: '04:39.9', value: ''}
                    ],
                    currentIndex: 0,
                    currentLrc: ''
                },
                canvasWidth: 0,
                showType: 1
            }
        },
        computed: {

        },
        mounted: function() {
            this.configWindowWidth(this);
            this.initConfig();
            this.renderFrame(this);
            this.musicConfig.audio.volume = 0.15;

            var _self = this;
            var musicMedia = document.getElementById('audioDemo');
            musicMedia.addEventListener('loadedmetadata', function(){
                //_self.playMusic();
            });
        },
        methods: {
            initConfig: function() {
                window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;

                var audio = document.getElementById('audioDemo');
                var ctx = new window.AudioContext();
                var analyser = ctx.createAnalyser();
                var audioSrc = ctx.createMediaElementSource(audio);

                audioSrc.connect(analyser);
                analyser.connect(ctx.destination);

                var frequencyData = new Uint8Array(analyser.frequencyBinCount);

                var canvas = document.getElementById('canvas');


                if(this.showType == 1) {
                    this.musicConfig = {
                        audio: audio,
                        analyser: analyser,
                        cwidth: canvas.width,
                        cheight: canvas.height - 2,
                        meterWidth: 1,
                        borderWidth: 0,
                        gap: 2,
                        capHeight: 2,
                        capStyle: '#fff',
                        meterNum: 1024,
                        capYPositionArray: [],
                        ctx: canvas.getContext('2d')
                    };
                } else if(this.showType == 2) {
                    this.musicConfig = {
                        audio: audio,
                        analyser: analyser,
                        cwidth: canvas.width,
                        cheight: canvas.height - 2,
                        meterWidth: 10,
                        borderWidth: 1,
                        gap: 2,
                        capHeight: 2,
                        capStyle: '#fff',
                        meterNum: 100,
                        capYPositionArray: [],
                        ctx: canvas.getContext('2d')
                    };
                } else if(this.showType == 3) {
                    this.musicConfig = {
                        audio: audio,
                        analyser: analyser,
                        cwidth: canvas.width,
                        cheight: canvas.height - 2,
                        meterWidth: 1,
                        borderWidth: 0,
                        gap: 2,
                        capHeight: 2,
                        capStyle: '#fff',
                        meterNum: 1024,
                        capYPositionArray: [],
                        ctx: canvas.getContext('2d')
                    };
                } else if(this.showType == 4) {
                    this.musicConfig = {
                        audio: audio,
                        analyser: analyser,
                        cwidth: canvas.width,
                        cheight: canvas.height - 2,
                        meterWidth: 10,
                        borderWidth: 1,
                        gap: 2,
                        capHeight: 2,
                        capStyle: '#fff',
                        meterNum: 100,
                        capYPositionArray: [],
                        ctx: canvas.getContext('2d')
                    };
                }

                this.musicConfig.gradient = this.musicConfig.ctx.createLinearGradient(0, 0, 0, 110);
                this.musicConfig.gradient.addColorStop(1, '#0f0');
                this.musicConfig.gradient.addColorStop(0.5, '#ff0');
                this.musicConfig.gradient.addColorStop(0, '#f00');
            },
            renderFrame() {
                this.getLrc(this.musicConfig.audio.currentTime);
                this.changeLrcColor();

                var array = new Uint8Array(this.musicConfig.analyser.frequencyBinCount);
                this.musicConfig.analyser.getByteFrequencyData(array);

                var step = Math.round(array.length / this.musicConfig.meterNum);
                this.musicConfig.ctx.clearRect(0, 0, this.musicConfig.cwidth, this.musicConfig.cheight);

                var img = document.getElementById("canvasImage");

                for(var i = 0; i < this.musicConfig.meterNum; i++) {
                    var value = array[i * step];
                    if(this.musicConfig.capYPositionArray.length < Math.round(this.musicConfig.meterNum)) {
                        this.musicConfig.capYPositionArray.push(value);
                    };

                    this.musicConfig.ctx.fillStyle = this.musicConfig.capStyle;

                    if(value < this.musicConfig.capYPositionArray[i]) {
                        this.musicConfig.ctx.fillRect(i * (this.musicConfig.meterWidth + this.musicConfig.borderWidth), this.musicConfig.cheight - (--this.musicConfig.capYPositionArray[i])/3, this.musicConfig.meterWidth, this.musicConfig.capHeight);
                    } else {
                        this.musicConfig.ctx.fillRect(i * (this.musicConfig.meterWidth + this.musicConfig.borderWidth), this.musicConfig.cheight - value/3, this.musicConfig.meterWidth, this.musicConfig.capHeight);
                        this.musicConfig.capYPositionArray[i] = value;
                    };

                    if(this.showType == 1) {
                        this.musicConfig.ctx.drawImage(img, i * (this.musicConfig.meterWidth + this.musicConfig.borderWidth), this.musicConfig.cheight - value/3 + this.musicConfig.capHeight,
                                                            this.musicConfig.meterWidth, value * 2 / 3 - this.musicConfig.capHeight,
                                                            i * (this.musicConfig.meterWidth + this.musicConfig.borderWidth), this.musicConfig.cheight - value/3 + this.musicConfig.capHeight,
                                                            this.musicConfig.meterWidth, value * 2 / 3 - this.musicConfig.capHeight);
                    } else if(this.showType == 2) {
                        this.musicConfig.ctx.drawImage(img, i * (this.musicConfig.meterWidth + this.musicConfig.borderWidth), this.musicConfig.cheight - value/3 + this.musicConfig.capHeight,
                                                            this.musicConfig.meterWidth, value * 2 / 3 - this.musicConfig.capHeight,
                                                            i * (this.musicConfig.meterWidth + this.musicConfig.borderWidth), this.musicConfig.cheight - value/3 + this.musicConfig.capHeight,
                                                            this.musicConfig.meterWidth, value * 2 / 3 - this.musicConfig.capHeight);
                    } else if(this.showType == 3) {
                        this.musicConfig.ctx.fillStyle = this.musicConfig.gradient;
                        this.musicConfig.ctx.fillRect(i * (this.musicConfig.meterWidth + this.musicConfig.borderWidth) , this.musicConfig.cheight - value/3 + this.musicConfig.capHeight, this.musicConfig.meterWidth, this.musicConfig.cheight);
                    } else if(this.showType == 4) {
                        this.musicConfig.ctx.fillStyle = this.musicConfig.gradient;
                        this.musicConfig.ctx.fillRect(i * (this.musicConfig.meterWidth + this.musicConfig.borderWidth) , this.musicConfig.cheight - value/3 + this.musicConfig.capHeight, this.musicConfig.meterWidth, this.musicConfig.cheight);
                    }
                }
                requestAnimationFrame(this.renderFrame);
            },
            getLrc: function(currentTime) {
                var min = (parseInt(currentTime / 60) < 10 ? '0' : '') + parseInt(currentTime / 60) + ':';
                var sec = ((currentTime % 60).toFixed(1) < 10 ? '0' : '') + (currentTime % 60).toFixed(1);
                var timeFormat = min + sec;

                if(this.lrc.data[this.lrc.currentIndex].key == timeFormat) {
                    this.lrc.currentLrc = this.lrc.data[this.lrc.currentIndex].value;
                    this.lrc.currentIndex++;

                    console.info(this.lrc.currentLrc);

                    if(this.lrc.currentIndex == this.lrc.data.length) {
                        this.lrc.currentIndex = 0;
                    }
                }
            },
            reSizeWatch: function(_self) {
                window.onresize = () => {
                    return (() => {
                        _self.configWindowWidth(_self);
                    })();
                }
            },
            configWindowWidth: function(_self) {
                var winWidth = $(window).width();
                _self.canvasWidth = winWidth;
            },
            musicController: function() {
                if(this.musicConfig.audio.paused) {
                    this.musicConfig.audio.play();
                } else {
                    this.musicConfig.audio.pause();
                }
            },
            playMusic: function() {
                this.musicConfig.audio.play();
            },
            changeLrcColor: function() {
                var color = "#";
                for(var i=0; i<6; i++) {
                    color += Math.floor(Math.random()*17).toString(16);
                }
                $("#lrc").animate({"color": color});
            }
        },
        props: {
            musicBean: {

            }
        },
        watch: {

        }
    }
</script>

<style scoped>
    #musicBox {
        position: fixed;
        left: 0px;
        bottom: 0px;
    }

    #musicBox #canvas {
        cursor: pointer;
        float: left;
    }

    #musicBox #audioDemo {
        display: none;
    }

    #canvasImage {
        display: none;
    }

    #lrc {
        font-family: STCaiyun;
        font-weight: bold;
        font-size: 25px;
        line-height: 25px;
        letter-spacing: 3px;
        display: inline-block;
        margin-top: 85px;
    }
</style>
