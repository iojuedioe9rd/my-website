import * as THREE from "three"

const scene = new THREE.Scene()

const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000)
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#bg")})

renderer.setSize(window.innerWidth, window.innerHeight)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
const cube = new THREE.Mesh(geometry, material)
const color1 = new THREE.Color();
renderer.setClearColor(color1, 1)
scene.add(cube)

cam.position.z = 5

animate()

function animate() {
    
    renderer.render(scene, cam)
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01}