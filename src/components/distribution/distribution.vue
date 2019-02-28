<!--分配页面-->
<template>
    <div>
        <div>当前id为：{{itemId}}</div>
        <div class="search">
            <el-input v-model="input" placeholder="请输入内容" class="search-input"></el-input>
            <el-button type="primary" icon="el-icon-search" circle class="search-btn" @click="search"></el-button>
            <!--<el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>-->
        </div>

        <div class="search-result">
            <div class="search-result-header">
                搜索结果
            </div>
            <el-card class="box-card" >

                <div v-if="isSearch">
                    <div v-if="resultData.length>0">
                        <div v-for="item in resultData" :key="item.id" class="text item">
                            {{item.id}}--{{item.name }}--{{item.address}}--<el-button type="primary" plain @click="beWriter(item.name)">成为填写者</el-button>
                        </div>
                    </div>
                    <div v-else>
                        未查找到相关数据
                    </div>
                </div>



            </el-card>
        </div>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="90%"
                :before-close="handleClose"
                center>
            <span>将{{writer}}设置为本项的填写者</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="beWriterConfirm">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "distribution",

        data() {
            return {
                input: '',
                isSearch:false,
                resultData:[],
                itemId:null,
                dialogVisible:false,
                writer:''
            }
        },
        beforeMount:function(){
            let itemId = this.$route.params.id;
            // //发送请求获取当前id的内容
            this.itemId = itemId;
        },
        methods:{
            search:function () {
                let searchData = this.input;
                //向后台发送请求搜索数据
                let formData = new FormData();
                formData.append('query',searchData);
                // this.$http.post('/api/',formData)
                //     .then((res)=> {
                //
                //     })
                //     .catch((error)=>{
                //         console.log(error)
                //     })
                this.resultData = [{
                    id:0,
                    name:"张三",
                    address:'天津'
                },{
                    id:1,
                    name:'李四',
                    address:'北京'
                }];
                this.isSearch = true;
            },
            beWriter:function (name) {
                    this.writer = name;
                    this.dialogVisible = true
            },
            handleClose(done) {
                done();
            },
            beWriterConfirm:function (id) {
                //向后台发送请求将此人设置为此项的填写者
                this.$router.push('/customs')
            }
        }
    }
</script>

<style scoped>
    .search{
        display: flex;
        justify-content: space-between;
    }
    .search-input{
        margin: 0 10px
    }
    .search-btn{
        margin: 0 10px;
    }
    .search-result{
        margin-top:20px;
    }
    .search-result-header{
        text-align: left;
        font-size: 14px;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 100%;
    }
</style>