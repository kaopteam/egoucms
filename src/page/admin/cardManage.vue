<template>
  <div class="rightModule">
    <div class="page-location">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: currentPath }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{pageLocation}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- <div class="search-wrap">
      <search :keyword='keyword'></search>
    </div> -->
    <div class="search-wrap">
      <el-form label-width="100px" class="demo-ruleForm" >
        <el-form-item label="会员卡名称" prop="name">
          <el-col :span="11">
          <el-input placeholder="会员卡名称" v-model="searchKeyword.cardName"></el-input>
          </el-col>
          <el-col :span="11" style="margin-left:1rem">
            <el-button type="primary" @click="submitSearch">查询 </el-button>
          </el-col>
        </el-form-item> 
      
        <el-form-item>
           <el-button type="primary" @click="dialogFormVisible = true">新建</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <cardList :datalist='initData'/>
      <!-- <div class="no-data" v-else>
        暂时无数据
      </div>    -->
    </div>
    
    
    <!-- 弹出层部分 -->
    <el-dialog title="创建会员卡" :visible.sync="dialogFormVisible">
       <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
        <el-form-item label="会员卡名称" prop="name" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      <!-- <el-form :model="form" style="width:90%" :rules="rulesc" ref="ruleFormc" > -->
        <el-form-item label="返现额度" prop="region" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.edu" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员折扣" prop="date1" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.zhekou" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="使用须知" prop="desc" :label-width="formLabelWidth">
          <el-input type="textarea"   v-model="ruleForm.desc"></el-input>
        </el-form-item> 
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import cardList from '@/components/cardlist.vue'
// import search from '@/components/searchMod.vue'
import {mapState,mapActions} from 'vuex'
export default {
  data () {
    return {
      pageLocation: '会员卡管理',
      currentPath: '/',
      searchKeyword:{
        cardName:''
      },
      formLabelWidth: '120px',
      initData:{},
      // thead:[
      //   '会员名称'	,'返现额度',	'会员折扣',	'已绑定',	'已激活',	'创建时间',	'操作'
      // ], 
      // 生成卡字段
      cardData:'',
      dialogTableVisible: false,
      dialogFormVisible: false,
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入会员卡名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        region: [
          { required: false, message: '请输入返现额度', trigger: 'blur' },
          { min: 1, max: 10, message: '请输入合适的值', trigger: 'blur' }
        ],
      }, 
    }
  },
  components: {
    cardList,
    // search
  },
  mounted() {
   this.getData()
  },
  computed:mapState(['initCardData']),
  methods:{
    // ...mapActions(['handleCardData']),
    getData(params) {
      console.log('默认参数：',params)
      this.$api.getCardManageList(params)
      .then((result)=>{
          console.log(result.data)
          this.initData =result.data
          // this.handleCardData(result.data)
        })
    },
    submitSearch(){
      console.log('搜索参数：',this.searchKeyword)
      this.getData(this.searchKeyword)
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm2);
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
