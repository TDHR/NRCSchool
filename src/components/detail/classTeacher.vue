<template>
    <div >
        <el-card shadow="hover" v-for="(item,index) in detailData" :key="index">
            <div>
                <!--<img :src=item.img alt="">-->
            </div>
            <div>{{item.name}}</div>
            <div>{{item.position}}</div>
            <div>{{item.brief}}</div>
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
            return {
                detailData:''
            }
        },
        created() {

            // import("../../assets/data/teacher/"+this.classType+"/teacher.json")
            //     .then(data => {
            //
            //         this.detailData = data.data;
            //
            //
            //     })
        }
    };
</script>

<style lang="scss">

</style>