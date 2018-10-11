import request from '@/utils/request'

export function getList() {
  return request({
    url: '/dma/dmaSaleWater',
    method: 'get'
  })
}
