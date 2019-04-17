<template>
    <div>
        <div id="form">
            <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    placeholder="请输入用户名"
            />

            <label>性别：</label>
            <van-radio-group v-model="radio">
                <van-radio name="男">男</van-radio>
                <van-radio name="女">女</van-radio>
            </van-radio-group>

            <label>爱好：</label>
            <van-checkbox-group v-model="result">
                <van-checkbox
                        v-for="(item, index) in list"
                        :key="item"
                        :name="item"
                >
                    {{ item }}
                </van-checkbox>
            </van-checkbox-group>

            <van-button type="primary" size="large" @click="submit">提交</van-button>
        </div>
        <div v-for="(item , index) in $store.state.users " :key="index">
            <span>{{ item.username }}</span>
            <span>{{ item.sex }}</span>
            <span>{{ item.hobby }}</span>
            <span @click="del(index)"> 删除 </span>
        </div>
        <!--<div>
            count: {{ $store.state.count }}
            <input type="button" @click="$store.commit('add')" value="添加"/>
            <input type="button" @click="$store.commit('reduce')" value="减少"/>
        </div>-->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" @click="jumpHome">世界</van-tabbar-item>
            <van-tabbar-item icon="friends-o" @click="jumpAttention">关注</van-tabbar-item>
            <van-tabbar-item icon="setting-o">发表</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem, Field, RadioGroup, Radio,Checkbox, CheckboxGroup, Button  } from 'vant';
    import store from '@/store';
    export default {
        name: "publish",
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Field.name]: Field,
            [RadioGroup.name]: RadioGroup,
            [Radio.name]: Radio,
            [Checkbox.name]: Checkbox,
            [CheckboxGroup.name]: CheckboxGroup,
            [Button.name]: Button,
            store
        },
        data() {
            return {
                active: 2,
                radio: '男',
                username: '',
                list: ['吃鸡', '搬砖', '睡觉'],
                result: []
            }
        },
        methods: {
            jumpHome: function () {
                this.$router.push('home');
            },
            jumpAttention: function () {
                this.$router.push('attention');
            },
            submit: function () {
                var u = {};
                u.username = this.username;
                u.sex = this.radio;
                u.hobby = this.result;
                store.commit('addUser', u);
                console.log('users: ', store.state.users);
            },
            del: function (index) {
                console.log(index);
                store.commit('delUser', index);
                console.log('users: ', store.state.users);
            }
        }
    }
</script>

<style scoped>

</style>
