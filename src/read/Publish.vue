<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" @click="jumpHome">世界</van-tabbar-item>
            <van-tabbar-item icon="friends-o" @click="jumpAttention">关注</van-tabbar-item>
            <van-tabbar-item icon="setting-o">发表</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vant';
    export default {
        name: "publish",
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        },
        data() {
            return {
                active: 2
            }
        },
        methods: {
            jumpHome: function () {
                this.$router.push('home');
            },
            jumpAttention: function () {
                this.$router.push('attention');
            }
        }
    }
</script>

<style scoped>

</style>
