"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.z = 28

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Soft floating particles
    const particleCount = 60
    const particleGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 80
      positions[i + 1] = (Math.random() - 0.5) * 80
      positions[i + 2] = (Math.random() - 0.5) * 60
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0xff5a1f,
        size: 0.3,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.4,
      }),
    )
    scene.add(particles)

    // Subtle wireframe torus — light 3D accent
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(5.5, 1.4, 12, 48),
      new THREE.MeshPhongMaterial({
        color: 0xff5a1f,
        emissive: 0x7c2d12,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      }),
    )
    torus.position.set(8, 2, -4)
    scene.add(torus)

    // Small icosahedron for depth
    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.2, 0),
      new THREE.MeshPhongMaterial({
        color: 0xff8a4c,
        emissive: 0x9a3412,
        wireframe: true,
        transparent: true,
        opacity: 0.16,
      }),
    )
    ico.position.set(-10, -3, -2)
    scene.add(ico)

    scene.add(new THREE.AmbientLight(0xffffff, 0.3))
    const pointLight = new THREE.PointLight(0xff8a4c, 0.75, 120)
    pointLight.position.set(12, 10, 16)
    scene.add(pointLight)

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    let frameId = 0
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    const onResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("resize", onResize)

    const animate = () => {
      frameId = requestAnimationFrame(animate)

      if (!reducedMotion) {
        targetX += (mouseX - targetX) * 0.03
        targetY += (mouseY - targetY) * 0.03

        particles.rotation.y += 0.0004
        particles.rotation.x += 0.00015

        torus.rotation.x += 0.003
        torus.rotation.y += 0.004
        torus.position.x = 8 + targetX * 1.2
        torus.position.y = 2 - targetY * 0.8

        ico.rotation.x -= 0.004
        ico.rotation.z += 0.003
        ico.position.x = -10 + targetX * 0.8
        ico.position.y = -3 - targetY * 0.6
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", onResize)
      particleGeometry.dispose()
      ;(particles.material as THREE.Material).dispose()
      torus.geometry.dispose()
      ;(torus.material as THREE.Material).dispose()
      ico.geometry.dispose()
      ;(ico.material as THREE.Material).dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 -z-10 pointer-events-none" aria-hidden />
}
