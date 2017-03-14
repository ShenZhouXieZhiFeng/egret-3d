var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var egret3d;
(function (egret3d) {
    var GLSL;
    (function (GLSL) {
        /**
        * @private
        * @class egret3d.VarConstName
        * @classdesc
        * shader 变量 名字定义
        * 用户在写自定义shader时，按照引擎中已经列取出来的变量名进行命名
        */
        var VarConstName = (function () {
            function VarConstName() {
            }
            return VarConstName;
        }());
        VarConstName.attribute_position = "attribute_position";
        VarConstName.attribute_normal = "attribute_normal";
        VarConstName.attribute_tangent = "attribute_tangent";
        VarConstName.attribute_vertexColor = "attribute_vertexColor";
        VarConstName.attribute_uv0 = "attribute_uv0";
        VarConstName.attribute_uv1 = "attribute_uv1";
        VarConstName.varying_pos = "varying_pos";
        VarConstName.varying_normal = "varying_normal";
        VarConstName.varying_tangent = "varying_tangent";
        VarConstName.varying_color = "varying_color";
        VarConstName.varying_uv0 = "varying_uv0";
        VarConstName.varying_uv1 = "varying_uv1";
        VarConstName.varying_globalPos = "varying_globalPos";
        VarConstName.varying_lightDir = "varying_lightDir";
        VarConstName.varying_eye = "varying_eye";
        VarConstName.uniform_floatv_0 = "uniform_floatv_0";
        VarConstName.uniform_floatv_1 = "uniform_floatv_1";
        VarConstName.uniform_floatv_2 = "uniform_floatv_2";
        VarConstName.uniform_iv_0 = "uniform_iv_0";
        VarConstName.uniform_iv_1 = "uniform_iv_1";
        VarConstName.uniform_iv_2 = "uniform_iv_2";
        VarConstName.uniform_bv_0 = "uniform_bv_0";
        VarConstName.uniform_bv_1 = "uniform_bv_1";
        VarConstName.uniform_bv_2 = "uniform_bv_2";
        VarConstName.uniform_vec2fv_0 = "uniform_vec2fv_0";
        VarConstName.uniform_vec2fv_1 = "uniform_vec2fv_1";
        VarConstName.uniform_vec2fv_2 = "uniform_vec2fv_2";
        VarConstName.uniform_vec3fv_0 = "uniform_vec3fv_0";
        VarConstName.uniform_vec3fv_1 = "uniform_vec3fv_1";
        VarConstName.uniform_vec3fv_2 = "uniform_vec3fv_2";
        VarConstName.uniform_vec4fv_0 = "uniform_vec4fv_0";
        VarConstName.uniform_vec4fv_1 = "uniform_vec4fv_1";
        VarConstName.uniform_vec4fv_2 = "uniform_vec4fv_2";
        VarConstName.uniform_vec2iv_0 = "uniform_vec2iv_0";
        VarConstName.uniform_vec2iv_1 = "uniform_vec2iv_1";
        VarConstName.uniform_vec2iv_2 = "uniform_vec2iv_2";
        VarConstName.uniform_vec3iv_0 = "uniform_vec3iv_0";
        VarConstName.uniform_vec3iv_1 = "uniform_vec3iv_1";
        VarConstName.uniform_vec3iv_2 = "uniform_vec3iv_2";
        VarConstName.uniform_vec4iv_0 = "uniform_vec4iv_0";
        VarConstName.uniform_vec4iv_1 = "uniform_vec4iv_1";
        VarConstName.uniform_vec4iv_2 = "uniform_vec4iv_2";
        VarConstName.uniform_vec2bv_0 = "uniform_vec2bv_0";
        VarConstName.uniform_vec2bv_1 = "uniform_vec2bv_1";
        VarConstName.uniform_vec2bv_2 = "uniform_vec2bv_2";
        VarConstName.uniform_vec3bv_0 = "uniform_vec3bv_0";
        VarConstName.uniform_vec3bv_1 = "uniform_vec3bv_1";
        VarConstName.uniform_vec3bv_2 = "uniform_vec3bv_2";
        VarConstName.uniform_vec4bv_0 = "uniform_vec4bv_0";
        VarConstName.uniform_vec4bv_1 = "uniform_vec4bv_1";
        VarConstName.uniform_vec4bv_2 = "uniform_vec4bv_2";
        VarConstName.uniform_modelMatrix = "uniform_modelMatrix";
        VarConstName.uniform_projectionMatrix = "uniform_projectionMatrix";
        VarConstName.uniform_normalMatrix = "uniform_normalMatrix";
        VarConstName.uniform_eye = "uniform_eye";
        VarConstName.uniform_lightDir = "uniform_lightDir";
        VarConstName.texture2D_0 = "texture2D_0";
        VarConstName.texture2D_1 = "texture2D_1";
        VarConstName.texture2D_2 = "texture2D_2";
        VarConstName.texture2D_3 = "texture2D_3";
        VarConstName.texture2D_4 = "texture2D_4";
        GLSL.VarConstName = VarConstName;
        __reflect(VarConstName.prototype, "egret3d.GLSL.VarConstName");
    })(GLSL = egret3d.GLSL || (egret3d.GLSL = {}));
})(egret3d || (egret3d = {}));
