<template>
    <div  class="section-container">
        <div class="section-title">{{sectionItem.title}}</div>
         <div class="section-biref">{{sectionItem.brief}}</div>
        <el-row :gutter="12" class="class-container" v-if="sectionItem.id!==4">
            <v-sectionInner :sectionInnerItem=item v-for="item in sectionItem.data" :key="item.id" ></v-sectionInner>
        </el-row>
        <div class="class-container" v-else="sectionItem.id === 4">
            <div>{{sectionItem.data}}</div>
        </div>
        <div class="section-bottom">

            <el-button type="primary" class="sign-up-btn" @click="dialogFormVisible  = true" :disabled="sectionItem.id !== 1">立即报名</el-button>

            <el-button type="text" class="more-btn" @click="learnMore(sectionItem.id)" :disabled="sectionItem.id!== 1" v-if="sectionItem.id !== 4 ">了解详情<i class="el-icon-d-arrow-right"></i></el-button>
        </div>
        <v-signUp :dialogFormVisible ="dialogFormVisible" :messageType="sectionItem.id" @updateDialogVisible="updateDialogVisibleMethod"></v-signUp>
    </div>
</template>

<script>
    import sectionInner from './sectionInner.vue';
    import signUp from '../../common/signUp.vue';
    export default {
        props:{
            sectionItem:{
                type:Object
            }
        },
        data() {
          return {
              dialogFormVisible :false,
              messageType:'',
          }
        },
        methods:{
            learnMore(id) {
                this.$router.push({name:'classDetail',params:{id:id}})
            },
            updateDialogVisibleMethod (state) {

                this.dialogFormVisible = state
            }
        },
        components:{
            'v-sectionInner':sectionInner,
            'v-signUp':signUp
        }
    };
</script>

<style lang="scss">
    .section-container{
        width: 100%;
        margin-top: 50px;
        .section-title{
            width: 100%;
            font-size:20px;
            font-weight:bolder;
            text-align: center;
        }
        .section-biref{
            width: 100%;

            margin-top: 20px;
            color: gray;
            font-size:16px;
            font-weight:bold;
            text-align: center;
        }
        .class-container{
            /*display: flex;*/
            /*flex-direction: row;*/
            /*justify-content: space-around;*/
            margin-top: 20px;
        }
        .section-bottom{
            position: relative;
            width: 100%;
            margin-top: 20px;
            display: flex;
            justify-content:center;
            .more-btn{
                position: absolute;
                right: 5%;

            }
        }
    }
</style>