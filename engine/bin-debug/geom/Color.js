var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var egret3d;
(function (egret3d) {
    /**
    * @language zh_CN
    * @class egret3d.Color
    * @classdesc
    * 可使用 Color 类调整显示对象的颜色值
    * 使用的时候需要区分当前的值是0-255之间，还是0-1之间
    * @includeExample geom/Color.ts
    * @version Egret 3.0
    * @platform Web,Native
    */
    var Color = (function () {
        /**
        * @language zh_CN
        * 创建一个Color对象
        * @param r red
        * @param g green
        * @param b blue
        * @param a alpha
        * @version Egret 3.0
        * @platform Web,Native
        */
        function Color(r, g, b, a) {
            if (r === void 0) { r = 0; }
            if (g === void 0) { g = 0; }
            if (b === void 0) { b = 0; }
            if (a === void 0) { a = 255; }
            /**
            * @language zh_CN
            * alpha
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.a = 255;
            /**
            * @language zh_CN
            * red
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.r = 255;
            /**
            * @language zh_CN
            * green
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.g = 255;
            /**
            * @language zh_CN
            * blue
            * @version Egret 3.0
            * @platform Web,Native
            */
            this.b = 255;
            this.a = a;
            this.r = r;
            this.g = g;
            this.b = b;
        }
        /**
        * @language zh_CN
        * 返回白色 new Color(255, 255, 255, 255)
        * @retruns Color 白色
        * @version Egret 3.0
        * @platform Web,Native
        */
        Color.white = function () {
            return new Color(255, 255, 255, 255);
        };
        /**
        * @language zh_CN
        * 返回黑色 new Color(0, 0, 0, 255)
        * @retrun Color 黑色
        * @version Egret 3.0
        * @platform Web,Native
        */
        Color.black = function () {
            return new Color(0, 0, 0, 255);
        };
        /**
        * @language zh_CN
        * 返回白色 new Color(255, 0, 0, 255)
        * @retrun 白色
        * @version Egret 3.0
        * @platform Web,Native
        */
        Color.red = function () {
            return new Color(255, 0, 0, 255);
        };
        /**
        * @language zh_CN
        * 返回绿色 new Color(0, 255, 0, 255)
        * @retrun 绿色
        * @version Egret 3.0
        * @platform Web,Native
        */
        Color.green = function () {
            return new Color(0, 255, 0, 255);
        };
        /**
        * @language zh_CN
        * 返回蓝色 new Color(0, 0, 255, 255)
        * @retruns 蓝色
        * @version Egret 3.0
        * @platform Web,Native
        */
        Color.blue = function () {
            return new Color(0, 0, 255, 255);
        };
        /**
        * @language zh_CN
        * 返回Vector3格式的颜色数据
        * @param color 颜色数据
        * @param colorFormat 指定的颜色格式
        * @param target 传入的Vector3对象，如果为null，会自动创建一个用于返回
        * @retruns 返回Vector3格式的颜色数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        Color.getColor = function (color, colorFormat, target) {
            if (colorFormat === void 0) { colorFormat = egret3d.ContextConfig.ColorFormat_RGBA8888; }
            if (target === void 0) { target = null; }
            if (!target) {
                target = new egret3d.Vector3();
            }
            target.setTo((color >> 16 & 0xff) / 255, (color >> 8 & 0xff) / 255, (color & 0xff) / 255, (color >> 24 & 0xff) / 255);
            return target;
        };
        /**
        * @language zh_CN
        * 将rgba四个通道，分离过的数据合并为一个颜色数据
        * @param r red通道
        * @param g green通道
        * @param b blue通道
        * @param a alpha通道
        * @retruns number 返回颜色数据
        * @version Egret 3.0
        * @platform Web,Native
        */
        Color.RGBAToColor = function (r, g, b, a) {
            return (a << 24) | (r << 16) | (g << 8) | b;
        };
        /**
        * @language zh_CN
        * 以number值返加颜色
        * @param colorFormat 格式
        * @returns number 颜色
        * @version Egret 3.0
        * @platform Web,Native
        */
        Color.prototype.getColor = function (colorFormat) {
            if (colorFormat === void 0) { colorFormat = egret3d.ContextConfig.ColorFormat_RGBA8888; }
            if (colorFormat == egret3d.ContextConfig.ColorFormat_RGB565)
                return 0;
            if (colorFormat == egret3d.ContextConfig.ColorFormat_RGBA5551)
                return 0;
            if (colorFormat == egret3d.ContextConfig.ColorFormat_RGBA4444)
                return 0;
            return this.r << 24 | this.g << 16 | this.b << 8 | this.a;
        };
        /**
        * @language zh_CN
        * 颜色取插值
        * @param c0 颜色1
        * @param c1 颜色2
        * @param t (0.0-1.0)
        * @version Egret 3.0
        * @platform Web,Native
        */
        Color.prototype.lerp = function (c0, c1, t) {
            ///t(c1 - c0) + c0
            this.a = t * (c1.a - c0.a) + c0.a;
            this.r = t * (c1.r - c0.r) + c0.r;
            this.g = t * (c1.g - c0.g) + c0.g;
            this.b = t * (c1.b - c0.b) + c0.b;
            this.a = Math.floor(this.a);
            this.r = Math.floor(this.r);
            this.g = Math.floor(this.g);
            this.b = Math.floor(this.b);
        };
        /**
         * @language zh_CN
         * 拷贝颜色值
         * @param src Color 被拷贝对象颜色
         * @version Egret 3.0
         * @platform Web,Native
         */
        Color.prototype.copyFrom = function (src) {
            this.a = src.a;
            this.r = src.r;
            this.g = src.g;
            this.b = src.b;
        };
        /**
         * @language zh_CN
         * 设置颜色值
         * @param a Alpha
         * @param r Red
         * @param g Green
         * @param b Blue
         * @version Egret 3.0
         * @platform Web,Native
         */
        Color.prototype.setTo = function (a, r, g, b) {
            if (a === void 0) { a = 255; }
            if (r === void 0) { r = 255; }
            if (g === void 0) { g = 255; }
            if (b === void 0) { b = 255; }
            this.a = a;
            this.r = r;
            this.g = g;
            this.b = b;
        };
        /**
         * @language zh_CN
         * 创建颜色值
         * @param argb 0xff00ff00格式
         * @returns color
         * @version Egret 3.0
         * @platform Web,Native
         */
        Color.createColor = function (argb) {
            var color = new Color();
            color.setColorARGB(argb);
            return color;
        };
        /**
         * @language zh_CN
         * 设置颜色值
         * @param argb 0xff00ff00格式
         * @version Egret 3.0
         * @platform Web,Native
         */
        Color.prototype.setColorARGB = function (argb) {
            this.a = argb / 0x1000000;
            this.a >>= 0;
            this.r = argb & 0xff0000;
            this.r >>= 16;
            this.g = argb & 0xff00;
            this.g >>= 8;
            this.b = argb & 0xff;
        };
        /**
         * @language zh_CN
         * 设置颜色值
         * @param rgb 0xffffff格式
         * @version Egret 3.0
         * @platform Web,Native
         */
        Color.prototype.setColorRGB = function (rgb) {
            this.r = rgb & 0xff0000;
            this.r >>= 16;
            this.g = rgb & 0xff00;
            this.g >>= 8;
            this.b = rgb & 0xff;
        };
        /**
         * @language zh_CN
         * 在2个颜色之间取随机颜色
         * @param c1 第一个颜色
         * @param c2 第二个颜色
         * @param sameRandom 是否argb的随机种子使用同一个
         * @version Egret 3.0
         * @platform Web,Native
         */
        Color.prototype.randomColor = function (c1, c2, sameRandom) {
            if (sameRandom === void 0) { sameRandom = false; }
            if (sameRandom) {
                var random = Math.random();
                this.a = c1.a + (c2.a - c1.a) * random;
                this.r = c1.r + (c2.r - c1.r) * random;
                this.g = c1.g + (c2.g - c1.g) * random;
                this.b = c1.b + (c2.b - c1.b) * random;
            }
            else {
                this.a = c1.a + (c2.a - c1.a) * Math.random();
                this.r = c1.r + (c2.r - c1.r) * Math.random();
                this.g = c1.g + (c2.g - c1.g) * Math.random();
                this.b = c1.b + (c2.b - c1.b) * Math.random();
            }
            this.a = Math.floor(this.a);
            this.r = Math.floor(this.r);
            this.g = Math.floor(this.g);
            this.b = Math.floor(this.b);
        };
        /**
         * @language zh_CN
         * 缩放当前颜色
         * @param value 缩放系数
         * @version Egret 3.0
         * @platform Web,Native
         */
        Color.prototype.scaleBy = function (value) {
            this.a *= value;
            this.r *= value;
            this.g *= value;
            this.b *= value;
        };
        return Color;
    }());
    egret3d.Color = Color;
    __reflect(Color.prototype, "egret3d.Color");
})(egret3d || (egret3d = {}));
