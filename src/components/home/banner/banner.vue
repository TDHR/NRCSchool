<template>

    <swiper :options="swiperOption" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide v-for="item in bannerList" :key="item.id">
            <v-bannerInner :bannerItem="item"></v-bannerInner>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

</template>

<script>
    import bannerInner from './bannerInner.vue';
    import 'swiper/dist/css/swiper.css';
    import banner1 from '../../../assets/images/banner1.jpg';
    import banner2 from '../../../assets/images/banner2.jpg';
    import banner3 from '../../../assets/images/banner1.jpg';

    export default {
        data() {
            return {
                bannerList:[
                    {
                        id:1,
                        bannerImg:banner1,
                        mainTitle:'NRC区块链学院区块链技术应用与投资特训营为您而来',
                        subTitle:'主办：《经济》杂志社金融发展研究院   协办：NRC新世界城'
                     },
                    {
                        id:2,
                        bannerImg:banner2,
                        mainTitle:'从0到1，NRC区块链学院带你飞',
                        subTitle:''
                    },
                    {
                        id:3,
                        bannerImg:banner3,
                        mainTitle:'在NRC区块链学院，预见未来更好的自己',
                        subTitle:''
                    }
                ],
                swiperOption:{
                    autoplay : true,
                    speed:2000,
                    loop:true,
                    autoHeight: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    },
                    navigation:{
                        nextEl:'.swiper-button-next',//上一张
                        prevEl:'.swiper-button-prev',//下一张
                    }
                }
            }
        },
        components:{
            'v-bannerInner':bannerInner
        }
    };
</script>

<style lang="scss">

    .swiper-pagination-bullet{
        background:gray;
    }
    .swiper-pagination-bullet-active {

        background: #007aff;
    }

</style>