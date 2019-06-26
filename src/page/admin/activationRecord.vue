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
        
        <el-form-item label="会员卡号">
          <el-input v-model="formInline.cardNum" placeholder=""></el-input>
        </el-form-item>

        <el-form-item label="会员卡名称">
          <el-input v-model="formInline.cardName" placeholder=""></el-input>
        </el-form-item>
     
        <el-form-item label="起止时间">
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择开始日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2" style="text-align: center;">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-date-picker type="date" placeholder="选择结束日期" v-model="formInline.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-col :span='24' style="text-align:left">
           <el-form-item label="会员手机号">
              <el-input v-model="formInline.telphone" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="状态" style="margin-left:30px">
              <el-select v-model="formInline.state" placeholder="全部">
                <el-option label="未结算" value="0"></el-option>
                <el-option label="已结算" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="margin-left:30px;">
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-col>
      </el-form>
    </div>
    <div style="clear:both"></div>
    <div class="form-box">
      <!-- 表格 -->
      <div class="card-list" v-if="this.cardData.list&& this.cardData.list.length>0">
          <el-table
            :data="this.cardData.list"
            style="width: 100%">
              <el-table-column
                label="会员卡号"
                prop="merberCard">
              </el-table-column>
              <el-table-column
                label="会员卡名称"
                prop="merberName">
              </el-table-column>
              <el-table-column
                label="激活用户"
                prop="activateUsers">
              </el-table-column>
              <el-table-column
                label="返现额度"
                prop="cashReturn">
              </el-table-column>
              <el-table-column
                label="剩余额度"
                prop="Surplus">
              </el-table-column>
              <el-table-column
                label="状态"
                prop="state">
              </el-table-column>
              <el-table-column
                label="激活时间"
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
      pageLocation: '激活记录',
      currentPath: '/admin',
      keyword:{
        // telphone:'分销订单',
      },
      formInline:{
        cardNum: '', //会员卡号 
        cardName:'', //会员卡名称
        date1: '', // 激活时间
        date2: '', 
        telphone:' ',  // 会员手机号
        state: '',  //状态
      },
      cardData:{
        list:[
        {
          merberCard:'10001',
          merberName:'3000',
          activateUsers:'fsd',
          cashReturn:'1000',
          Surplus:'0.10',
          state:'state',
          time:'20190101',
         },
        {
         merberCard:'10001',
          merberName:'3000',
          activateUsers:'fsd',
          cashReturn:'1000',
          Surplus:'0.10',
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
