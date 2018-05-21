<template>
    <div class="banner-container">
        <img :src="bannerImg" alt="banner" class="banner-pic">
        <div class="detail-banner-text">
            <div class="detail-banner-name">{{bannerData.name}}</div>
            <div class="detail-banner-brief">{{bannerData.brief}}</div>
            <div class="detail-banner-footer">
                <span class="detail-banner-time">时间：{{bannerData.time}}</span>
                <span class="detail-banner-position">地点：{{bannerData.position}}</span>
                <el-button type="primary" @click="dialogFormVisible  = true">立即报名</el-button>
            </div>

        </div>
        <v-signUp :dialogFormVisible ="dialogFormVisible" :messageType="classTypeNumber" @updateDialogVisible="updateDialogVisibleMethod"></v-signUp>
    </div>
</template>

<script>
//    import a from '../../assets/images/banner1.jpg'
import signUp from '../common/signUp.vue';
    export default {
        props:{
            classType:{
                type:String
            }
        },
        data() {
          return {
              bannerData:'',
              bannerImg:'',
              dialogFormVisible :false,
              classTypeNumber:0
          }
        },
        beforeMount() {


        },
        mounted(){
                this.getType();
                import('../../assets/data/class/'+this.classType+'/banner.json')
                    .then(data => {
                        this.bannerData = data.data;
                        import('../../assets/images/'+this.bannerData.bannerImg)
                            .then(img => {
                                this.bannerImg = img;
                            })
                    })

        },
        methods:{
            updateDialogVisibleMethod (state) {

                this.dialogFormVisible = state
            },
            getType() {
                if(this.classType === 'primary'){
                    this.classTypeNumber = 1;
                }else if(this.classType === 'intermediate'){
                    this.classTypeNumber = 2;
                }else if(this.classTypeNumber === "senior"){
                    this.classTypeNumber = 3;
                }else {
                    this.classTypeNumber = 4;
                }
            }
        },
        components:{
            'v-signUp':signUp
        }
    };
</script>

<style lang="scss">
    .banner-container{
        img{
            display: block;
        }

        .detail-banner-text{
            width: 80%;
            height: 80%;
            position: absolute;
            color: #FFF;
            left: 10%;
            top:10%;
            z-index: 999;
        }
    }
</style>