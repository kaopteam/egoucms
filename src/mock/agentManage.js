/*
 * @Author: mikey.yijinghao
 * @Date: 2019-06-20 16:14:38
 * @Last Modified by: mikey.yijinghao
 * @Last Modified time: 2019-07-11 14:33:31
 */
import Mock from 'mockjs'
// const httpUrl = `${requestHost}/api/article/create`
// const urlReg= '/api\/test\/lists/'

export default Mock.mock(/api\/agentManage\/list/, 'get', (res, req) => {
  // console.log(res)
  const jikeDetailItem = {
    'list': [
      {
        'id': '1',
        'name': 'A1A',
        'Level': 'A',
        'city': '长沙',
        'county': '大同县',
        'bindMemberCardNum': '1000',
        'Settled': '已经结算拥金10',
        'bindingTime': '20190101',
        'unsettledAccounts': '203',
        'distributionAmount': '20015',
        'state': '状态',
        'creatTime': '2019-01-12 16:45:23'
      },
      {
        'id': 'a010',
        'name': 'Afsf',
        'Level': 'A',
        'city': '长沙',
        'county': '大同县',
        'bindMemberCardNum': '1000',
        'Settled': '已经结算拥金10',
        'bindingTime': '20190101',
        'unsettledAccounts': '203',
        'distributionAmount': '20015',
        'state': '状态',
        'creatTime': '2019-01-12 16:45:23'
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
