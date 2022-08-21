import Dexie from 'dexie'

export const db = new Dexie('peng-database')

db.version(1).stores({
  components: '++id, name, key, desc, code, script, type, createTime, updateTime',
  pages: '++id, name, key, desc, protocl, type, createTime, updateTime',
  libs: '++id, name, key, desc, path, code, type, createTime, updateTime',
});