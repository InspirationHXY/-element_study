axios
1. 安装
npm install axios --save

2. 引入
import axios from "axios";

3. 使用
axios.post("/user/list",{"currentPage":1,"pageSize":5}).then((result)=>{
        		console.debug(result);
        		//成功之后给数组赋值
        		this.tableData = result.data.data;
      		}).catch((result)=>{
    		})
  		}



mock
1. 安装
npm install mockjs

2. 模拟接口
    user.js
3. 使用
    引入user.js
      import user from '../mock/user.js'
    发送axios请求
