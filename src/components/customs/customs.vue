<!--海关用户可以看到的页面-->
<template>
    <div>
        <div class="placeholder">
            --其他内容占位符--
        </div>
        <v-report :userAuth="auth"></v-report>
        <div>
            <!--识别二维码后的页面-->
        </div>
    </div>

</template>

<script>
    import reportList from '../common/reportList.vue';
    export default {
        name: "customs",
        data(){
            return {
                auth:'root'
            }
        },
        beforeMount:function(){
            let authName = sessionStorage.userName;
            this.auth = authName;
        },
        components:{
            'v-report':reportList,
        }
    }
</script>

<style scoped>
    .placeholder{
        width: 100%;
        height: 150px;
        border:1px dashed gray;
        margin-bottom: 20px;
    }
</style>