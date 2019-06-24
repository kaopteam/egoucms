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
      <el-form label-width="100px" class="demo-ruleForm" :model="params" ref="searchForm" >
        <el-form-item label="会员卡名称" prop="cardName">
          <el-col :span="11">
          <el-input placeholder="会员卡名称" v-model="params.cardName"></el-input>
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

    <div class="table-wrap">
      <cardList :datalist='MembersCardList' v-if='MembersCardList&&MembersCardList.list.length>0'/>
        <div class="no-data" v-else>
          暂时无数据
        </div>
        <el-pagination class="page-wrap"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.MembersCardList.currentPage"
        :page-sizes='this.MembersCardList.pageSize'
        layout="total, prev, pager, next, jumper"
        :total="this.MembersCardList.total">
      </el-pagination>
        <!-- 分页 -->
    </div>
    <!-- 弹出层部分 -->
    <el-dialog title="创建会员卡" :visible.sync="dialogFormVisible">
      <el-form :model="creatCard" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm2">
        <el-form-item label="会员卡名称" prop="cardName">
          <el-input v-model="creatCard.cardName"></el-input>
        </el-form-item>
        <el-form-item label="返现额度" prop="CashBack">
          <el-input v-model.number="creatCard.CashBack" placeholder="返现额度"></el-input>
        </el-form-item>
        <el-form-item label="会员折扣" prop="MemberDiscount">
          <el-input v-model.number="creatCard.MemberDiscount"></el-input>
        </el-form-item>
        <el-form-item label="使用须知" prop="instructions">
           <el-input type="textarea" v-model="creatCard.instructions"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">立即创建</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('creatCardParam')">确 定</el-button>
      </div> -->
    </el-dialog>
  </div>
</template>
<script>
import cardList from '@/components/cardlist.vue'
import {mapState,mapActions} from 'vuex'
export default {
  data () {
    return {
      pageLocation: '会员卡管理',
      currentPath: '/admin',
      formLabelWidth: '120px',
      dialogFormVisible: false,
      // 搜索 参数
      params:{
        cardName:'',
        page:'',
        pageSize:'10',
      },
      creatCard: {
        cardName: '',
        CashBack: '',
        MemberDiscount: '',
        instructions:'',
      },
      rules: {
        cardName: [
          { required: true, message: '请输入会员卡名称', trigger: 'blur' },
          { required: true,min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        CashBack: [
          { required: true, message: '返现不能为空', trigger: 'change' },
          //  { type: 'number', message: '限输入数字，精确到小数点后2位'}
        ],
        MemberDiscount: [
          { required: true, message: '折扣不能为空', trigger: 'blur' },
          // { type: 'number', message: '限输入数字（0-10），精确到小数点后1位'}
        ]
      },
      // responsList
      MembersCardList: {
        "code":200,
        "total":100,
        "totalPage":'1',
        'pageSize': [10, 20, 50, 100, 200],
        "currentPage":1,
        list:[
          {
          "userName" :  'a01',
          "CashBack":100,
          "MemberDiscount":8.5,
          "Binded":100,
          "activated":'20000',
          "CreationTime":'2019-01-18',
          },
          {
          "userName" :  'a01',
          "CashBack":100,
          "MemberDiscount":8.5,
          "Binded":100,
          "activated":'2000',
          "CreationTime":'2019-01-18',
          }
        ]
      },
      // 标头
      // formHeader:[
      //   '会员名称'	,'返现额度',	'会员折扣',	'已绑定',	'已激活',	'创建时间',
      // ], 
     
    }
  },
  components: {
    cardList,
  },
  mounted() {
  //  this.getData()
  },
  // computed:mapState(['initCardData']),
  methods:{
    // ...mapActions(['handleCardData']),
    getData(params) {
      this.$api.getCardManageList(params)
      .then((result)=>{
          console.log(result.data)
          this.MembersCardList =result.data
          // this.handleCardData(result.data)
        })
    },
    submitSearch(){
      console.log(this.$refs['searchForm'],'搜索参数：',this.params)
      this.getData(this.params)
    },
    submitForm() {
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            // console.log(this.ruleForm2);
            this.dialogFormVisible=false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    resetForm() {
      this.$refs["ruleForm"].resetFields();
    },
    // 分页提交
    handleSizeChange(val){
      console.log(val)
    },
    handleCurrentChange(page){
      console.log('cardManagePage:==handleCurrentChange:',page)  
      this.params.page= page
      this.getData(this.params)
    },
  },
  watch: {
      // "$route" (to, from) {
      //   this.currentPath = to.path; //变成绝对路径
      // }
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
.page-wrap{
  // padding:10px 0;
}
</style>
