import { db } from './db'

export async function saveComponent(componetObj) {
    const count = await db.components.where('key').equalsIgnoreCase(componetObj.key).count()
    if (!componetObj.id && count > 0) {
        throw '组件key已存在，请修改'
    }
    const newData = { 
        ...componetObj,
        createTime: componetObj.createTime || new Date().getTime(),
        updateTime: new Date().getTime()
    }
    console.log(componetObj)
    const id = await db.components.put(newData, newData.id)
    return id
}

export async function findComponents () {
    const list = await db.components.reverse().sortBy('updateTime')
    return list
}
export async function getComponet (key) {
    const component =  await db.components.get(+key)
    console.log(component)
    return component
}

export async function deleteComponet (key) {
    await db.components.delete(key)
}

export async function countComponent() {
    const count = await db.components.count()
    return count
}