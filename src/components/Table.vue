<template>
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
      prop="address"
      label="地址"
      width="250">
    </el-table-column>

    <el-table-column
      prop="createTime"
      label="日期">
    </el-table-column>
  </el-table>
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

//引入axios
import axios from "axios";
//import user from "../../user.js";


export default {
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    /*this.tableData = [
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
    ]*/

    /*axios.post("/user/list", {"currentPage": 1, "pageSize": 5})
        .then(result=>{
          console.log(result);
          //获取模拟接口返回的数据， 数据放在返回值的data字段下
          this.tableData = result.data.data;
        }).catch(result=>{
          //console.log(result);
    });*/
    axios.post("https://www.fastmock.site/mock/8b8eda9fe2d9ba334629c9ddd2a71464/pethome/user/list", {"currentPage": 1, "pageSize": 5})
      .then(result=>{
        console.log(result);
        //获取模拟接口返回的数据， 数据放在返回值的data字段下
        this.tableData = result.data.data;
      }).catch(result=>{
      //console.log(result);
    });
  }
}
</script>
