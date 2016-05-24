uniform mat4 uniform_ShadowMatrix;

varying vec4 varying_ShadowCoord;

void main() {
	varying_ShadowCoord = uniform_ShadowMatrix * vec4(attribute_position, 1.0);
}