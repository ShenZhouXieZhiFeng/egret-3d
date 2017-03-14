var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var egret3d;
(function (egret3d) {
    /**
    *
    * @language zh_CN
    * @class egret3d.EventListener
    * @classdesc
    * EventListener类，用于添加或删除事件侦听器。
    * @version Egret 3.0
    * @platform Web,Native
    */
    var EventListener = (function () {
        /**
        * @language zh_CN
        * @param type {string} 事件的类型。
        * @param thisObject {any} 注册的对象
        * @param handler {Function} 处理事件的侦听器函数
        * @param param {any} 注册事件时指定的参数，事件响应时传出
        * @param priority {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
        * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
        * @version Egret 3.0
        * @platform Web,Native
        */
        function EventListener(type, thisObject, handler, param, priority) {
            if (type === void 0) { type = null; }
            if (thisObject === void 0) { thisObject = null; }
            if (handler === void 0) { handler = null; }
            if (param === void 0) { param = null; }
            if (priority === void 0) { priority = 0; }
            this.type = type;
            this.thisObject = thisObject;
            this.handler = handler;
            this.param = param;
            this.priority = priority;
        }
        /**
        * @language zh_CN
        * 比较两个事件是否是同一事件。
        * @param type {string} 事件的类型。
        * @param handler {Function} 处理事件的侦听器函数
        * @param thisObject {any} 注册的对象
        * @param param {any} 注册事件时指定的参数，事件响应时传出
        * @returns {boolean} 一致时返回true，反之为false
        * @version Egret 3.0
        * @platform Web,Native
        */
        EventListener.prototype.equalCurrentListener = function (type, handler, thisObject, param) {
            if (this.type == type && this.thisObject == thisObject && this.handler == handler && this.param == param) {
                return true;
            }
            return false;
        };
        return EventListener;
    }());
    /**
    * @private
    */
    EventListener.event_id_count = 0;
    egret3d.EventListener = EventListener;
    __reflect(EventListener.prototype, "egret3d.EventListener");
    /**
    * @language zh_CN
    * @class egret3d.EventDispatcher
    * @classdesc
    * EventDispatcher 类是可调度事件的所有类的基类,包含了事件的注册,注销，分发和清理等功能实现。
    * @includeExample events/EventDispatcher.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    var EventDispatcher = (function () {
        function EventDispatcher() {
            /**
             * @language zh_CN
             * @private
             */
            this.listeners = {};
        }
        /**
         * @language zh_CN
         * 派发一个 Event3D 事件到所有注册了特定类型侦听器的对象中。
         * @param event3D {Event3D} 事件信息，其中Event3D.eventType为事件标识符，通过该标识进行派发。
         * @see egret3d.Event3D
         * @version Egret 3.0
         * @platform Web,Native
         */
        EventDispatcher.prototype.dispatchEvent = function (event3D) {
            var list = this.listeners[event3D.eventType];
            if (list != null) {
                list = list.slice();
                for (var i = 0; i < list.length; i++) {
                    if (event3D.isStopImmediatePropagation) {
                        break;
                    }
                    var listener = list[i];
                    try {
                        event3D.param = listener.param;
                        event3D.target = this;
                        event3D.currentTarget = listener;
                        listener.handler.call(listener.thisObject, event3D);
                    }
                    catch (error) {
                        if (window.console) {
                            console.error(error.stack);
                        }
                    }
                }
            }
        };
        /**
        * @language zh_CN
        * 释放所有数据。
        * @version Egret 3.0
        * @platform Web,Native
        */
        EventDispatcher.prototype.dispose = function () {
            for (var key in this.listeners) {
                var list = this.listeners[key];
                while (list.length > 0) {
                    var listener = list[0];
                    listener.handler = null;
                    listener.thisObject = null;
                    list.splice(0, 1);
                }
            }
        };
        /**
        * @language zh_CN
        * 使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。可以为特定类型的事件和优先级注册事件侦听器。成功注册一个事件侦听器后，无法通过额外调用 addEventListener() 来更改其优先级。要更改侦听器的优先级，必须首先调用 removeEventListener()。然后，可以使用新的优先级再次注册该侦听器。
        * @param type {string} 事件的类型标识符。
        * @param callback {Function} 处理事件的侦听器函数。此函数必须接受 Event3D 对象作为其唯一的参数，并且不能返回任何结果，
        * 如下面的示例所示： function(evt:Event3D):void 函数可以有任何名称。
        * @param thisObject {any} 当前注册对象。
        * @param param {any} 事件携带参数，默认为空。
        * @param priority {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
        * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
        * @returns {number} 注册事件位置标识id
         * @version Egret 3.0
         * @platform Web,Native
        */
        EventDispatcher.prototype.addEventListener = function (type, callback, thisObject, param, priority) {
            if (param === void 0) { param = null; }
            if (priority === void 0) { priority = 0; }
            if (this.listeners[type] == null) {
                this.listeners[type] = [];
            }
            var listener = new EventListener(type, thisObject, callback, param, priority);
            listener.id = ++EventListener.event_id_count;
            this.listeners[type].push(listener);
            this.listeners[type].sort(function (listener1, listener2) {
                return listener2.priority - listener1.priority;
            });
            return listener.id;
        };
        /**
         * @language zh_CN
         * 移除事件侦听器。
         * @param type {string} 事件名。
         * @param callback {Function} 侦听函数。
         * @param thisObject {any} 当前注册对象。
         * @version Egret 3.0
         * @platform Web,Native
         */
        EventDispatcher.prototype.removeEventListener = function (type, callback, thisObject) {
            if (this.hasEventListener(type, callback, thisObject)) {
                for (var i = 0; i < this.listeners[type].length; i++) {
                    var listener = this.listeners[type][i];
                    if (listener.equalCurrentListener(type, callback, thisObject, listener.param)) {
                        listener.handler = null;
                        listener.thisObject = null;
                        this.listeners[type].splice(i, 1);
                        return;
                    }
                }
            }
        };
        /**
         * @language zh_CN
         * 移除事件侦听器。
         * @param id  事件id,调用addEventListener的返回值即为事件id.
         * @version Egret 3.0
         * @platform Web,Native
         */
        EventDispatcher.prototype.removeEventListenerAt = function (id) {
            for (var key in this.listeners) {
                for (var i = 0; i < this.listeners[key].length; i++) {
                    var listener = this.listeners[key][i];
                    if (listener.id == id) {
                        listener.handler = null;
                        listener.thisObject = null;
                        this.listeners[key].splice(i, 1);
                        return;
                    }
                }
            }
        };
        /**
         * @language zh_CN
         * 移除所有事件侦听器。
         * @version Egret 3.0
         * @platform Web,Native
         */
        EventDispatcher.prototype.clearEventListener = function () {
            this.listeners = {};
        };
        /**
        * @language zh_CN
        * 检测是否存在监听器。
        * @param type {string} 事件类型标识符
        * @returns {boolean} 是否存在该类型监视器，true为存在，反之不存在。
         * @version Egret 3.0
         * @platform Web,Native
        */
        EventDispatcher.prototype.containEventListener = function (type) {
            if (this.listeners[type] == null)
                return false;
            return this.listeners[type].length > 0;
        };
        /**
        * @language zh_CN
        * 检测是否存在监听器。
        * @param type {string} 事件名
        * @param callback {Function} 处理事件的侦听器函数
        * @param thisObject {any} 注册对象。
        * @returns {boolean} 是否存在该事件，true为存在，反之不存在。
        * @version Egret 3.0
        * @platform Web,Native
        */
        EventDispatcher.prototype.hasEventListener = function (type, callback, thisObject) {
            if (callback === void 0) { callback = null; }
            if (thisObject === void 0) { thisObject = null; }
            if (this.listeners[type] == null)
                return false;
            if (thisObject && callback) {
                for (var i = 0; i < this.listeners[type].length; i++) {
                    var listener = this.listeners[type][i];
                    if (listener.equalCurrentListener(type, callback, thisObject, listener.param)) {
                        return true;
                    }
                }
            }
            return false;
        };
        return EventDispatcher;
    }());
    egret3d.EventDispatcher = EventDispatcher;
    __reflect(EventDispatcher.prototype, "egret3d.EventDispatcher");
})(egret3d || (egret3d = {}));
