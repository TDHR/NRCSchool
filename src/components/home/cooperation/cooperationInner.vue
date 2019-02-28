<template>
    <el-card :body-style="{ padding: '0px' }">
    <img :src=companyLogo class="image">
    <div style="padding: 14px;">
        <span>{{cooperationData.name}}</span>
    </div>
    </el-card>


</template>

<script>
//    import a from '../../../assets/images/banner1.jpg';
    export default {
        props:{
            cooperationData:{
                type:Object
            }
        },
        data() {
            return {
                companyLogoName:'',
                companyLogo:''
            }
        },
        mounted() {
            this.compangLogName = this.cooperationData.logo;
            //
            // import('../../../assets/images/'+this.compangLogName)
            //     .then(img => {
            //         this.companyLogo = img;
            //     })
        },
        components:{

        }
    };
</script>

<style lang="scss">

</style>