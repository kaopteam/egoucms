<template>
  <div class="rightModule">
    <div class="page-location">
      <h1 :data-name='location'>{{ pageName }}</h1>
    </div>
    <div class="search-mod">
      会员卡名称<input v-model="cardName" /><button @click='serach()'>查询</button>
      <p><button @click='creatCard()'>批量生成卡</button></p>
    </div>
   <div class="card-list">
     <table class="tbl">
       <tr>
         <th>会员名称</th>
         <th>返现额度</th>
         <th>会员折扣</th>
         <th>已绑定</th>
         <th>已激活</th>
         <th>创建时间</th>
         <th>操作</th>
       </tr>
       <tr v-for='(item,index) in this.dataList' :key='index' :dataId='item.id'>
         <td >{{item.name}}</td>
         <td >{{item.fxed}}</td>
         <td >{{item.zheko}}</td>
         <td >{{item.bind}}</td>
         <td >{{item.jihuo}}</td>
         <td >{{item.time}}</td>
         <td >
            <span :dataId='item.id' @click="haddleEdit(item.id)">编辑</span>
            <span :dataId='item.id' @click="haddleDel(item.id)">删除</span>
         </td>
       </tr>
     </table>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data(){
    return{
      pageName:'生成会员卡'
    }
  },
  // name: '卡生成',
  components: {
    
  },
  methods:{

  }
}
</script>
