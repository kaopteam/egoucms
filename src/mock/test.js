/*
 * @Author: mikey.yijinghao 
 * @Date: 2019-06-20 16:14:38 
 * @Last Modified by: mikey.yijinghao
 * @Last Modified time: 2019-06-20 17:09:19
 */
import Mock from 'mockjs'
// const httpUrl = `${requestHost}/api/article/create`
// const urlReg= '/api\/test\/lists/'
export default Mock.mock(/api\/test\/lists/, 'get', (res, req) => {
  const jikeDetailItem = {
    'maritalStatus': [
      {
        'key': '123测试 ',
        'value': '未婚'
      },
      {
        'key': '测试内容avf3',
        'value': '已婚'
      }
    ],
    'familyMember': [
      {
        'key': '测试内容h8cu',
        'value': '2人'
      },
      {
        'key': '测试内容h8cu',
        'value': '3人'
      },
      {
        'key': '测试内容h8cu',
        'value': '4人'
      },
      {
        'key': '测试内容h8cu',
        'value': '5人'
      }
    ],
    'occupation': [
      {
        'key': '测试内容347e',
        'value': '码农'
      },
      {
        'key': '测试内容347e',
        'value': '护士'
      }
    ],
    'familyMonthIncome': [
      {
        'key': '测试内容uva3',
        'value': '10000'
      }
    ],
    'status': '200'
  }

  console.log(window.location.host)
  return jikeDetailItem
})
