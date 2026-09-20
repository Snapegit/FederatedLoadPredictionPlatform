import request from '@/utils/request'

// 查询数据管理列表
export function listData(query) {
  return request({
    url: '/system/data/list',
    method: 'get',
    params: query
  })
}

// 查询数据管理详细
export function getData(dataId) {
  return request({
    url: '/system/data/' + dataId,
    method: 'get'
  })
}

// 新增数据管理
export function addData(data) {
  return request({
    url: '/system/data',
    method: 'post',
    data: data
  })
}

// 修改数据管理
export function updateData(data) {
  return request({
    url: '/system/data',
    method: 'put',
    data: data
  })
}

// 删除数据管理
export function delData(dataId) {
  return request({
    url: '/system/data/' + dataId,
    method: 'delete'
  })
}
