<template>
    <div class="nav-container">
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
        <span class="user" v-if="user" @click="logout">
            {{user}}
        </span>
        <span v-else class="user">
            登录
        </span>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="90%"
                :before-close="handleClose"
                center>
            <span>确定退出登录吗</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="beWriterConfirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                // user:'',
                dialogVisible:false
            };
        },
        beforeMount:function() {
            // let user = sessionStorage.user;
            // this.user = user;
        },
        computed:{
            user: function () {
                return this.$store.getters.user;
            }

        },
        methods: {
            handleSelect(key) {
                if(key === '1'){
                    this.$router.push({path:'/home'})
                }
            },
            logout:function () {
                this.dialogVisible = true;
            },
            handleClose(done) {
                done();
            },
            beWriterConfirm:function () {
                sessionStorage.user = '';
                sessionStorage.userName = '';
                this.$store.dispatch('setUser','');
                this.dialogVisible = false;
                this.$router.push('/login');
            }
        }
    }
</script>

<style lang="scss">
    .el-menu--horizontal{
        border-bottom:0;
    }
    .el-menu-item{
        height: 40px;
        line-height: 40px;
    }
    .nav-container{
        position: relative;
    }
    .user{
        position: absolute;
        color: white;
        right: 10px;
        top:50%;
        transform: translateY(-50%);
    }
</style>