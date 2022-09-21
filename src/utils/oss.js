import request from './request'
import OSS from 'ali-oss'
import axios from 'axios'

export const endPoint = 'https://p-cloud.oss-cn-hangzhou.aliyuncs.com'

let securityToken = null
async function getSecurity () {
  if (!securityToken) {
    securityToken = request.get('/oss/security')
  }
  return securityToken
}

let client = null
export async function getClient () {
  if (client) return client
  const security = await getSecurity()
  console.log('security', security)
  client = new OSS({
    region: 'oss-cn-hangzhou',
    accessKeyId: security.access_id,
    accessKeySecret: security.access_secret,
    stsToken: security.security_token,
    refreshSTSToken: async () => {
      const info = await getSecurity();
      return {
        accessKeyId: info.access_id,
        accessKeySecret: info.access_secret,
        stsToken: info.security_token
      }
    },
    refreshSTSTokenInterval: 300000,
    bucket: 'p-cloud'
  });
  return client
}

export async function put (key, file) {
  const cloud = await getClient()
  try {
    // object表示上传到OSS的文件名称。
    // file表示浏览器中需要上传的文件，支持HTML5 file和Blob类型。
    const r1 = await cloud.put(key, file);
    console.log(r1)
  } catch (e) {
    console.error('error: ', e);
    throw new Error(e)
  }
}

export async function listDir (dir) {
  const cloud = await getClient()
  try {
    const result = await cloud.list({
      prefix: dir,
      delimiter: '/'
    });
    return result
  } catch (e) {
    console.error('error: ', e);
    throw new Error(e)
  }
}

export async function getOSSFile (key) {
  const { data } = await axios.get(`${endPoint}/${key}`)
  return data
}