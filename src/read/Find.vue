<template>
    <div id="find">
        <form action="/">
            <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
            />
        </form>
    </div>
</template>

<script>
    import { Search } from 'vant';
    export default {
        name: "find",
        components: {
            [Search.name]: Search
        },
        data() {
            return {
                value: ''
            }
        },
        methods: {
            onSearch() {
                this.$toast(this.value);
            },
            onCancel() {
                this.$toast('取消');
            }
        }
    }
</script>

<style scoped>

</style>
