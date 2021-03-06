/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { CommonMethod } from "./common";

/**
 * Defines the GeometryView Component.
 * @since 8
 */
interface GeometryView extends GeometryViewAttribute<GeometryView> {
  /**
   * Callback function.
   * @since 8
   */
  (callback: (geometry?: any) => void): GeometryView;
}

/**
 * Inherit Public
 * @since 8
 */
declare class GeometryViewAttribute<T> extends CommonMethod<T> {}

export declare class GeometryViewExtend<T> extends GeometryViewAttribute<T> {}
export declare const GeometryViewInterface: GeometryView;
