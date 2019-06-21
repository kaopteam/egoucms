import Mock from 'mockjs'
// import Query from 'gome-utils-query'
// import {env, system} from 'gome-utils-env'
// import host from 'gome-utils-host'

// import requestHost from '../requestHost.js'
// const httpUrl = `${requestHost}/api/membersManage/cardManage`

export default Mock.mock(/api\/cardManage\/lists/, 'get', (res, req) => {
  const jikeDetailItem = {
    'maritalStatus': [
      {
        'key': '测试内容avf3',
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
