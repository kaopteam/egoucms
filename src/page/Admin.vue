<template lang="html">
  <el-row class="panel">
    <el-row class="top headNav">
      <el-col :span='23' class="panel-top" :push="1">
        <!-- push就是相对定位了 -->
        <div></div>
        <el-col :span='24' class='rightbar'>
          <el-button type="text" @click="loginout">注销</el-button>
        </el-col>
      </el-col>
    </el-row>
    <!-- 顶部导航结束 -->
    <el-row class="panel-center">
      <el-col :span="5">
        <leftModule :userLevel="level"></leftModule>
      </el-col>
      <!-- 左侧导航结束 -->
      <el-col :span='19' class="panel-c-c">
        <router-view></router-view>
      </el-col>
      <!--  右侧内容区-->
    </el-row>
  </el-row>
</template>

<script>
import leftModule from '@/components/leftModule.vue'
  // import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        currentPath: '/admin/articleList',
        currentPathNameParent: '管理面板',
        currentPathName: '文章管理',
        level:'A'
      }
    },
    components:{
      leftModule
    },
    methods: {
      loginout() {
        this.$confirm('确认退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('UserLogout')
        }).catch(() => {})
      },
      toHome() {
        this.$router.push({
          path: '/'
        });
      }
    },
    watch: {
      "$route" (to, from) {
        this.currentPath = to.path; //变成绝对路径
        this.currentPathName = to.name //匹配的完整的带子路由的name
      }
    },
  }
</script>

<style lang="css" scoped>
  .panel {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #1F2D3D;
  }
  .panel-top {
    height: 60px;
    line-height: 60px;
    background: #1F2D3D;
    color: #c0ccda;
  }
  .panel-top .rightbar {
    text-align: right;
    padding-right: 20px;
  }
  .panel-center {
    background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    width: 100%;
    overflow: hidden;
    /*最外层要hidden*/
    /*这是行，绝对定位之后没有宽度因此必须设置width*/
  }
  .breadcrumb {
    margin-bottom: 15px;
  }
  .panel-c-c {
    /*这是列，因为已经有了列的宽度因此无需设置width*/
    background: #f1f2f7;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    overflow-y: scroll;
    /*内层设置滚动*/
    padding: 30px;
  }
  .rightbar{
    text-align: right;
  }
</style>
