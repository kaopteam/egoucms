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
            <el-form-item label="上级代理商" prop="AgentName">
              <el-select v-model="ruleForm.AgentName" placeholder="请选择上级代理商">
                <el-option label="a" value="湖南省"></el-option>
                <el-option label="b" value="海南"></el-option>
              </el-select>
              <el-select style="margin-left:20px;" v-model="ruleForm.AgentName2" placeholder="请选择上级代理商">
                <el-option label="a" value="湖南省1"></el-option>
                <el-option label="b" value="海南2"></el-option>
              </el-select>
            </el-form-item>
             <el-form-item label="商家名称" prop="businessName">
              <el-input v-model="ruleForm.businessName"></el-input>
            </el-form-item>
            <el-form-item label="商家类型" prop="type">
              <el-radio-group v-model="ruleForm.type">
                <el-radio label="个体商户"></el-radio>
                <el-radio label="企业"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="商家地址">
              <el-select v-model="ruleForm.businessAddress" placeholder="请选择省">
                <el-option label="湖南省" value="湖南省"></el-option>
                <el-option label="海南" value="海南"></el-option>
              </el-select>
              <el-select style="margin-left:20px" v-model="ruleForm.city" placeholder="请选择市">
                <el-option label="shanghai" value="shanghai"></el-option>
                <el-option label="beijing" value="beijing"></el-option>
              </el-select>
              <el-select style="margin-left:20px" v-model="ruleForm.county" placeholder="请选择区/县">
                <el-option label="shanghai" value="shanghai"></el-option>
                <el-option label="beijing" value="beijing"></el-option>
              </el-select>
              <!-- <el-input  style="margin-top:20px;" v-model="ruleForm.address" placeholder="详细地址"></el-input> -->
            </el-form-item>

            <el-form-item label=" " prop="address">
               <el-input  v-model="ruleForm.address" placeholder="详细地址"></el-input>
            </el-form-item>
          </fieldset>
          
          <fieldset >
            <figcaption>联系人信息</figcaption>
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
             <el-form-item label="状态" prop="state">
                <el-radio-group v-model="ruleForm.state">
                  <el-radio label="启用"></el-radio>
                  <el-radio label="禁用"></el-radio>
                </el-radio-group>
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
      return {
        currentPath:'/homne',
        pageLocation:'新增商家',
        ruleForm: {
          AgentName :'',
          businessName:'',
          businessAddress:'',
          province:'',
          city:'',
          county:[],
          address:'',
          // 联系人类型
          type:'',
          contacts:'',
          telphone:'',
          KPAccount:'',
          state:''
        },
        rules: {
          AgentName: [
            { required: true, message: '请输入代理商名称', trigger: 'change' }
          ],
          businessName: [
            { required: true, message: '请填写商家名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          businessAddress:[
             { required: true, message: '请选择地址', trigger: 'change' }
          ],
          type : [
            { required: true, message: '请选择一个类型', trigger: 'change'  }
          ],
          address:[
             { required: true, message: '请填写详细地址', trigger: 'blur'  }
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
.agentRuleForm{
  padding-top:30px
}
.el-form{
  text-align:left;
}
fieldset{
  border:0
}
</style>
