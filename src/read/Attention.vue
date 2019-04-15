<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" @click="jumpHome">世界</van-tabbar-item>
            <van-tabbar-item icon="friends-o">关注</van-tabbar-item>
            <van-tabbar-item icon="setting-o" @click="jumpPublish">发表</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vant';
    export default {
        name: "attention",
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        },
        data() {
            return {
                active: 1
            }
        },
        methods: {
            jumpHome: function () {
                this.$router.push('home');
            },
            jumpPublish: function () {
                this.$router.push('publish');
            }
        }
    }
</script>

<style scoped>

</style>
