<!--海关配置报关材料-->
<template>
    <el-container>
        <el-header>选择报关文件</el-header>
        <el-main>
            <div>
                <el-button type="info" plain class="instrument">三天通关</el-button>
            </div>
            <div>
                <el-button type="info" plain class="instrument">七天通关</el-button>
            </div>
        </el-main>
    </el-container>
    <!--<div>-->
        <!--<div>-->
            <!--选择报关文件-->
        <!--</div>-->
        <!--<div></div>-->
    <!--</div>-->
</template>

<script>
    export default {
        name: "declare",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    .instrument{
        width: 80%;
    }
</style>