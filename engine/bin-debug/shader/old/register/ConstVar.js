var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.ConstVar
        * @classdesc
        * shader中常量类型变量的所有数据
        * 包含变量类型，变量名，变量的值
        *
        * @see egret3d.AttributeType
        *
        * @version Egret 3.0
        * @platform Web,Native
        */
        var ConstVar = (function (_super) {
            __extends(ConstVar, _super);
            /**
            * @language zh_CN
            * 构造
            * @param name 常量名
            * @param valueType 常量类型
            * @param value 常量的值
            */
            function ConstVar(name, valueType, value) {
                var _this = _super.call(this) || this;
                _this.name = name;
                _this.computeVarName();
                _this.key = "const";
                _this.valueType = valueType;
                _this.value = value;
                return _this;
            }
            return ConstVar;
        }(GLSL.VarRegister));
        GLSL.ConstVar = ConstVar;
        __reflect(ConstVar.prototype, "egret3d.GLSL.ConstVar");
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
