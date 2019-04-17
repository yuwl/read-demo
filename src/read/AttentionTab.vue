<template>
    <div>
    <van-tabs v-model="tabActive">
        <van-tab title="热歌榜">
            <div v-for="item in hotList" style="text-align: center">
                <p>{{ item.title }}</p>
                <img :src="item.pic_big" width="300" height="300" >
            </div>
        </van-tab>
        <van-tab title="新歌榜">
            <div v-for="item in newList" style="text-align: center">
                <p>{{ item.title }}</p>
                <img :src="item.pic_big" width="300" height="300" >
            </div>
        </van-tab>
        <van-tab title="金曲榜">
            <div v-for="item in goldList" style="text-align: center">
                <p>{{ item.title }}</p>
                <img :src="item.pic_big" width="300" height="300" >
            </div>
        </van-tab>
        <van-tab title="老歌榜">
            <div v-for="item in oldList" style="text-align: center">
                <p>{{ item.title }}</p>
                <img :src="item.pic_big" width="300" height="300" >
            </div>
        </van-tab>
    </van-tabs>
    </div>
</template>

<script>
    import {  Tab, Tabs  } from 'vant';
    export default {
        name: "attentionTab",
        components: {
            [Tab.name]: Tab,
            [Tabs.name]: Tabs
        },
        data() {
            return {
                tabActive: 0,
                hots: [],
                news: [],
                golds: [],
                olds: []
            }
        },
        computed: {
            hotList: {
                get: function () {
                    //console.log('computed.get...');
                    var _this = this;
                    //发送get请求
                    this.$http.get('https://api.apiopen.top/musicRankings').then(function(res){
                        //console.log('news: ',res);
                        if (res.status === 200) {
                            //console.log('imgs: ',res.data.result[0].channellist);
                            _this.hots = res.data.result[0].content;
                            _this.news = res.data.result[1].content;
                            _this.golds = res.data.result[3].content;
                            _this.olds = res.data.result[4].content;
                        }
                    },function(){
                        console.log('请求失败处理');
                    });
                    return _this.hots;
                },
                set: function () {
                    //console.log('computed.set...');
                }
            },
            newList: {
                get: function () {
                    return this.news;
                },
                set: function () {

                }
            },
            goldList: {
                get: function () {
                    return this.golds;
                },
                set: function () {

                }
            },
            oldList: {
                get: function () {
                    return this.olds;
                },
                set: function () {

                }
            }
        }
    }
</script>

<style scoped>

</style>
