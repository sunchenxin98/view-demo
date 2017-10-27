<style scoped>
.login{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 70px;
}
.login-other{
   float: right;
}
foot{
   text-align: center;
}
</style>

<template>
    <div class="login">
        <Card style="width:320px">
            <div style="text-align:center">
                <h1>后台登录</h1>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="Username" style="width:280px;"></Input>
                    </FormItem><br/>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="Password" style="width:280px;"></Input>
                    </FormItem><br/>
                    <FormItem>
                        <Button type="primary" size="large" @click="handleSubmit('formInline')" style="width:280px;">登录</Button>
                        <div class="login-other"><router-link to="/pwd">忘记密码</router-link> <router-link to="/register">注册账号</router-link>  </div>
                    </FormItem>
                </Form>
            </div>
          </Card>

        <div class="foot">
            @2017-2017
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                        this.$router.push({path:'/index'});
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                });
            }
        }
    };
</script>