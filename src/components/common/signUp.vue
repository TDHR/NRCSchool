<template>
<el-dialog :title= titleMessage :visible.sync="innerDialogFormVisible">
    <div class="code">
        <img :src=primaryCode alt="" v-if="messageType === 1">
        <img :src=intermediate alt="" v-else-if="messageType === 2">
        <img :src=senior alt="" v-else-if="messageType === 3">
        <img :src=customized alt="" v-else-if="messageType === 4">
    </div>


    <div slot="footer" class="dialog-footer">
        <el-button @click="innerDialogFormVisible = false">取 消</el-button>
        <!--<el-button type="primary" @click="onSubmit()">提交</el-button>-->
    </div>
</el-dialog>
</template>
<script>
    import primaryCode from '../../assets/images/classCode/primary.jpg';
    import intermediate from '../../assets/images/classCode/intermediate.jpg';
    import senior from '../../assets/images/classCode/senior.jpg';
    import customized from '../../assets/images/classCode/customized.jpg';
    export default {
        props:{
            dialogFormVisible:{
                type:Boolean
            },
            messageType:{
                type:Number
            }
        },
        data() {
            return {
                form: {
                    name: '',
                    position: '',
                    wechat: '',
                    phone: '',
                    referee:''
                },
                rules:{
                    name:[
                        {required:true,message:'请输入姓名',trigger:'blur'}
                    ],
                    position:[
                        {required:true,message:'请输入职位信息',trigger:'blur'}
                    ],
                    wechat:[
                        {required:true,message:'请输入微信号',trigger:'blur'}
                    ],
                    phone:[
                        {require:true,message:'请输入手机号',trigger:'blur'}
                    ]
                },
                innerDialogFormVisible:false,
                primaryCode:primaryCode,
                senior:senior,
                intermediate:intermediate,
                customized:customized,
                titleMessage:'',
                formLabelWidth: '120px'
            }
        },
        watch:{
            innerDialogFormVisible(){
                this.$emit('updateDialogVisible',this.innerDialogFormVisible);
            },
            dialogFormVisible(){
                this.innerDialogFormVisible = this.dialogFormVisible
            },
            messageType:function () {

                this.changeTitle();
            }

        },
        mounted:function () {

            this.changeTitle();
        },

        updated:function () {


        },
        methods: {
            onSubmit() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                }, 2000);
                this.innerDialogFormVisible = false;
                console.log(this.form);
            },
            changeTitle() {
                if(this.messageType === 4){
                    this.titleMessage = '扫描下方二维码联系官方人员';
                }else {
                    this.titleMessage = '扫描下方二维码进入微店下单';
                }
            }
        }
    }
</script>

<style lang="scss">
    .code{
        width: 80%;
        margin-left:10%;
        img{
            width: 100%;
        }
    }
    @media screen and (max-width: 768px) {
        .el-dialog{
            width: 90%;
        }
    }

</style>