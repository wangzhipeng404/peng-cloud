import Dexie from 'dexie'

export const db = new Dexie('peng-database')

db.version(3).stores({
  components: '++id, name, desc, code, script, type, propsConfigs, initValues, eventConfigs, createTime, updateTime',
  pages: '++id, name, desc, protocl, type, createTime, updateTime',
  libs: '++id, name, desc, path, code, type, createTime, updateTime',
  settings: '++id, desc, value, type',
});