/**
 * File: /src/index.ts
 * Project: react-native-ignore-warnings
 * File Created: 09-07-2021 18:35:16
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 09-07-2021 18:43:44
 * Modified By: Clay Risser <email@clayrisser.com>
 * -----
 * Silicon Hills LLC (c) Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ignoreWarnings from 'ignore-warnings';
import { LogBox } from 'react-native';

export default function reactNativeIgnoreWarnings(
  type: string,
  ignoreMessages: string | string[]
) {
  if (!ignoreMessages) {
    ignoreMessages = type;
    type = 'warn';
  }
  if (!Array.isArray(ignoreMessages)) ignoreMessages = [ignoreMessages];
  LogBox.ignoreLogs(ignoreMessages);
  ignoreWarnings(type, ignoreMessages);
}
