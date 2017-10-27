<style scoped>
.reregister
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 70px;
}
.login-other{
    float: right;
}
</style>

<template>
    <div class="reregister">

        <Card style="width:320px">
            <div style="text-align:center">
                <h1>后台注册</h1>
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" >
                    <FormItem  prop="username">
                        <Input type="password" v-model="formCustom.username" placeholder="用户名"></Input>
                    </FormItem>
                    <FormItem  prop="passwd">
                        <Input type="password" v-model="formCustom.passwd" placeholder="密码"></Input>
                    </FormItem>
                    <FormItem  prop="passwdCheck">
                        <Input type="password" v-model="formCustom.passwdCheck" placeholder="确认密码"></Input>
                    </FormItem>
                    <FormItem  prop="age">
                        <Input type="text" v-model="formCustom.age" number placeholder="年龄"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                        <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
                    </FormItem>
                    <FormItem>
                        <div class="login-other"><router-link to="/pwd">忘记密码</router-link> <router-link to="/login">登录</router-link>  </div>
                    </FormItem>
                </Form>
            </div>
        </Card>

    </div>
</template>

<script>
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };

            return {
                formCustom: {
                    username:'',
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    username:[
                        {required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    age: [
                        { validator: validateAge, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                });
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    };
</script>