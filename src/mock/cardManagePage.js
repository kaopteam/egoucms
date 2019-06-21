/*
 * @Author: mikey.yijinghao
 * @Date: 2019-06-20 16:14:38
 * @Last Modified by: mikey.yijinghao
 * @Last Modified time: 2019-06-20 22:21:25
 */
import Mock from 'mockjs'
// const httpUrl = `${requestHost}/api/article/create`
// const urlReg= '/api\/test\/lists/'

export default Mock.mock(/api\/cardManage\/page/, 'get', (res, req) => {
  console.log(res)
  const jikeDetailItem = {
    'list': [
      {
        'date': '2016-05-02',
        'name': '10002',
        'edu': '王小虎2',
        'zhekou': '10002',
        'jihuo': '王小虎2',
        'aBind': '已经',
        'address': '上海市普陀区金沙江路 1518 弄'
      },
      {
        'date': '2016-05-02',
        'name': '10002',
        'edu': '10002',
        'zhekou': '王小虎2',
        'jihuo': '王小虎2',
        'aBind': '已经',
        'address': '上海市普陀区金沙江路 1518 弄'
      }
    ],
    'currentPage': 1,
    'total': 610,
    'pageSize': [10, 20, 50, 100, 200],
    'status': 200,
    'code': '200'
  }
  console.log(window.location.host)
  return jikeDetailItem
})
