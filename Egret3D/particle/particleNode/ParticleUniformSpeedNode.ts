﻿module egret3d {
        
    /**
    * @private
    */
    export class ParticleUniformSpeedNode extends AnimationNode {

        private _speedShape: Vec3ConstRandomValueShape;
        
        private attribute_uniformSpeed: GLSL.VarRegister
        constructor() {
            super();
            this.name = "ParticleUniformSpeedNode"; 

            this.vertex_ShaderName[ShaderPhaseType.global_vertex] = this.vertex_ShaderName[ShaderPhaseType.global_vertex] || [];
            this.vertex_ShaderName[ShaderPhaseType.global_vertex].push("particle_uniformSpeed");

            this.attribute_uniformSpeed = new GLSL.VarRegister();
            this.attribute_uniformSpeed.name = "attribute_uniformSpeed";
            this.attribute_uniformSpeed.size = 3;
            this.attributes.push(this.attribute_uniformSpeed);
        }

        /**
        * @language zh_CN
        * 填充粒子移动速度数据
        * @param data ParticleDataNode 粒子数据来源
        * @version Egret 3.0
        * @platform Web,Native
        */
        public initNode(data: ParticleDataNode): void {
            var node: ParticleDataMoveSpeed = <ParticleDataMoveSpeed>data;
            this._speedShape = new Vec3ConstRandomValueShape();
            this._speedShape.maxX = node.max.x;
            this._speedShape.maxY = node.max.y;
            this._speedShape.maxZ = node.max.z;

            this._speedShape.minX = node.min.x;
            this._speedShape.minY = node.min.y;
            this._speedShape.minZ = node.min.z;
        }
        /**
        * @language zh_CN
        * 填充顶点数据
        * @param geometry 网格数据
        * @param count 粒子数量
        * @version Egret 3.0
        * @platform Web,Native
        */
        public build(geometry: Geometry, count: number) {

            var vertices: number = geometry.vertexCount / count;
            var index: number = 0;

            var data: any[] = this._speedShape.calculate(count);
            for (var i: number = 0; i < count; ++i) {
                var speed: Vector3D = data[i] ; 
                for (var j: number = 0; j < vertices; ++j) {
                    index = i * vertices + j;
                    index = index * geometry.vertexAttLength + this.attribute_uniformSpeed.offsetIndex;

                    geometry.verticesData[index + 0] = speed.x;
                    geometry.verticesData[index + 1] = speed.y;
                    geometry.verticesData[index + 2] = speed.z;
                }
            }
        }
    }
} 