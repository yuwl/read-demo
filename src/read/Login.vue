<template>
    <div id="login">
        <van-cell-group class="login-title">
            <van-cell value="Read" size="large"/>
        </van-cell-group>

        <van-cell-group class="login-form">
            <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    placeholder="请输入用户名"
            />

            <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                    clearable
            />
        </van-cell-group>

        <van-notice-bar wrapable :scrollable="false">
            用户名：admin
            密  码：123456
        </van-notice-bar>

        <van-cell-group class="login-btn">
            <van-button type="primary" size="large" @click="login">确定</van-button>
        </van-cell-group>
    </div>
</template>

<script>
    import {  Cell, CellGroup, Field, Button,Toast, NoticeBar } from 'vant';
    import store from '@/store';

    export default {
        name: "login",
        components: {
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Field.name]: Field,
            [Button.name]: Button,
            [Toast.name]: Toast,
            [NoticeBar.name]: NoticeBar,
            store
        },
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                if (this.username === store.state.username && this.password === store.state.password) {
                    console.log(this.username, '登录成功,jump...')
                    this.$router.push('home');
                } else {
                    console.log(this.username, '登录失败')
                    Toast('登录失败');
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .van-cell__value {
        font-size: 20px;
        text-align: center;
    }
.login {

    &-title {
        text-align: center;
        margin-top: 30px;
    }

    &-btn {
        text-align: center;
        margin-top: 30px;
    }
}
</style>
