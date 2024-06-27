// fragment.glsl
uniform sampler2D uImage;

void main() {
    vec2 uv = vec2(gl_FragCoord.x / resolution.x, gl_FragCoord.y / resolution.y);
    vec4 texColor = texture2D(uImage, uv);
    gl_FragColor = texColor;
}
