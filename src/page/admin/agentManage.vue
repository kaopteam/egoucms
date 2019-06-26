<template>
   <div class="rightModule">
    <div class="page-location">
          <!-- <h1 :data-name='pageLocation'>{{ pageLocation }}</h1> -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: currentPath }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{pageLocation}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <!-- 页头位置end -->

     <div class="search-wrap">
      <el-form label-width="100px" class="demo-ruleForm" :model="params" ref="ruleForm2" >
        <el-form-item label="代理商名称" prop="name">
          <el-col :span="6">
          <el-input v-model="params.name"></el-input>
          </el-col>
        </el-form-item> 
        <el-form-item label="代理区域" >
          <el-col :span="2">
            <el-select v-model="params.province" placeholder="省">
              <el-option label="城市省1" value="城市省1"></el-option>
              <el-option label="城市省1" value="城市省12"></el-option>
            </el-select>
          </el-col>
          <el-col :span="2" style="margin-left:10px">
            <el-select v-model="params.city" placeholder="城市">
              <el-option label="shanghai" value="shanghai"></el-option>
              <el-option label="chasha" value="chasha"></el-option>
            </el-select>
          </el-col>
          <el-col :span="2" style="margin-left:10px">
            <el-select v-model="params.county" placeholder="区/县">
              <el-option label="区/县1" value="区/县1"></el-option>
              <el-option label="区/县12" value="区/县2"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="代理级别" prop="agentLevel">
          <el-select v-model="params.agentLevel" placeholder="代理级别">
            <el-option label="a" value="a"></el-option>
            <el-option label="b" value="b"></el-option>
          </el-select>
          <!-- <el-cascader :options="options" clearable></el-cascader> -->
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="params.state" placeholder="" >
            <el-option label="开放" value="shanghai"></el-option>
            <el-option label="开放2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-col :span="6" >
            <el-button type="primary" @click="handleSearch('ruleForm2')">查询 </el-button>
          </el-col>
           <el-button type="primary"  @click="newAgentManage()">新建</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 搜索部分end -->

     <div class="card-list" v-if="this.cardData.list&& this.cardData.list.length>0">
          <el-table
            :data="this.cardData.list"
            style="width: 100%">
              <el-table-column
                label="代理商ID"
                prop="id">
              </el-table-column>
              <el-table-column
                label="代理商名称"
                prop="name">
              </el-table-column>
              <el-table-column
                label="代理级别"
                prop="Level">
              </el-table-column>
              <el-table-column
                label="代理城市"
                prop="city">
              </el-table-column>
              <el-table-column
                label="代理区/县"
                prop="county">
              </el-table-column>
              <el-table-column
                label="绑定会员卡数"
                prop="bindMemberCardNum">
              </el-table-column>
              <el-table-column
                label="已结算佣金（元）"
                prop="Settled">
              </el-table-column>
              <el-table-column
                label="未结算佣金（元）"
                prop="distributionAmount">
              </el-table-column>
              <el-table-column
                label="状态"
                prop="state">
              </el-table-column>
              <el-table-column
                label="创建时间"
                prop="creatTime">
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
    <!-- <div class="no-data" v-else>
      暂时无数据
    </div> -->
    <!-- 表格列表end -->
       <el-pagination class="page-wrap"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.cardData.currentPage"
        :page-sizes='this.cardData.pageSize'
        layout="total, prev, pager, next, jumper"
        :total="this.cardData.total">
      </el-pagination>
      <!-- 分页部分内容end -->

       <!-- 弹出层部分 -->
    <el-dialog title="绑定会员卡" :visible.sync="dialogFormVisible">
       <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
        <el-form-item label="会员卡号" required :label-width="formLabelWidth">
        <el-col :span="11">
          <el-form-item prop="num1">
           <el-input v-model="ruleForm.num1"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2" style="text-align:center">-</el-col>
        <el-col :span="11">
          <el-form-item prop="num2">
           <el-input v-model="ruleForm.num2"></el-input>
          </el-form-item>
        </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">绑 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  // name:'代理商管理',
  data(){
    return {
      pageLocation: '代理商管理',
      currentPath: '/admin',
      dialogFormVisible: false,
      formLabelWidth: '120px',
      cardData:{
        list:[
        {
        id:'010',
        name:'A014dfsd',
        Level: 'A',
        city:'长沙',
        county:'大同县',
        bindMemberCardNum:'1000',
        Settled:'已经结算拥金10',
        bindingTime:'20190101',
        unsettledAccounts:'203',
        distributionAmount:'20015',
        state:'状态',
        creatTime:'2019-01-12 16:45:23'
         },
        {
         id:'010',
          name:'A014dfsd',
          Level: 'A',
          city:'长沙',
          county:'大同县',
          bindMemberCardNum:'1000',
          Settled:'已经结算拥金10',
          bindingTime:'20190101',
          unsettledAccounts:'203',
          distributionAmount:'20015',
          state:'状态',
          creatTime:'2019-01-12 16:45:23'
        } ],
      "code":200,
      "total":100,
      "totalPage":'1',
      'pageSize': [10, 20, 50, 100, 200],
      "currentPage":1,
      },
      // 搜索的关键字
      params: {
        name: '',
        // agentRegion :'',
        agentLevel:'',
        state:'',
        city:'',
        county:'',
        province:'',
      },
      ruleForm: {
          num1: '',
          num2: '',
      },
      // 绑定会员的检验
      rules: {
        num1: [
          { required: true, message: '请输入正确的值', trigger: 'blur' },
          { min: 1, max: 10, message: '只能输入正整数，结束值不能小于起始值', trigger: 'blur' }
        ],
        num2: [
          { required: true, message: '请输入正确的值', trigger: 'blur' },
          { min: 1, max: 10, message: '只能输入正整数，结束值不能小于起始值', trigger: 'blur' }
        ],
      },
    }
  }, 
  methods:{
    // 点击分页操作
    handleCurrentChange(){

    },
    handleSizeChange(){},
    // 搜索
    handleSearch(){
      console.log('提交代理商搜索',this.params)
    },
    // 绑定会员卡 参数提交
    submitForm(){
      let num1=this.ruleForm.num1
      let num2=this.ruleForm.num2
      this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            // alert('submit!',valid);
            if(num1<num2){
              this.dialogFormVisible=false 
            }else{
              alert('结束值不能小于起始值')
              return false
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    // 编辑操作
    handleEdit(params){
      console.log(params)
    },
    // 绑定操作
    handleBind(params){
      this.dialogFormVisible=true
      console.log(params)
    },
    // 新建代理商：
    newAgentManage(){
       this.$router.push({
        path: '/creatAgentManage'
       }) 
    }
  }
}
</script>
<style lang="less">
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
