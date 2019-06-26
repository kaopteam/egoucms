<template>
  <div class="rightModule">
    <div class="page-location">
        <!-- <h1 :data-name='pageLocation'>{{ pageLocation }}</h1> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: currentPath }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{pageLocation}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="form-box" style="padding-top:30px;">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="agentRuleForm">
          <fieldset>
            <!-- <figcaption>分销设置</figcaption> -->
            <div class="tips">佣金设置 注意：填写的获得的佣金比例均为订单实付金额的比例（不含订单运费）</div>
            <el-form-item label="平台获得" prop="platformRebate">
               <el-input v-model="ruleForm.platformRebate"></el-input>
            </el-form-item>
            <el-form-item label="代理商获得" prop="AgentRebate">
              <el-input v-model="ruleForm.AgentRebate"></el-input>
            </el-form-item>
             <el-form-item label="推广员获得">
               <div style='display:inline;color:#606266'>由代理商设置</div>
            </el-form-item>

            <el-form-item label="商家获得" prop="businessRebate">
              <el-input v-model="ruleForm.businessRebate"></el-input>
            </el-form-item>
            <el-form-item label="购买会员获得" prop="MemberRebate">
              <el-input v-model="ruleForm.MemberRebate"></el-input>
            </el-form-item>
            
          </fieldset>
          <el-form-item label="商品设置" prop="setState">
            <el-radio-group v-model="ruleForm.setState">
              <el-radio label="全场参与"></el-radio>
              <!-- <el-radio label="禁用"></el-radio> -->
            </el-radio-group>
            <div style=' display:inline;margin-left:20px;color:#606266'>注意：该佣金设置应用与平台所有商品</div>
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
        pageLocation:'分销设置',
        ruleForm: {
          platformRebate :'',
          AgentRebate:'',
          businessRebate:'',
          MemberRebate:'',
          setState:'',
        },
        rules: {
          // platformRebate: [
          //   { required: true, message: '不能为空', trigger: 'change' }
          // ],
          // AgentRebate: [
          //   { required: true, message: '不能为空', trigger: 'blur' }
          // ],
          // businessRebate: [
          //   { required: true, message: '不能为空', trigger: 'blur' }
          // ],
          //  MemberRebate: [
          //   { required: true, message: '不能为空', trigger: 'blur' }
          // ],
         
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
.tips{
  padding:10px 0; 
  color:#606266;
}
</style>
