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
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
          <el-col :span="8">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择开始日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1" style="text-align: center;">-</el-col>
          <el-col :span="8">
            <el-form-item prop="date2">
              <el-date-picker type="date" placeholder="选择结束日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
              <!-- <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker> -->
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">查询 </el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <cardList v-if="cardType&&cardType.length>0" :dataList='cardType' :dataDefault='this.thead'/>
      <div class="no-data" v-else>
        暂时无数据
      </div>   
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
      currentPath: '/',
      thead:[
        '会员名称'	,'返现额度',	'会员折扣',	'已绑定',	'已激活',	'创建时间',	'操作'
      ], 
      keyword:{
        value:'绑卡记录'
      },
      cardData:'',
        dialogTableVisible: false,
        dialogFormVisible: false,
         ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          sjname: false,
          type: '',
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          // region: [
          //   { required: true, message: '请选择活动区域', trigger: 'change' }
          // ],
          // date1: [
          //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          // ],
          // date2: [
          //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          // ],
          // type: [
          //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          // ],
          // resource: [
          //   { required: true, message: '请选择活动资源', trigger: 'change' }
          // ],
          // desc: [
          //   { required: true, message: '请填写活动形式', trigger: 'blur' }
          // ]
      }
    }
  },
  components: {
    cardList,
    // search
  },
  mounted() {
   this.getData()
  },
  computed:mapState(['cardType']),
  methods:{
    ...mapActions(['handleCardData']),
    getData() {
      this.handleCardData()
    },
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
   
  },
  watch: {
      "$route" (to, from) {
        this.currentPath = to.path; //变成绝对路径
      }
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
