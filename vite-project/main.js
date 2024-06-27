import { document } from "postcss";
import "./style.css";
import * as THREE from "three";

class Site {
  constructor({ dom }) {
    this.time = 0;
    this.container = dom;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.images = [...document.querySelector(".images img")];
    this.material;
    this.imageStore = [];
    this.uStartIndex = 0;
    this.uEndIndex = 1;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,

     } );
    this.renderer.setSize(this.width, this.height);
    this .container.appendChild(this.renderer.domElement);

    this.render();
  }
  render() {
    this.time++;
    console.log(this.time);
    window.requestAnimationFrame(this.render.bind(this));
  }
}
new Site({
  dom: document.querySelector(".canvas"),
});
