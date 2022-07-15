<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="id"
        label="编号"
        width="80">
      </el-table-column>

      <el-table-column
        prop="name"
        label="名字"
        width="100">
      </el-table-column>

      <el-table-column
        prop="phone"
        label="电话"
        width="120">
      </el-table-column>

      <el-table-column
        prop="email"
        label="邮箱"
        width="250">
      </el-table-column>



      <el-table-column
        prop="createTime"
        label="日期"
        width="150">
      </el-table-column>

      <el-table-column
        prop="address"
        label="地址"
        >
      </el-table-column>
    </el-table>

<!--
    分页：
      total: 总条数
      current-page: 当前页
      page-size: 每页条数

      事件current-change: currentPage 改变时会触发 回调参数 当前页
-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totals"
      :current-page="currentPage"
      :page-size="pageSize"
      @current-change="getUsers"
    >
    </el-pagination>
  </div>
</template>

<style>
.el-table .warning-row {
  background: #fdf9e6;
}

.el-table .success-row {
  background: #f2ebf9;
}
</style>

<script>


export default {
  data() {
    return {
      tableData: [],
      totals: 0,
      currentPage: 1,
      pageSize: 8
    }
  },

  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },

    //获取user数据的方法
    getUsers(currentPage){
      //当页面加载完成时获取数据，此时currentPage没有值
      if(currentPage!=null){
        this.currentPage = currentPage;
      }

      this.$http.post("/user/list", {currentPage: this.currentPage, pageSize: this.pageSize})
        .then(res => {
          console.log(res);
          console.log("currentPage: " + this.currentPage);
          //将响应的数据赋值给数据模型
          this.tableData = res.data.data;
          //更新totals
          this.totals = res.data.totals;
          //更新pageSize
          this.pageSize = res.data.data.length;
        })
        .catch(res => console.log("an error occurred", res));
    }


  },

  //页面加载完成时调用
  mounted() {
    this.getUsers();

  }
}
</script>
