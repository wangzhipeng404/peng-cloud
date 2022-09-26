/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default {
  id: '75f0extui9d7yksklx27hff8xg',
  name: 'test',
  type: 'app',
  items: [
    {
      type: 'page',
      id: 'page_299',
      name: 'index',
      title: '',
      layout: 'absolute',
      style: {
        position: 'relative',
        left: 0,
        top: 0,
        right: '',
        bottom: '',
        width: '100%',
        height: '1728',
        backgroundImage: '',
        backgroundColor: 'rgba(248, 218, 218, 1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        color: '',
        fontSize: '',
        fontWeight: '',
      },
      events: [],
      created: '',
      items: [
        {
          type: 'text',
          id: 'text_9027',
          style: {
            width: '280.75',
            height: '38.97',
            position: 'absolute',
            top: '107.90',
            left: '46.96',
            right: '',
            bottom: '',
            backgroundImage: '',
            backgroundColor: '',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            color: '',
            fontSize: '20',
            fontWeight: '',
          },
          name: '文本',
          text: 'Tmagic editor 营销活动编辑器',
          multiple: true,
          events: [],
          created: '',
        },
        {
          type: 'qrcode',
          id: 'qrcode_4738',
          style: {
            position: 'absolute',
            left: '91.92',
            width: '176',
            height: '176',
            top: '565.50',
            right: '',
            bottom: '',
            backgroundImage: '',
            backgroundColor: '',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            color: '',
            fontSize: '',
            fontWeight: '',
          },
          name: '二维码',
          url: 'https://github.com/Tencent/tmagic-editor',
          events: [],
          created: '',
        },
        {
          type: 'img',
          id: 'img_3877',
          style: {
            position: 'absolute',
            left: '95.91',
            width: '176',
            height: '176',
            top: '325.71',
            right: '',
            bottom: '',
            backgroundImage: '',
            backgroundColor: '',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            color: '',
            fontSize: '',
            fontWeight: '',
          },
          name: '图片',
          src: 'https://vfiles.gtimg.cn/vupload/20210811/388ed01628667545737.png',
          url: '',
          events: [],
          created: '',
        },
        {
          type: 'button',
          id: 'button_430',
          style: {
            position: 'absolute',
            width: '270',
            height: '37.5',
            border: 0,
            backgroundColor: '#fb6f00',
            top: '206.82',
            left: '55.95',
            right: '',
            bottom: '',
            backgroundImage: '',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            color: '',
            fontSize: '',
            fontWeight: '',
          },
          name: '按钮',
          text: '打开弹窗',
          multiple: true,
          events: [
            {
              name: 'magic:common:events:click',
              to: 'overlay_2159',
              method: 'openOverlay',
            },
          ],
          created: '',
        }
      ],
    },
  ],
};
