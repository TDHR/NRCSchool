<!--报表列表-->
<!--<template>-->
    <!--<div>-->
        <!--<el-table-->
                <!--:data="tableData"-->
                <!--style="width: 100%"-->
                <!--:row-class-name="tableRowClassName">-->
            <!--<el-table-column-->
                    <!--prop="id"-->
                    <!--label="id"-->
                    <!--width="100">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
                    <!--prop="name"-->
                    <!--label="填写项"-->
                    <!--width="100">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
                    <!--label="操作"-->
                    <!--width="100"-->
                    <!--fixed="right">-->
                <!--<template slot-scope="scope">-->
                    <!--<el-button  type="text" size="small">查看</el-button>-->
                    <!--<el-button type="text" size="small">编辑</el-button>-->
                <!--</template>-->
            <!--</el-table-column>-->
        <!--</el-table>-->
    <!--</div>-->
<!--</template>-->
<template>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column type="expand" width="20" >
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand" >
                    <el-col>
                        <el-form-item label="填写时间:">
                            <span>{{ props.row.time }}</span>
                        </el-form-item>
                    </el-col>
                    <el-col>
                        <el-form-item label="填写地点:">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                    </el-col>
                    <el-col>
                        <el-form-item label="填写内容:">
                            <span>{{ props.row.content }}</span>
                        </el-form-item>
                    </el-col>


                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                label="ID"
                prop="id"
                align="center">
        </el-table-column>
        <el-table-column
                label="填写项"
                prop="name"
                align="center">
        </el-table-column>
        <el-table-column
                label="填写人"
                prop="user"
                align="center">
        </el-table-column>
        <el-table-column
                label="操作"
                width="100"
                align="center">
            <template slot-scope="props">
                <div v-if="userAuth === 'supervision'" >
                    <!--催单员按钮-->
                    <el-button  type="text" size="small" @click="urge(props.row.user)" v-if="props.row.isDistribute">去催单</el-button>
                    <el-button  type="text" size="small" @click="urge" disabled v-else>未分配</el-button>

                </div>
                <div v-else-if="userAuth === 'customs'">
                    <!--海关按钮-->
                    <el-button type="text" size="small" @click="distribution(props.row.id)" v-if="!props.row.isDistribute">分配</el-button>
                    <el-button type="text" size="small" @click="distribution(props.row.id)" disabled v-else>已分配</el-button>

                    <!--<el-button  type="text" size="small" @click="checkItem">查看</el-button>-->
                </div>
                <div v-else-if="userAuth === 'writer'">
                    <!--填写者按钮-->
                    <div v-if="props.row.isDistribute">
                        <div v-if="props.row.user === user">
                            <el-button  type="text" size="small" @click="writeItem(props.row.id)" v-if="!props.row.isWrite">填写</el-button>
                            <el-button  type="text" size="small" disabled v-else style="{color:green}">已填写</el-button>
                        </div>
                        <div v-else>
                            <el-button  type="text" size="small" disabled >未授权填写</el-button>
                        </div>
                    </div>
                    <div v-else>
                        <el-button  type="text" size="small" disabled >未分配</el-button>
                    </div>

                </div>
                <div v-else style="color:red">
                    <el-button type="text"  size="small" style="color:red">不可操作</el-button>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "reportList",
        props:{
            userAuth:{
                type:String
            }
        },
        data() {
            return{
                tableData:[{
                    id: '12987122',
                    name: '第一项',
                    user:'A01',
                    address: '--',
                    time:'--',
                    content:'--',
                    isDistribute:true,
                    writer:'A01',
                    isWrite:false

                }, {
                    id: '12987123',
                    name: '第二项',
                    user:'--',
                    address: '--',
                    time:'--',
                    content:'--',
                    isDistribute:false,
                    isWrite:false
                }, {
                    id: '12987125',
                    name: '第三项',
                    user:'A03',
                    address: '上海市普陀区真北路',
                    time:'2019年02月19日17:47:50',
                    content:'testtest',
                    isDistribute:true,
                    writer:'A03',
                    isWrite:true

                }, {
                    id: '12987126',
                    name: '第四项',
                    user:'A04',
                    address: '--',
                    time:'--',
                    content:'--',
                    isDistribute:true,
                    writer:'A04',
                    isWrite:false

                }],
                user:''
            }
        },
        beforeMount:function(){
            let user = sessionStorage.user;
            this.user = user;
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            mapAuth:function (control) {
                let data = this.tableData;
                data.forEach((item,index,array) => {
                    console.log(index)
                    item.control = `<el-button type="primary">${control}</el-button>`
                    // item.control = `'`${control}'
                })
            },
            urge:function (user) {
                //催单
                alert(`向${user}发送催单信息？`)
            },
            distribution:function (id) {
                //分配

                this.$router.push(
                    {
                        name:'distribution',
                        params:{
                            id:id
                        }
                    }
                );
            },
            checkItem:function () {
                //查看
                alert('查看')
            },
            writeItem:function (id) {
                //填写
                this.$router.push(
                    {
                        name:'write',
                        params:{
                            id:id
                        }
                    }
                )

            }
        },
    }
</script>

<style scoped>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

</style>