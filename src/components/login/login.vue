<!--登录-->
<template>
    <section class="login-view">
        <div class="login-content">
            <div class="login-item">
                <p>登录 {{nickname}}</p>
            </div>
            <div class="login-item">
                <span class="login-name">手机号:</span>
                <span class="login-value">
                    <el-input v-model="inputName" placeholder="手机号" clearable autoComplete='off'></el-input>
                </span>
            </div>
            <div class="login-item">
                <span class="login-name">密码:</span>
                <span class="login-value">
                    <el-input v-model="inputPsd" placeholder="密码" type="password" clearable autoComplete='off'></el-input>
                </span>
            </div>
            <div class="login-item login-btn">

                <el-button type="primary" @click="login()">确认</el-button>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions,mapGetters} from 'vuex';
    export default {
        name: "login",
        data() {
            return {
                inputName:'',
                inputPsd:'',
                nickname:''
            }
        },
        beforeMount:function() {
            let that = this;
            window.onmessage = function(e){
                e = e || event;
                let userMessge = e.data.user;
                let address = userMessge.address;
                let openid = userMessge.openid;
                let nickname = userMessge.nickname;
                let headimgurl = userMessge.headimgurl;
                that.nickname = nickname;
                console.log(e.data.user);
            }
            // console.log(window.onmessage)
            // console.log($('#test').text());
            // window.onmessage = function (e) {
            //     e = e || event;
            //     console.log('父域获取数据', JSON.parse(e.data));
            // }
        },
        methods:{
            login:function () {
                //账号
                let name = this.inputName;
                //密码
                let psd = this.inputPsd;

                if(!name){
                    alert('请输入手机号');
                    return;
                }
                if(!psd){
                    alert('请输入密码');
                    return;
                }
                let data = new FormData();
                data.append('query','武琦');
                // this.$http.post(`/api/reits_comm//papi/pbrower/getReportLoss`,data)
                //     .then(function (res) {
                //         console.log(1)
                //         console.log(res)
                //     })
                //     .catch(function (error) {
                //         console.log(2)
                //         console.log(error)
                //     })
                let user;
                let userName;
                switch (name) {
                    case '1':
                        user = 'A01';
                        userName = 'writer';
                        break;
                    case '2':
                        user = 'A02';
                        userName = 'writer';
                        break;
                    case '3':
                        user = 'A03';
                        userName = 'writer';
                        break;
                    case '4':
                        user = 'A04';
                        userName = 'writer';
                        break;
                    case '0':
                        user = 'root';
                        userName = 'customs';
                        break;
                    case '11':
                        user = 'supervision';
                        userName = 'supervision';
                        break;
                    default:
                        user = `游客${name}`;
                        userName = null;
                        break;
                }
                this.$http.get(`${this.apiRoot}/reits_comm/papi/pbrower/getReportLoss1`,{
                    params: {
                        query: '武琦'
                    }
                })
                    .then(res => {
                        sessionStorage.userName = userName;
                        sessionStorage.user = user;

                        // console.log(res);
                        this.$store.dispatch('setUser',user);
                        this.$router.push('/index');
                    })
                    .catch(e => console.log(2))
            }
        }
    }
</script>

<style scoped>
    .login-view{
        width: 100%;
        height: 100%;
    }
    .login-content{
        width: 80%;
        margin-left: 10%;
        margin-top:30px;
        /*border:1px solid gray;*/
    }
    .login-item{
        width: 100%;
        height: 40px;
        margin-top: 10%;
        display: flex;
        font-size: 14px;
        justify-content: center;
        align-items: center;
    }
    .login-item p {
        width: 100%;
        font-size:24px;
        text-align: center;

    }
    .login-name{
        flex:1;
        text-align: right;
        padding: 0 8px 0 0;
        /*font-size: 14px;*/
    }
    .login-value{
       flex:4;
        text-align: right;
        /*border:1px solid gray;*/
    }
    .login-btn{
        margin-top: 20%;
    }

</style>