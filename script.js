import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xa367b1, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7; //Image its 1 meter, it can be any value
// mesh.position.y = -0.6;
// mesh.position.z = 1;
mesh.position.set(0.7, -0.6, 1);
mesh.scale.set(1, 1, 2);
scene.add(mesh);

// mesh.position.normalize(); // take the mesh position to 1
console.log('mesh position', mesh.position.length());

// Rotation
mesh.rotation.reorder('YXZ');
mesh.rotation.x = Math.PI / 0.25;

// axes helper
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

const sizes = {
	width: 800,
	height: 800,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 5;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
