<template>
    <el-menu
            default-active="1"
            :class="barType"
            @select="sidebarSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">课程详情</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-news"></i>
            <span slot="title">导师介绍</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">Q&A</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        props:{
            deviceType:{
                type:Number
            }
        },
        data() {
          return {
              barType:''
          }
        },
        beforeMount() {
//            if(this.deviceType === 1){
//                this.barType = 'el-menu-vertical-demo'
//            }else if(this.deviceType === 2){
//                this.barType = 'el-menu-demo'
//            }
//            console.log(this.deviceType)

        },
        methods: {

            sidebarSelect(key){
                if(key === '1'){
                    this.$router.push({path:'/detail/classDetail'})
                }else if(key === '2'){
                    this.$router.push({path:'/detail/classTeacher'})
                }else if(key === '3'){
                    this.$router.push({path:'/detail/classQA'})
                }
            }
        }
    };
</script>

<style lang="scss">

</style>