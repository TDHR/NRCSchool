<template>
  <div id="app">
    <v-header></v-header>
    <!--<v-suspension></v-suspension>-->
    <router-view></router-view>
    <!--<div>-->
      <!--<el-button type="primary"  @click="dialogFormVisible  = true">主要按钮</el-button>-->
    <!--</div>-->
    <!--<v-signUp :dialogFormVisible ="dialogFormVisible" @updateDialogVisible="updateDialogVisibleMethod"></v-signUp>-->

    <!--<v-footer></v-footer>-->
  </div>
</template>

<script>
  import header from './components/common/header.vue';
  import signUp from './components/common/signUp.vue';
  import suspension from './components/common/suspension.vue';
  import footer from './components/common/footer.vue';


export default {
    data() {
      return {
          dialogFormVisible :false
      }
    },
    mounted(){

    },
    methods: {
      startHacking () {
        console.log(this.dialogFormVisible )
      },
      updateDialogVisibleMethod (state) {

          this.dialogFormVisible = state
      }
    },
    components: {
        'v-header': header,
        'v-signUp': signUp,
        'v-suspension': suspension,
        'v-footer':footer,

    }
}
</script>

<style lang="scss">

    body{
      margin:0;
      overflow-x: hidden;
      min-height: 100%;
      #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
      }
    }

</style>
