<!--填写页面-->
<template>
    <div class="writer-container">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="填写项一">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="填写项二">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="填写项三">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="submitContent" class="submit">提交</el-button>

    </div>
</template>

<script>
    export default {
        name: "write",
        props:{
            id:{
                type:Number
            }
        },
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                itemId:null
            };
        },
        beforeMount:function() {
            let itemId = this.$route.params.id;
            this.itemId = itemId;
        },
        methods:{
            submitContent:function () {
                this.$router.push('/customs')
            },
        }
    }
</script>

<style scoped>
    .submit{
        margin-top: 20px;
    }
    .writer-container{
        margin:20px;
    }
</style>