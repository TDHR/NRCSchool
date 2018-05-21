<template>
    <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="1">首页</el-menu-item>

    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key) {
                if(key === '1'){
                    this.$router.push({path:'/home'})
                }
            }
        }
    }
</script>

<style lang="scss">
    .el-menu--horizontal{
        border-bottom:0;
    }
</style>