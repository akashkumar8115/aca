import React, { useEffect } from 'react'
import * as THREE from 'three'

const HeroAnimation = () => {
    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true })

        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
        document.getElementById('hero-animation').appendChild(renderer.domElement)

        // Create floating education symbols
        const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
        const material = new THREE.MeshStandardMaterial({
            color: '#6366f1',
            metalness: 0.7,
            roughness: 0.2
        })
        const torus = new THREE.Mesh(geometry, material)
        scene.add(torus)

        // Lighting
        const pointLight = new THREE.PointLight(0xffffff)
        pointLight.position.set(5, 5, 5)
        scene.add(pointLight)

        camera.position.z = 30

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate)
            torus.rotation.x += 0.01
            torus.rotation.y += 0.005
            renderer.render(scene, camera)
        }

        animate()
    }, [])

    return <div id="hero-animation" className="absolute top-0 right-0 -z-10" />
}

export default HeroAnimation
