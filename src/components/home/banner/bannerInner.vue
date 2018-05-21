<template>
    <div class="banner-container">

        <img :src="bannerItem.bannerImg" alt="banner" class="banner-pic">
        <div class="title">
            <div class="banner-main-title">
                {{bannerItem.mainTitle}}
            </div>
            <div class="banner-subtitle">
               {{bannerItem.subTitle}}
            </div>
        </div>


    </div>
</template>

<script>

    export default {
        props:{
            bannerItem:{
                type:Object
            }
        },
        data(){
            return{

            }
        }
    };
</script>

<style lang="scss">
    .banner-container{
        position: relative;
        max-height: 700px;
        overflow-y: hidden;
        overflow-x:hidden;
        .banner-pic{
            width: 100%;
        }
        .title{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: white;
            .banner-main-title{
                font-size: 20px;
                font-weight: bolder;
            }
            .banner-subtitle{
                font-size: 16px;
                font-weight: bold;
            }

        }
    }

</style>