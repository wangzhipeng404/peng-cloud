import { db } from './db'

export async function saveSetting(settingObj) {
  const count = await db.settings.where('type').equalsIgnoreCase(settingObj.type).count()
  if (!settingObj.id && count > 0) {
      throw 'key已存在，请修改'
  }
  const newData = {
      ...settingObj,
      createTime: settingObj.createTime || new Date().getTime(),
      updateTime: new Date().getTime()
  }
  console.log(settingObj)
  const id = await db.settings.put(newData, newData.id)
  return id
}

export async function getSetting (type) {
  const setting =  await db.settings.get({ type })
  return setting
}