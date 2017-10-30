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
.cruuent{
    color:red;
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
                <Col :xs="23" :sm="16" :md="12" :lg="23"  class="tags-inner-scroll-body" id="myData" >
                     <Tag   type="dot" v-for="item in count" :key="item"  :name="item" closable @on-close="handleClose2"
                            @click.native="linkTo(item)" :color="(item===currentPageName?'blue':'default')" >标签{{ item + 1 }} </Tag>

                </Col>
                <Col :xs="1" :sm="16" :md="12" :lg="1">
                    <Dropdown  @on-click="handleTagsOption">
                        <Button size="small" type="primary" @click="items">
                            标签选项
                            <Icon type="arrow-down-b"></Icon>
                        </Button>
                        <DropdownMenu slot="list">
                            <DropdownItem name="clearAll" >关闭所有</DropdownItem>
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

            <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>
        </RadioGroup>
    </div>
</template>
<script>
    import Dropdown from '../../node_modules/iview/src/components/dropdown/dropdown.vue';

    export default {
        components: {Dropdown},
        data () {
            return {
                theme1: 'light',
                count: [0, 1, 2],
                currentPageName: -1
            };
        },
        watch: {

        },
        methods:{
            handleSelect(active) {
                this.$router.push({path:'/index'+active});
                console.log('/index'+active);
            },
            items() {
                document.getElementById('myData').scrollLeft = document.getElementById('myData').scrollWidth;
            },
            handleClose2 (event, name) {
                const index = this.count.indexOf(name);
                this.count.splice(index, 1);
            },
            handleAdd () {
                if (this.count.length) {
                    this.count.push(this.count[this.count.length - 1] + 1);
                } else {
                    this.count.push(0);
                }

            },
            linkTo(item) {
                this.currentPageName=item;
                console.log();
                //console.log(item);
            },
            handleTagsOption (type) {
                if (type === 'clearAll') {
                    this.count=[];
                    this.currentPageName=-1;
                } else if(this.currentPageName===-1){
                    this.count=[];
                }else{
                    this.count=[];
                    this.count.push(this.currentPageName);
                }
                this.tagBodyLeft = 0;
            },
        },
        beforeUpdate() {
            //alert('更新前状态');
            //console.group('beforeUpdate 更新前状态===============》'); //这里指的是页面渲染新数据之前

        },updated() {
            //console.group('updated 更新完成状态===============》');
            this.items();
            //document.getElementById('myData').scrollLeft = document.getElementById('myData').scrollWidth;
        },

    };
</script>