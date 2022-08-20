import { db } from './db'

export async function saveLib(libObj) {
    const count = await db.libs.where('key').equalsIgnoreCase(libObj.key).count()
    if (!libObj.id && count > 0) {
        throw 'key已存在，请修改'
    }
    const newData = { 
        ...libObj,
        createTime: libObj.createTime || new Date().getTime(),
        updateTime: new Date().getTime()
    }
    console.log(libObj)
    const id = await db.libs.put(newData, newData.id)
    return id
}

export async function findLibs () {
    const list = await db.libs.reverse().sortBy('updateTime')
    return list
}
export async function getLib (key) {
    const lib =  await db.libs.get(+key)
    console.log(lib)
    return lib
}

export async function deleteLib (key) {
    await db.libs.delete(key)
}