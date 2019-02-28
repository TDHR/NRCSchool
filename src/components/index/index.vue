<template>
    <div>
        <div class="qr-container">
            <v-qr :logoSrc="qrConfig.logo" :text="qrConfig.target" :size="200" :margin='0' @click="qrClick"></v-qr>
            <el-button type="primary" plain class="distinguish" @click="dialogVisible = true">点击识别上方二维码</el-button>
        </div>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="90%"
                :before-close="handleClose"
                center>
            <span>是否识别上方二维码</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="qrClick">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import lock from '../../assets/images/lock.jpeg';
    import VueQr from 'vue-qr';
    export default {
        name: "index",
        data(){
            return{
                qrConfig:{
                    logo:lock,
                    target:'www.baidu.com'
                },
                dialogVisible:false

            }
        },
        beforeMount:function() {
            let user = sessionStorage.user;
            this.$store.dispatch('setUser',user);
        },
        methods:{
            qrClick:function() {
                this.dialogVisible = false;
                this.$router.push('/customs');
            },
            handleClose(done) {
                done();
            }
        },
        components:{
            'v-qr':VueQr,
        }
    }
</script>

<style scoped>
    .qr-container{
        padding-top: 50px;
    }
    .distinguish{
        margin-top: 40px;
    }
</style>