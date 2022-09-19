import { getOSSFile, put } from '../utils/oss'
import { addRecord, countRecord, deleteRecord, getRecord, listRecord, updateRecord } from './record'

const category = 3

export async function saveLib(libObj) {
  const { code, ...lib } = libObj
  await put(
    `/test/libs/${lib.type}.js`,
    new Blob([code], { type: 'text/javascript' })
  )
  if (lib.id) {
    await updateRecord({ ...lib, category })
    return lib.id
  } else {
    const id = await addRecord({...lib, category})
    return id
  }
}

export async function findLibs() {
  const { list } = await listRecord(category)
  return list
}
export async function getLib(id) {
  const lib = await getRecord(id)
  const code = await getOSSFile(`/test/libs/${lib.type}.js`)
  console.log(lib)
  return { ...lib, code }
}

export async function deleteLib(id) {
  await deleteRecord(id)
}

export async function countLib() {
  const { totalCount } = await countRecord(category)
  return totalCount
}