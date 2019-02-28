<template>
    <div>
        <div>合作企业</div>
        <div>
            <v-cooperationInner v-for="item in cooperationList" :key="item.id" :cooperationData="item"></v-cooperationInner>
        </div>

    </div>
</template>

<script>
    import cooperationInner from './cooperationInner.vue';
//    import a from '../../../assets/data/cooperation/coperation.json'
    export default {
        data() {
            return {
                cooperationList:''
            }
        },
        mounted () {
            // import('../../../assets/data/cooperation/coperation.json')
            //     .then(data =>{
            //         this.cooperationList = data.data
            //     })
        },
        components:{
            'v-cooperationInner':cooperationInner
        }
    };
</script>

<style lang="scss">

</style>