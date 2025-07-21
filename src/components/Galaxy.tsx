import { Renderer, Program, Mesh, Triangle } from "ogl";
import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;
uniform float uTime;
varying vec2 vUv;

void main() {
  vec2 uv = vUv - 0.5;
  float len = length(uv);
  float angle = atan(uv.y, uv.x);
  float color = 0.5 + 0.5 * sin(uTime * 0.8 + angle * 5.0) * cos(uTime * 0.6 + len * 20.0);
  vec3 col = mix(vec3(0.0, 0.1, 0.3), vec3(0.0, 0.8, 1.0), color);
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Galaxy() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    container.current.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: { uTime: { value: 0 } }
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      renderer.setSize(container.current!.offsetWidth, container.current!.offsetHeight);
    }
    window.addEventListener("resize", resize);
    resize();

    let t = 0;
    function update() {
      requestAnimationFrame(update);
      program.uniforms.uTime.value = t += 0.03;
      renderer.render({ scene: mesh });
    }
    update();

    return () => {
      window.removeEventListener("resize", resize);
      gl.canvas.remove();
    };
  }, []);

  return <div ref={container} className="absolute inset-0 z-0"></div>;
}