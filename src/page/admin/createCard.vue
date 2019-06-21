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
      <el-form label-width="100px" class="demo-ruleForm" :model="ruleForm2" :rules="rules2" ref="ruleForm2">
        <el-form-item label="会员卡名称" prop="name">
          <el-col :span="11">
          <el-input v-model="ruleForm2.name"></el-input>
          </el-col>
          <el-col :span="11" style="margin-left:1rem">
            <el-button type="primary" @click="submitForm('ruleForm2')">查询 </el-button>
          </el-col>
        </el-form-item> 
      
        <el-form-item>
           <el-button type="primary" @click="dialogFormVisible = true">批量生成卡</el-button>
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
    <el-dialog title="批量生成卡" :visible.sync="dialogFormVisible">
       <el-form :model="ruleForm" :rules="rules" ref="ruleForm" style='300px'>
        <!-- <el-form-item label="选择会员卡" prop="name" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item> -->
        <el-form-item label="选择会员卡" prop="region" :label-width="formLabelWidth">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option v-for="(item,index) in cartType" :key='index' :label="item.type" :value="item.value"></el-option>
          <!-- <el-option label="卡·2" value="beijing"></el-option> -->
        </el-select>
      </el-form-item>
      <!-- <el-form :model="form" style="width:90%" :rules="rulesc" ref="ruleFormc" > -->
        <el-form-item label="生成数量" prop="number" :label-width="formLabelWidth">
          <el-col :span="12">
             <el-input v-model="ruleForm.edu" autocomplete="off"></el-input>
          </el-col>
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
// @ is an alias to /src
import cardList from '@/components/cardlist.vue'
// import search from '@/components/searchMod.vue'
import {mapState,mapActions} from 'vuex'
export default {
  data () {
    return {
      pageLocation: '会员卡生成',
      currentPath: '/',
      thead:[
        '会员名称'	,'返现额度',	'会员折扣',	'已绑定',	'已激活',	'创建时间',	'操作'
      ], 
      keyword:{
        value:'会员卡名称'
      },
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
        ruleForm2: {
          name: '',
        },
        rules2: {
          name: [
            { required: true, message: '请输入会员卡名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
        },
        formLabelWidth: '120px',
        cartType:[{
          type:'卡1',
          value:'01'
        },{
           type:'卡2',
           value:'02'
        }]
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
