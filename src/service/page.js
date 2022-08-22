import { db } from './db'

export async function savePage(pageObj) {
    const count = await db.pages.where('key').equalsIgnoreCase(pageObj.key).count()
    if (!pageObj.id && count > 0) {
        throw 'key已存在，请修改'
    }
    const newData = {
        ...pageObj,
        createTime: pageObj.createTime || new Date().getTime(),
        updateTime: new Date().getTime()
    }
    console.log(pageObj)
    const id = await db.pages.put(newData, newData.id)
    return id
}

export async function findPages () {
    const list = await db.pages.reverse().sortBy('updateTime')
    return list
}
export async function getPage (key) {
    const Page =  await db.pages.get(+key)
    console.log(Page)
    return Page
}

export async function deletePage (key) {
    await db.pages.delete(key)
}

export async function countPage() {
    const count = await db.pages.count()
    return count
}