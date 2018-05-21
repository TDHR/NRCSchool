<template>

    <el-card class="box-card">
        <p>{{detailData.detail}}</p>
        <p>课程安排：</p>

            <p v-if="classTime.weekendClass">周末班第一期时间：{{classTime.weekendClass.first}}</p>
            <p v-if="classTime.weekendClass">周末班第二期时间：{{classTime.weekendClass.second}}</p>
            <p v-if="classTime.weekendClass">脱产班时间：{{classTime.freeClass.first}}</p>
         <p>课程内容：</p>
            <div v-if="detailData.plan !== ''">
                <div  v-for="planItem in detailData.plan" >
                    <p>{{planItem.title}}</p>
                    <p>{{planItem.time}}</p>
                    <div v-for=" (itemContent,index) in planItem.item" :key="index">
                        <p>{{index+1}}.{{itemContent.content}}</p>
                    </div>
                </div>
            </div>

            <div v-else>
                <p>暂无</p>
            </div>
    </el-card>


</template>

<script>

    export default {
        props:{
            classType:{
                type:String
            }
        },
        data(){
            return{
                detailData:"",
                classTime:""
            }
        },
        created() {

            import("../../assets/data/class/"+this.classType+"/classDetail.json")
                .then(data => {

                    this.detailData = data.data;
                    this.classTime = this.detailData.classTime

                })
        }
    };
</script>

<style lang="scss">

</style>