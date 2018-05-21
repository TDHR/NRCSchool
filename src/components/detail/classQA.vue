<template>
    <div>
        <el-card shadow="hover">
            鼠标悬浮时显示
        </el-card>
        <el-card shadow="hover">
            鼠标悬浮时显示
        </el-card>
        <el-card shadow="hover">
            鼠标悬浮时显示
        </el-card>
        <el-card shadow="hover">
            鼠标悬浮时显示
        </el-card>
    </div>
</template>

<script>
    export default {
        props:{
            classType:{
                type:String
            }
        },
        data() {
            return{

            }
        },
        mounted(){
//            if(this.classType === 1){
//                import('../../assets/detailData/primary.json')
//                    .then(data => {
//                        console.log(data)
//                    })
//            }
        },
        methods:{

        }
    };
</script>

<style lang="scss">

</style>