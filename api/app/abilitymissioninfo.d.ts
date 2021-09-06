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

import { ElementName }  from "./elementname"
import { Want }         from "./want"

/**
 * @name Task stack information corresponding to ability
 * @since 6
 * @SysCap appexecfwk
 * @import import AbilityMissionInfo from '@ohos.AbilityMissionInfo'
 * @permission N/A
 * @devices phone
 * @testapi
 */
export interface AbilityMissionInfo {
    /**
     * Unique identification of task stack information corresponding to ability
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
    id: number;

    /**
     * If this job is currently running, this is the identifier for it
     * If it is not running, this will be -1
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
    runingState: number;

    /**
     * The original Intent used to launch the task stack
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
    baseWant: Want;

    /**
     * The component launched as the first ability in the task stack
     * This can be considered the "application" of this task stack
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
    baseAbility: ElementName;

    /**
     * The ability component at the top of the history stack of the task
     * This is what the user is currently doing
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
    topAbility: ElementName;

    /**
     * Size of abilities in this task
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
    size: number;

    /**
     * The corresponding ability description information in the task stack
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
    missionDescription: MissionDescriptionInfo;
}

/**
 * @name Task stack description information
 * @since 6
 * @SysCap appexecfwk
 * @import import app from '@system.app'
 * @permission N/A
 * @devices phone, tablet
 */

export interface MissionDescriptionInfo {
    /**
     * The label of the specified ability in the task stack
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
    label: string;

    /**
     * The path to the icon that specifies the ability in the task stack
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
    iconPath: string;
}