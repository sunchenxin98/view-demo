<style scoped>
.layout{
    border:0px solid #d7dde4;
}
</style>
<template>
    <div class="layout">
            <Menu mode="horizontal" :theme="theme1" active-name="1"  @on-select="handleSelect"  >
                <Row type="flex" justify="center" class="code-row-bg">
                    <Col :xs="2" :sm="4" :md="6" :lg="8">
                    标题
                    </Col>
                    <Col :xs="20" :sm="16" :md="12" :lg="15">
                        <MenuItem name="/new">
                            <Icon type="ios-paper"></Icon>
                            内容管理
                        </MenuItem>
                        <MenuItem name="/new2">
                            <Icon type="ios-people"></Icon>
                            用户管理
                        </MenuItem>
                        <Submenu name="/new3">
                            <template slot="title">
                                <Icon type="stats-bars"></Icon>
                                统计分析
                            </template>
                            <MenuGroup title="使用">
                                <MenuItem name="3-1">新增和启动</MenuItem>
                                <MenuItem name="3-2">活跃分析</MenuItem>
                                <MenuItem name="3-3">时段分析</MenuItem>
                            </MenuGroup>
                            <MenuGroup title="留存">
                                <MenuItem name="3-4">用户留存</MenuItem>
                                <MenuItem name="3-5">流失用户</MenuItem>
                            </MenuGroup>
                        </Submenu>
                        <MenuItem name="/new4">
                            <Icon type="settings"></Icon>
                            综合设置
                        </MenuItem>
                    </Col>
                    <Col :xs="2" :sm="4" :md="6" :lg="1">
                                <MenuItem name="/new3" style="padding-top: 8px;height: 60px;">
                                        <Avatar size="large">1</Avatar>
                                </MenuItem>
                    </Col>
                </Row>

            </Menu>
        <br>
        <p>切换主题</p>
        <RadioGroup v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
            <router-view></router-view>
        </RadioGroup>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            };
        },
        methods:{
            handleSelect(active) {
                this.$router.push({path:'/index'+active});
                console.log('/index'+active);
            }
        }
    };
</script>