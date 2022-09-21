import { listDir, getClient } from '../utils/oss'



export async function findAssets (dir) {
    const res = await listDir(dir)
    return res
}

export async function deleteAsset (key) {
  const client = await getClient()
  await client.delete(key)
}