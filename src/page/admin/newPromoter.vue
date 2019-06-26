<template>
  <div class="rightModule">
    <div class="page-location">
        <!-- <h1 :data-name='pageLocation'>{{ pageLocation }}</h1> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: currentPath }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{pageLocation}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="form-box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="agentRuleForm">
          <fieldset>
            <figcaption>基本信息</figcaption>
            <!-- <el-form-item label="上线代理商" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item> -->
            <el-form-item label="上级代理商" prop="AgentName">
              <el-select v-model="ruleForm.AgentName" placeholder="请选择上级代理商">
                <el-option label="a" value="湖南省"></el-option>
                <el-option label="b" value="海南"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="推广员姓名" prop="promoterName">
               <el-input v-model="ruleForm.promoterName"></el-input>
            </el-form-item>
            <el-form-item label="推广员电话" prop="telphone">
              <el-input v-model="ruleForm.telphone"></el-input>
            </el-form-item>
            <el-form-item label="绑定靠谱账号" prop="KPAccount">
              <el-input v-model="ruleForm.KPAccount"></el-input>
            </el-form-item>
          </fieldset>
          <el-form-item label="状态" prop="state">
            <el-radio-group v-model="ruleForm.state">
              <el-radio label="启用"></el-radio>
              <el-radio label="禁用"></el-radio>
            </el-radio-group>
          </el-form-item>  
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <!-- 提交按钮end -->
      </div>
      <!-- 页面 -->
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        currentPath:'/homne',
        pageLocation:'新增推广员',
        ruleForm: {
          AgentName :'',
          promoterName:'',
          telphone:'',
          KPAccount:'',
          state:'',
        },
        rules: {
          AgentName: [
            { required: true, message: '请输入代理商名称', trigger: 'change' }
          ],
          promoterName: [
            { required: true, message: '请填写推广员姓名', trigger: 'blur' }
          ],
          telphone: [
            { required: true, message: '请填写手机号', trigger: 'blur' }
          ],
           KPAccount: [
            { required: true, message: '请填写绑定的靠谱账号', trigger: 'blur' }
          ],
          state:[
            { required: true, message: '请填写选择状态', trigger: 'change' }
          ],
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
