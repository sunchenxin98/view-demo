<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>

<template>
    <div id="login">
        {{msg}}<br/>


        <Input v-model="username" @click="content=''" placeholder="请输入账号" style="width: 300px"></Input><br/>
        <Input type="password" v-model="password" placeholder="请输入密码1" style="width: 300px"></Input><br/>
        <Button type="primary" shape="circle" size="large" style="width: 300px"  @click="getlogin">登录</Button>
        <label>{{content}}</label>
        <router-link to="/login">login</router-link>
        <router-link to="/register">register</router-link>
        <router-link to="/index">index</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:'用户登陆',
                username:'',
                password:'',
                content:''
            };
        },
        methods:{
            getlogin(){
                this.$http.get('login.json').then(response=>{
                    var data=response.data;
                    console.log('username:'+data.username);
                    console.log('password:'+data.password);
                    if(data.username==this.username&&data.password==this.password){
                        this.$router.push({path:'/index'});
                    }else{
                        this.content='密码错误';
                    }
                },response=>{
                    console.log('error'+response);
                });
                console.log('112233');
            }

        }
    };
</script>