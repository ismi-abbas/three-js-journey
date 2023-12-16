import * as THREE from 'three';
import gsap from 'gsap';

const canvas = document.querySelector('.animation');
const scene = new THREE.Scene();
const mesh = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
	new THREE.MeshBasicMaterial({ color: 0xa367b1, wireframe: true }),
);
scene.add(mesh);

const cursor = {
	x: 0,
	y: 0,
};

// Cursor
window.addEventListener('mousemove', mouseEvent => {
	cursor.x = mouseEvent.clientX / sizes.width - 0.5;
	cursor.y = mouseEvent.clientY / sizes.height - 0.5;

	console.table({
		x: cursor.x,
		y: cursor.y,
	});
});

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

const sizes = {
	width: 800,
	height: 800,
};

const perspectiveCamera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
const aspectRatio = sizes.height / sizes.width;
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100);
// perspectiveCamera.position.x = 2;
// perspectiveCamera.position.y = 2;
perspectiveCamera.position.z = 3;
perspectiveCamera.lookAt(mesh.position);
scene.add(perspectiveCamera);

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

// gsap.to(mesh.position, { duration: 1, delay: 0, x: 2 });

const clock = new THREE.Clock();

const tick = () => {
	const elapsedTime = clock.getElapsedTime();
	// mesh.rotation.y = (elapsedTime * Math.PI) / 2;

	renderer.render(scene, perspectiveCamera);
	window.requestAnimationFrame(tick);
};

tick();
