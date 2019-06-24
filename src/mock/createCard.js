/*
 * @Author: mikey.yijinghao
 * @Date: 2019-06-20 16:14:38
 * @Last Modified by: mikey.yijinghao
 * @Last Modified time: 2019-06-21 21:55:31
 */
import Mock from 'mockjs'
// const httpUrl = `${requestHost}/api/article/create`
// const urlReg= '/api\/test\/lists/'
export default Mock.mock(/api\/createCard\/list/, 'get', (res, req) => {
  // console.log(res)
  const jikeDetailItem = {
    'list': [
      {
        'userName': '创建的卡',
        'CashBack': 100,
        'MemberDiscount': 8.5,
        'Binded': 100,
        'activated': '20000',
        'CreationTime': '2019-01-18'
      },
      {
        'userName': 'a01',
        'CashBack': 100,
        'MemberDiscount': 8.5,
        'Binded': 100,
        'activated': '2000',
        'CreationTime': '2019-01-18'
      }
    ],
    'currentPage': 1,
    'totalPage': 1,
    'total': 610,
    'pageSize': [10, 20, 50, 100, 200],
    'status': 200,
    'code': '200'
  }
  console.log(window.location.host)
  return jikeDetailItem
})
