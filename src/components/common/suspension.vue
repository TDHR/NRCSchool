<template>
    <div class="v-suspension">
        <el-button type="warning" icon="el-icon-service" circle @click="dialogFormVisible = true"></el-button>
        <v-signUp :dialogFormVisible ="dialogFormVisible" :messageType=4 @updateDialogVisible="updateDialogVisibleMethod"></v-signUp>
    </div>
</template>

<script>
    import signUp from './signUp.vue';
    export default {
        data() {
            return {
                dialogFormVisible:false
            }
        },
        methods:{
            updateDialogVisibleMethod (state) {

                this.dialogFormVisible = state
            }
        },
        components: {
            'v-signUp':signUp
        }
    };
</script>

<style lang="scss">
    .v-suspension{
        position: fixed;
        right: 2px;
        top: 60%;
        z-index: 9999;
        .el-icon-phone{
            /*width: 80%;*/
            /*height:80%;*/
            font-size: 20px;
        }
    }
</style>