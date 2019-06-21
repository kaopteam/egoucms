<template>
<div class="leftNav">
  <h5 class="cmsname">e购管理后台</h5>
  <el-menu
    theme="dark" v-bind:router="true"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        default-active="cardManage" 
        style="border-right:none" 
        background-color="#324057"
        text-color="#fff" 
        active-text-color="#20A0FF"> 
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>会员管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="cardManage">卡管理</el-menu-item>
        <el-menu-item index="createCard">卡生成</el-menu-item>
        <el-menu-item index="bindingCard">绑卡记录</el-menu-item>
        <el-menu-item index="activationRecord">激活记录</el-menu-item>
        <el-menu-item index="memberManage">会员管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>渠道管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="agentManage">代理商管理</el-menu-item>
        <el-menu-item index="promoterManage">推广员管理</el-menu-item>
        <el-menu-item index="businessManage">商家管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>分销管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="DRPSet">分销设置</el-menu-item>
        <el-menu-item index="DRPOrder">分销订单</el-menu-item>
        <el-menu-item index="Settlement">结算记录</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</div>
<!-- leftNav -->
</template>
<script>
export default {
  name: 'leftMod',
  // props:[''],
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.leftNav{
  // visibility: hidden;
  h5{
    color:#fff;
    font-size:20px;
    line-height: 28px;
    padding:0 10px;
    display: none;
  }
}
.el-menu{
  border-top:0px solid #fff;
}
.el-submenu {
  text-align: left;
}
</style>
