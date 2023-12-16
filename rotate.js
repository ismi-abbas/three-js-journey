import * as THREE from 'three';

const canvas = document.querySelector('.rotate_circle');

const sizes = {
	width: 800,
	height: 800,
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 7;

const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

const torus1 = new THREE.TorusGeometry(2);
const torus2 = new THREE.TorusGeometry(3);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const ring = new THREE.Mesh(torus1, material);
const ring2 = new THREE.Mesh(torus2, material2);
scene.add(ring);
scene.add(ring2);

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

const animate = () => {
	requestAnimationFrame(animate);

	ring.rotation.x += 0.01;
	// ring.rotation.y += 0.01;
	// ring.rotation.z += 0.01;

	// ring2.rotation.x += 0.01;
	ring2.rotation.y += 0.01;
	// ring2.rotation.z += 0.01;

	renderer.render(scene, camera);
};

animate();
