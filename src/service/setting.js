import request from '../utils/request'

export async function updateSetting (key, value) {
  return request.put('/config', { key, value })
}

export async function getSetting (key) {
  return request.get('/config/detail', {
    params: { key }
  })
}