<template>
  <div class="rightModule">
    <div class="page-location">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: currentPath }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{pageLocation}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div> 
    <div class="search-wrap">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-row style="text-align:left">
          <el-form-item label="推广员姓名">
            <el-input v-model="formInline.name" placeholder=""></el-input>
          </el-form-item>
          <!-- <el-form-item label="上级代理">
            <el-input v-model="formInline.kpAccount" placeholder=""></el-input>
          </el-form-item> -->
          <el-form-item label="上级代理">
            <el-select v-model="formInline.superiorAgent" placeholder="上级代理">
              <el-option label="a级" value="0"></el-option>
              <el-option label="b级" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="formInline.state" placeholder="全部">
              <el-option label="正常" value="正常"></el-option>
              <el-option label="禁用" value="禁用"></el-option>
            </el-select>
          </el-form-item>
      </el-row>
        
        <el-col :span='24' style="text-align:left">
           <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button> 
                <el-button type="primary" style="margin-left:20px" @click="onCreate" >新建</el-button>
            </el-form-item>
        </el-col>
      </el-form>
    </div>
    <div style="clear:both"></div>
    <div class="form-box">
       <!-- <div>订单编号  成交金额
（不计运费） 佣金 购买用户 会员卡号 状态 创建时间</div> -->
      <div class="card-list" v-if="this.cardData.list&& this.cardData.list.length>0">
          <el-table
            :data="this.cardData.list"
            style="width: 100%">
              <el-table-column
                label="推广员ID"
                prop="promoterId">
              </el-table-column>
              <el-table-column
                label=" 推广员"
                prop="promoter">
              </el-table-column>
              <el-table-column
                label="所属代理商"
                prop="subordinateAgent">
              </el-table-column>
              <el-table-column
                label="绑定会员卡数"
                prop="cardsNum">
              </el-table-column>
              <el-table-column
                label="已结算佣金（元）"
                prop="settlement">
              </el-table-column>
              <el-table-column
                label="未结算佣金（元）"
                prop="unsettled">
              </el-table-column>
              <el-table-column
                label="分销订单额（元）"
                prop="distribution">
              </el-table-column>
              <el-table-column
                label="状态"
                prop="state">
              </el-table-column>
               <el-table-column
                label="创建时间"
                prop="time">
              </el-table-column>
               <el-table-column
                align="right" width="160">
                <span slot="header" >操作</span>
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                  <el-button type="text" size="small" @click="handleBind(scope.row)">绑定会员卡</el-button>  
                </template>
              </el-table-column>
            </el-table> 
      </div>
      <div class="no-data" v-else>
        暂时无数据
      </div>
      <!-- 表格列表end -->
       <el-pagination class="page-wrap"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.cardData.currentPage"
        :page-sizes='this.cardData.pageSize'
        layout="total, prev, pager, next, jumper"
        :total="this.cardData.total">
      </el-pagination>
    </div>
    
    <!-- 弹出层部分 -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import cardList from '@/components/cardlist.vue'
// import search from '@/components/searchMod.vue'
import {mapState,mapActions} from 'vuex'
export default {
  data () {
    return {
      pageLocation: '推广员管理',
      currentPath: '/admin',
      formInline:{
        name: '',
        date1: '',
        date2: '',
        // kpAccount:' ',
        state:'',
        superiorAgent:''
      },
      cardData:{
        list:[
        {
          promoterId :'010',
          promoter:'10001',
          users:'推广1',
          time:'20190101',
          subordinateAgent:'推广1',
          cardsNum :'20190101',
          settlement :'12',
          unsettled :'100',
          distribution:'10',
           state:'state',
         },
        {
           promoterId :'010',
          promoter:'10001',
          users:'推广1',
          time:'20190101',
          subordinateAgent:'推广1',
          cardsNum :'20190101',
          settlement :'12',
          unsettled :'100',
          distribution:'10',
           state:'state',
        } ],
      "code":200,
      "total":100,
      "totalPage":'1',
      'pageSize': [10, 20, 50, 100, 200],
      "currentPage":1,
      }  
    }
  },
  components: {
    cardList,
    // search
  },
  mounted() {
  //  this.getData()
  },
  computed:mapState(['cardType']),
  methods:{
    onSubmit() {
        console.log('submit!',this.formInline);
    },
    onCreate(){
        this.$router.push({
        path: '/newPromoter'
       }) 
    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    }
  },
  watch: {

  },
}
</script>
<style lang="less" scoped>
@import "~@/assets/css/page.less";
</style>
