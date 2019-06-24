<template>
  <div class="rightModule">
    <div class="page-location">
        <!-- <h1 :data-name='pageLocation'>{{ pageLocation }}</h1> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: currentPath }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{pageLocation}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- <div class="search-wrap">
      <search :keyword='keyword'></search>
    </div> -->
    <div class="search-wrap">
      <!-- <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-col :span="11">
            <el-form-item label="会员卡号段" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="11" style="margin-left:1rem">
           <el-form-item label="商家名称"  >
          <el-input  ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" style="margin-left:1rem">
           <el-form-item label="会员卡名称"  >
          <el-input  ></el-input>
          </el-form-item>
        </el-col>
        
         <el-col :span="11">
             <el-form-item label="推广员姓名" prop="region">
           <el-input v-model="ruleForm.region"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" style="margin-left:1rem">
          <el-form-item label="代理商名称" prop="type">
           <el-input v-model="ruleForm.type"></el-input>
          </el-form-item>
        </el-col>
         
         <el-form-item label="绑定时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择开始日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1" style="text-align: center;">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-date-picker type="date" placeholder="选择结束日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">查询 </el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form> -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-col :span="8">
        <el-form-item label="会员卡号段">
          <el-input v-model="formInline.CardNubSection" placeholder="会员卡号段"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="8">
        <el-form-item label="会员卡名称">
          <el-input v-model="formInline.cardName" placeholder="会员卡名称"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="8">
        <el-form-item label="商家名称">
          <el-input v-model="formInline.BusinessName" placeholder="商家名称"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="8">
        <el-form-item label="代理商名称">
          <el-input v-model="formInline.AgentName" placeholder="推广员姓名"></el-input>
        </el-form-item>
        </el-col>
        
          <el-form-item label="绑定时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择开始日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1" style="text-align: center;">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-date-picker type="date" placeholder="选择结束日期" v-model="formInline.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-col :span="7">
        <el-form-item >
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
         </el-col>
      </el-form>
    </div>
    <div style="clear:both"></div>
    <div>
      <!-- <cardList v-if="cardData&&cardData.length>0" :dataList='cardType' :dataDefault='this.thead'/> -->
      <div class="card-list" v-if="this.cardData.list&& this.cardData.list.length>0">
          <el-table
            :data="this.cardData.list"
            style="width: 100%">
              <el-table-column
                label="会员卡号"
                prop="cardNum">
              </el-table-column>
              <el-table-column
                label="会员卡号名称"
                prop="cardName">
              </el-table-column>
              <el-table-column
                label="绑定商家"
                prop="businessName">
              </el-table-column>
              <el-table-column
                label="绑定推广员"
                prop="promoterName">
              </el-table-column>
              <el-table-column
                label="绑定代理商"
                prop="agentName">
              </el-table-column>
              <el-table-column
                label="最后绑定时间"
                prop="bindingTime">
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
      pageLocation: '绑卡记录',
      currentPath: '/admin',
      keyword:{
        value:'绑卡记录'
      },
      formInline:{
        CardNubSection:'',
        cardName: '',
        BusinessName:'',
        AgentName:'',
        // BindingTime:'',
        date1: '',
        date2: '',
      },
      cardData:{
        list:[
        {
        cardNum:'10001',
        cardName: 'name',
        businessName:'01商家',
        agentName:'01',
        promoterName:'推广1',
        bindingTime:'20190101',
         },
        {
          cardNum:'10001',
          cardName: 'name',
          businessName:'01商家',
          agentName:'01',
          promoterName:'推广1',
          bindingTime:'20190101',
        } ],
      "code":200,
      "total":100,
      "totalPage":'1',
      'pageSize': [10, 20, 50, 100, 200],
      "currentPage":1,
      }
      // dialogTableVisible: false,
      // dialogFormVisible: false,
      // ruleForm: {
      //   name: '',
      //   region: '',
      //   date1: '',
      //   date2: '',
      //   sjname: false,
      //   type: '',
      //   resource: '',
      //   desc: ''
      // },
        
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
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.dialogFormVisible=false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onSubmit() {
        console.log('submit!',this.formInline);
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
<style lang="less">
.Pagehtml {
  img {
    border:1px solid red;
    width:100% !important;
    height:inherit !important;
    
  }
}
.no-data{
  text-align: cetner;
  padding:1rem;
}
.page-location{
  text-align: left;
}
.el-breadcrumb{
  padding-bottom:1rem;
}
.el-form-item{
  text-align: left;
}
</style>
