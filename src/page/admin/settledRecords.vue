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
         <el-col :span="12">
        <el-form-item label="订单编号">
          <el-input v-model="formInline.orderId" placeholder=""></el-input>
        </el-form-item>

        <el-form-item label="靠谱账号">
          <el-input v-model="formInline.kpAccount" placeholder=""></el-input>
        </el-form-item>
        </el-col>
        
        <el-form-item label="结算时间">
          <el-col :span="8">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择开始日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2" style="text-align: center;">-</el-col>
          <el-col :span="8">
            <el-form-item prop="date2">
              <el-date-picker type="date" placeholder="选择结束日期" v-model="formInline.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
         
        <el-col :span='24' style="text-align:left">
           <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button> <el-button type="primary" style="margin-left:20px" @click="onExport">导出</el-button>
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
                label="订单编号"
                prop="orderId">
              </el-table-column>
              <el-table-column
                label=" 成交金额（不计运费）"
                prop="amount">
              </el-table-column>
              <el-table-column
                label="佣金"
                prop="commission">
              </el-table-column>
              <el-table-column
                label="购买用户"
                prop="users">
              </el-table-column>
              <el-table-column
                label="会员卡号"
                prop="cardNum">
              </el-table-column>
              <el-table-column
                label="状态"
                prop="state">
              </el-table-column>
              <el-table-column
                label="创建时间"
                prop="time">
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
      pageLocation: '结算记录',
      currentPath: '/admin',
      formInline:{
        orderId: '',
        date1: '',
        date2: '',
        kpAccount:' ',
      },
      cardData:{
        list:[
        {
          orderId:'10001',
          amount:'3000.00',
          commission:'0.10',
          users:'推广1',
          cardNum:'20190101',
          state:'state',
          time:'20190101',
         },
        {
          orderId:'10001',
          amount:'3000.00',
          commission:'0.10',
          users:'推广1',
          cardNum:'20190101',
          state:'state',
          time:'20190101',
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
    onExport(){},
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
