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

import Button from './button';
import Container from './container';
import Img from './img';
import Overlay from './overlay/index.js';
import Page from './page';
import Qrcode from './qrcode';
import Text from './text';

const ui = {
  'magic-ui-page': Page,
  'magic-ui-container': Container,
  'magic-ui-button': Button,
  'magic-ui-text': Text,
  'magic-ui-img': Img,
  'magic-ui-qrcode': Qrcode,
  'magic-ui-overlay': Overlay,
};

export default ui;