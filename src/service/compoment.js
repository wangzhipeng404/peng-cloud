import { listRecord, addRecord, getRecord, deleteRecord, countRecord, updateRecord } from './record'
import { getOSSFile, put } from '../utils/oss'

const category = 2

export async function saveComponent(componetObj) {
    const { props, evnets, code, script, ...comp } = componetObj
    await Promise.all([
      put(
        `/test/components/${comp.type}/props.json`,
        new Blob([props], { type: 'text/json' })
      ),
      put(
        `/test/components/${comp.type}/events.json`,
        new Blob([evnets], { type: 'text/json' })
      ),
      put(
        `/test/components/${comp.type}/${comp.type}.vue`,
        new Blob([code], { type: 'text/plain' })
      ),
      put(
        `/test/components/${comp.type}/${comp.type}.js`,
        new Blob([script], { type: 'text/javascript' })
      )
    ])
    if (comp.id) {
      await updateRecord({ ...comp, category })
      return comp.id
    } else {
      const id = await addRecord({ ...comp, category })
      return id
    }
}

export async function findComponents () {
    const { list } = await listRecord(category)
    return list
}
export async function getComponet (id) {
    const component =  await getRecord(id)
    const [code, props, events] = await Promise.all([
      getOSSFile(`test/components/${component.type}/${component.type}.vue`),
      getOSSFile(`test/components/${component.type}/props.json`),
      getOSSFile(`test/components/${component.type}/events.json`),
    ])
    return { ...component, code, props, events }
}

export async function deleteComponet (key) {
    await deleteRecord(key)
}

export async function countComponent() {
    const { totalCount } = await countRecord(category)
    return totalCount
}