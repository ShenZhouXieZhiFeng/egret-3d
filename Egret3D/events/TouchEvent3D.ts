﻿module egret3d {

    /**
    * @language zh_CN
    * @class egret3d.Event3D
    * @classdesc
    * MouseEvent3D 是所有引擎中可操作触摸事件节点 的事件类型标记。
    * @includeExample events/Event3D.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    export class TouchEvent3D extends Event3D {
       /**
        * @language zh_CN
        * TOUCH_MOVE 常量定义 onTouchMove 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static TOUCH_MOVE: string = "onTouchMove";
        /**
        * @language zh_CN
        * TOUCH_END 常量定义 onTouchEnd 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static TOUCH_END: string = "onTouchEnd";
        /**
        * @language zh_CN
        * TOUCH_START 常量定义 onTouchStart 事件对象的 type 属性的值。
        * @version Egret 3.0
        * @platform Web,Native
        */
        static TOUCH_START: string = "onTouchStart";
    }
} 