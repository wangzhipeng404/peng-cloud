import request from '../utils/request'

export async function listRecord (category) {
  return request.get('/record/list', {
    params: { category }
  })
}

export async function getRecord (id) {
  return request.get(`/record/${id}`)
}

export async function addRecord (record) {
  return request.post('/record', record)
}

export async function updateRecord (record) {
  return request.put('/record', record)
}

export async function deleteRecord (id) {
  return request.delete(`/record/${id}`)
}

export async function countRecord (category) {
  return request.get('/record/list', {
    params: { category }
  })
}