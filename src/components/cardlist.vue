<template>
  <div class="box">
   <!-- <div class="card-list">
     <table class="tbl">
       <tr>
         <th v-for="(title,index) in this.datalist.list" :key='index' v-text="title"></th>
       </tr>
       <tr v-for='(item,index) in this.datalist.list' :key='index' :dataId='item.id'>
         <td v-for="(val,i) in Object.values(item)" :key='i' v-text="val"></td>
         <td>
            <span :dataId='item.id' @click="haddleEdit(item.id)">编辑</span>
            <span :dataId='item.id' @click="haddleDel(item.id)">删除</span>
         </td>
       </tr>
     </table>
   </div> -->

    <el-table
    :data="this.datalist.list"
    style="width: 100%">
      <el-table-column
        label="会员卡名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="返现额度"
        prop="edu">
      </el-table-column>
       <el-table-column
        label="会员折扣"
        prop="zhekou">
      </el-table-column>
       <el-table-column
        label="已绑定"
        prop="aBind">
      </el-table-column>
       <el-table-column
        label="已激活"
        prop="jihuo">
      </el-table-column>
       <el-table-column
        label="创建时间"
        prop="date">
      </el-table-column>
      <el-table-column
        align="right" width="160">
        <span slot="header" >操作</span>
    
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="this.datalist.currentPage"
      :page-sizes='this.datalist.pageSize'
      layout="total, prev, pager, next, jumper"
      :total="this.datalist.total">
    </el-pagination>

  </div>
</template>
<script>
export default {
  data(){
     return {
       listLoading :false
      }
  },
  name: 'formList',
  props: ["datalist"],
  mounted(){
    console.log(this.datalist)
  },
  computed:{
    // getTotal :function(){
    //   return this.name
    // }
  },
  methods: {
    handleEdit(index, row) {
        console.log(index, row);
      },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val){
      console.log(val)
    },
    handleCurrentChange(val){
        console.log(val)  
        this.page = val;
        // this.getLists()
        this.getData(val)
        // this.$store.dispatch("handleCardData",this.page)
    },
    getData(params) {
      console.log('默认参数：',params)
      this.$api.getCardManageListPage(params)
      .then((result)=>{
        this.datalist=result.data
        console.log(this.datalist)
        })
    },
    // getLists(){
    //     this.listLoading = true;
    //     this.$api.getArticleList({page:this.page,size:10})
    //       .then(({data:{articleLists,total}})=>{
    //         setTimeout(()=>{
    //           this.listLoading =false
    //           this.articleLists =articleLists;
    //           this.total =total;
    //         },this.$con.BACKLOADTIM)
    //     });
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-pagination{
  padding:10px 0;
}
</style>
