<template>

        <el-col :xs="24" :md="8"  class="section-item">
            <div class="section-item-img">
                <img :src=sectionInnerItem.image alt="">
            </div>
            <div class="section-item-text">
                {{sectionInnerItem.brief}}
            </div>

        </el-col>

</template>

<script>
    export default {
        props:{
            sectionInnerItem:{
                type:[Object,String]
            }
        },
        data() {
            return {
                dialogFormVisible :false,
                messageType:'',
            }
        }
    };
</script>

<style lang="scss">
    .section-item{
        /*width: 500px;*/
        .section-item-img{
            width: 100%;
            height: 500px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .section-item-text{
            font-size: 14px;
            text-align: center;
            margin-top: 20px;
        }
    }
</style>