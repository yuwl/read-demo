<template>
    <div>
        <Find></Find>
        <div id="news">
            <van-card v-for="(item,i) in goods"
                    :key="i"
                    :title="item.title"
                    :desc="item.digest"
                    :thumb="item.picurl"
                    :thumb-link="item.picurl"
            />
        </div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">世界</van-tabbar-item>
            <van-tabbar-item icon="friends-o" @click="jumpAttention">关注</van-tabbar-item>
            <van-tabbar-item icon="setting-o" @click="jumpPublish">发表</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem, Card  } from 'vant';
    import Find from '@/read/Find.vue';

    export default {
        name: "home",
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Card.name]: Card,
            Find
        },
        data() {
            return {
                active: 0,
                news: null
            }
        },
        methods: {
            jumpAttention: function () {
                this.$router.push('attention');
            },
            jumpPublish: function () {
                this.$router.push('publish');
            },
            queryNews: function () {
                //发送get请求
                this.$http.get('https://www.apiopen.top/journalismApi').then(function(res){
                    console.log('news: ',res);
                },function(){
                    console.log('请求失败处理');
                });
            }
        },
        computed: {
            goods: {
                get: function () {
                    //console.log('computed.get...');
                    var _this = this;
                    //发送get请求
                    this.$http.get('https://www.apiopen.top/journalismApi').then(function(res){
                        //console.log('news: ',res);
                        if (res.status === 200 && res.data.code ===200) {
                            var toutiao = res.data.data.toutiao;
                            for (var i in toutiao) {
                                //console.log(i, toutiao[i].picInfo);
                                var picurl;
                                for (var pic of toutiao[i].picInfo){
                                    //console.log('pic: ', pic.url);
                                    picurl = pic.url;
                                }
                                toutiao[i].picurl = picurl;
                            }
                            //console.log('toutiao: ', toutiao);
                            _this.news = res.data.data.toutiao;
                        }
                    },function(){
                        console.log('请求失败处理');
                    });
                    //console.log('news: ', _this.news);
                    return _this.news;
                },
                set: function () {
                    console.log('computed.set...');
                }
            }
        }
    }
</script>

<style scoped>

</style>
