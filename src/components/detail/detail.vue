<template>
    <div class="detail-container">
        <!--<div v-if="type === 1" class="detail-banner">-->
            <!--lalal-->
        <!--</div>-->
        <!--<div v-else-if="type === 2" class="detail-banner">-->
            <!--hahahah-->
        <!--</div>-->
        <!--<div v-else-if="type === 3" class="detail-banner">-->
            <!--heiheihei-->
        <!--</div>-->
        <!--<div v-else-if="type === 4" class="detail-banner">-->
            <!--houhouhou-->
        <!--</div>-->
        <v-detailBanner :classType="type"></v-detailBanner>
        <div class="class-content">
            <v-detailSidebar class="class-sidebar" v-if="deviceWidth>=768"></v-detailSidebar>
            <v-detailNavbar class="class-navbar" v-else></v-detailNavbar>
            <router-view :classType="type" class="class-item-content"></router-view>
        </div>
    </div>

</template>

<script>
    import detailSidebar from './detailSidebar.vue';
    import detailBanner from './detailBanner.vue';
    import detailNavbar from './detailNavbar.vue';

    export default {
        data() {
            return{
                type:"",
                deviceWidth:'',
                deviceType:0
            }
        },
        beforeMount() {
            this.getWidth();
            this.getType();
        },
        mounted(){


        },
        methods:{
            getWidth() {

                this.deviceWidth = parseInt(window.screen.width);

            },
            getType() {
                let typeName = this.$route.params.id;
                if(typeName === 1){
                    this.type = "primary"
                }else if(typeName === 2){
                    this.type = "intermediate"
                }else if(typeName === 3){
                    this.type = "senior"
                }else {
                    this.type = "enterprise"
                }

            }
        },
        components:{
            'v-detailSidebar':detailSidebar,
            'v-detailBanner':detailBanner,
            'v-detailNavbar':detailNavbar
        }
    };
</script>

<style lang="scss">
    .detail-container{
        width: 100%;
        .detail-banner{
            width: 100%;
        }
        .class-content{
            display: flex;
            flex-direction: row;
            width: 80%;
            margin:0 auto;
            margin-top: 20px;
            margin-bottom: 20px;
            position: relative;
            .class-sidebar{
                width: 18%;
                position: absolute;
                left: 0;
                top:0;
            }
            .class-item-content{
                width: 80%;
                margin-left:20%;
            }
        }
    }
    @media screen and (max-width: 768px){
        .detail-container{
            .class-content{
                width: 100%;
                margin-left:0;
                margin-top: 0;
                flex-direction: column;
                .class-navbar{

                }
                .class-item-content{
                    width: 90%;
                    margin-left:5%;
                    margin-top:1rem;
                }
            }
        }

    }
</style>