<style scoped>
.layout{
    border:0px solid #d7dde4;
}
.tags-inner-scroll-body{
    /*position: absolute;*/
    padding: 2px 10px;
    overflow:hidden;
    white-space: nowrap;
    transition: left .3s ease;

}
/* for Chrome */
.tags-inner-scroll-body::-webkit-scrollbar {
    /*display: none;*/
}
</style>
<template>
    <div class="layout"  style="background-color:rgb(239,239,240)">
            <Menu mode="horizontal" :theme="theme1" active-name="1"  @on-select="handleSelect"  >
                <Row type="flex" justify="center" class="code-row-bg">
                    <Col :xs="2" :sm="4" :md="6" :lg="8">
                    标题
                    </Col>
                    <Col :xs="20" :sm="16" :md="12" :lg="14">
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
                    <Col :xs="2" :sm="4" :md="6" :lg="2">

                                <Submenu name="/new3">
                                    <template slot="title">
                                        超管理员
                                    </template>
                                    <MenuGroup title="设置">
                                        <MenuItem name="3-1">新增和启动</MenuItem>
                                        <MenuItem name="3-2"><Icon type="wrench"></Icon>系统设置</MenuItem>
                                        <MenuItem name="3-3"><Icon type="locked"></Icon>锁屏</MenuItem>
                                    </MenuGroup>
                                    <MenuGroup title="退出">
                                        <MenuItem name="3-4"> <Icon type="ios-people"></Icon>用户留存</MenuItem>
                                        <MenuItem name="3-5"><Icon type="close-round"></Icon> 安全退出</MenuItem>
                                    </MenuGroup>
                                </Submenu>
                            <div style="padding-top: 6px;">
                                <Avatar size="large">张三</Avatar>
                            </div>

                    </Col>
                </Row>

            </Menu>
        <br>


        <Row type="flex" justify="start" class="code-row-bg ">
            <Col :xs="23" :sm="16" :md="12" :lg="23" style="overflow:scroll;" class="tags-inner-scroll-body">
                <Tag type="dot" closable color="green">标签二</Tag>
                <Tag type="dot" closable color="yellow">标签三</Tag>
                <Tag type="dot" closable color="default">标签三</Tag>
                <Tag type="dot" closable color="blue">标签一</Tag>
                <Tag type="dot" closable color="green">标签二</Tag>
                <Tag type="dot" closable color="yellow">标签三</Tag>
                <Tag type="dot" closable color="default">标签三</Tag>
                <Tag type="dot" closable color="blue">标签一</Tag>
                <Tag type="dot" closable color="green">标签二</Tag>
                <Tag type="dot" closable color="yellow">标签三</Tag>
                <Tag type="dot" closable color="default">标签三</Tag>
                <Tag type="dot" closable color="yellow">标签三</Tag>
                <Tag type="dot" closable color="green">标签二</Tag>
                <Tag type="dot" closable color="yellow">标签三</Tag>
                <Tag type="dot" closable color="green">标签二</Tag>
                <Tag type="dot" closable color="yellow">标签三</Tag>
                <Tag type="dot" closable color="default">标签三</Tag>
                <Tag type="dot" closable color="yellow">标签三</Tag>
                <Tag type="dot" closable color="green">标签二</Tag>
                <Tag type="dot" closable color="yellow">标签三</Tag>
                <Tag type="dot" closable color="green">标签二</Tag>
                <Tag type="dot" closable color="yellow">标签三</Tag>
                <Tag type="dot" closable color="default">标签三</Tag>
                <Tag type="dot" closable color="yellow">标签三</Tag>
                <Tag type="dot" closable color="green">标签二</Tag>
                <Tag type="dot" closable color="yellow">标签三</Tag>
            </Col>
            <Col :xs="1" :sm="16" :md="12" :lg="1">
                <Dropdown >
                    <Button size="small" type="primary">
                        标签选项
                        <Icon type="arrow-down-b"></Icon>
                    </Button>
                    <DropdownMenu slot="list">
                        <DropdownItem name="clearAll">关闭所有</DropdownItem>
                        <DropdownItem name="clearOthers">关闭其他</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
             </Col>
        </Row>



<br/><br/><br/>
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
    import Dropdown from '../../node_modules/iview/src/components/dropdown/dropdown.vue';

    export default {
        components: {Dropdown},
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