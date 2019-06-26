<template>
  <div class="rightModule">
    <div class="page-location">
        <!-- <h1 :data-name='pageLocation'>{{ pageLocation }}</h1> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: currentPath }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{pageLocation}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="agentRuleForm">
          <fieldset>
            <figcaption>基本信息</figcaption>
            <el-form-item label="代理商名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="代理级别" prop="AgentLevel">
              <el-radio-group v-model="ruleForm.AgentLevel">
                <el-radio label="市级代理"></el-radio>
                <el-radio label="县级代理"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="代理区域" prop="AgentRegion">
              <el-select v-model="ruleForm.AgentRegion" placeholder="请选择省">
                <el-option label="湖南省" value="湖南省"></el-option>
                <el-option label="海南" value="海南"></el-option>
              </el-select>
              <el-select style="margin-left:20px" v-model="ruleForm.city" placeholder="请选择市">
                <el-option label="shanghai" value="shanghai"></el-option>
                <el-option label="beijing" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label=" " >
              <el-checkbox-group v-model="ruleForm.county">
                <el-checkbox label="朝阳区" name="county"></el-checkbox>
                <el-checkbox label="海淀区" name="county"></el-checkbox>
                <el-checkbox label="海淀区2" name="county"></el-checkbox>
                <el-checkbox label="海淀区1" name="county"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </fieldset>
          
          <fieldset >
            <figcaption>联系人信息</figcaption>
            <el-form-item label="联系人类型" prop="type">
              <el-radio-group v-model="ruleForm.type">
                <el-radio label="企业"></el-radio>
                <el-radio label="个人"></el-radio>
              </el-radio-group>
            </el-form-item>
             <el-form-item label="公司名称" prop="CorporateName">
              <el-input v-model="ruleForm.CorporateName"></el-input>
            </el-form-item>
            <el-form-item label="公司地址" prop="CorporateAddress">
              <el-input v-model="ruleForm.CorporateAddress"></el-input>
            </el-form-item>
            <el-form-item label="联系人" prop="contacts">
              <el-input v-model="ruleForm.contacts"></el-input>
            </el-form-item>
            <el-form-item label="联系人电话" prop="telphone">
              <el-input v-model="ruleForm.telphone"></el-input>
            </el-form-item>
            <el-form-item label="绑定靠谱账号" prop="KPAccount">
              <el-input v-model="ruleForm.KPAccount"></el-input>
            </el-form-item>
          </fieldset>
           
          <fieldset >
            <figcaption>管理后台</figcaption>
            <el-form-item label="登录账号" prop="loginAccount">
              <el-input v-model="ruleForm.loginAccount"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
          </fieldset>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>

      </div>
      <!-- 页面 -->
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      // var checkAge = (rule, value, callback) => {
      //   if (!value) {
      //     return callback(new Error('年龄不能为空'));
      //   }
      //   setTimeout(() => {
      //     if (!Number.isInteger(value)) {
      //       callback(new Error('请输入数字值'));
      //     } else {
      //       if (value < 18) {
      //         callback(new Error('必须年满18岁'));
      //       } else {
      //         callback();
      //       }
      //     }
      //   }, 1000);
      // };
      // var validatePass = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入密码'));
      //   } else {
      //     if (this.ruleForm.checkPass !== '') {
      //       this.$refs.ruleForm.validateField('checkPass');
      //     }
      //     callback();
      //   }
      // };
      // var validatePass2 = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'));
      //   } else if (value !== this.ruleForm.pass) {
      //     callback(new Error('两次输入密码不一致!'));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        currentPath:'/homne',
        pageLocation:'新增代理商',
        ruleForm: {
          name :'',
          AgentLevel:'',
          AgentRegion:'',
          province:'',
          city:'',
          county:[],
          // 联系人类型
          type:'',
          CorporateName:'',
          CorporateAddress:'',
          contacts:'',
          telphone:'',
          KPAccount:'',
          loginAccount:'',
          password:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入代理商名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          AgentLevel: [
            { required: true, message: '请选择城市区域', trigger: 'change' }
          ],
          AgentRegion:[
             { required: true, message: '请选择代理区域', trigger: 'change' }
          ],
          type : [
            { required: true, message: '请选择一个类型', trigger: 'change'  }
          ],
           contacts: [
            { required: true, message: '请填写联系人', trigger: 'blur' }
          ],
           telphone: [
            { required: true, message: '请填写手机号', trigger: 'blur' }
          ],
           KPAccount: [
            { required: true, message: '请填写绑定的靠谱账号', trigger: 'blur' }
          ],
           loginAccount: [
            { required: true, message: '请填写登录的账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写登录的账号的密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm() {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            console.log('submit!',this.ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs['ruleForm'].resetFields();
      },
       
    }
  }
</script>
 
<style lang="less">
.el-form{
  text-align:left;
}
fieldset{
  border:0
}
</style>
