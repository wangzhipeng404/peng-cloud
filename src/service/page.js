import { getOSSFile, put } from '../utils/oss'
import { addRecord, countRecord, deleteRecord, getRecord, listRecord, updateRecord } from './record'

const category = 1

export async function savePage(pageObj) {
  const { protocl, ...page } = pageObj
  await put(
    `/test/pages/${pageObj.type}.json`,
    new Blob([protocl], { type: 'text/json' })
  )
  if (page.id) {
    await updateRecord({ ...page, category })
    return page.id
  } else {
    const id = await addRecord({ ...page, category })
    return id
  }
}

export async function findPages() {
  const { list } = await listRecord(category)
  return list
}
export async function getPage(id) {
  const page = await getRecord(id)
  const protocl = await getOSSFile(`/test/pages/${page.type}.json`)
  console.log(page)
  return { ...page, protocl }
}

export async function deletePage(id) {
  await deleteRecord(id)
}

export async function countPage() {
  const { totalCount } = await countRecord(category)
  return totalCount
}