import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeApertureProps {
  className?: string;
  theme?: 'dark' | 'light';
}

export const ThreeAperture: React.FC<ThreeApertureProps> = ({ className = '', theme = 'dark' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the camera lens aperture sculpture
    const apertureGroup = new THREE.Group();
    scene.add(apertureGroup);

    // Color definitions
    const orangeColor = new THREE.Color(0xff5500);
    const blueColor = new THREE.Color(0x2563eb);
    const ringColor = theme === 'dark' ? 0x24201d : 0xd1cac2;

    // Outer aperture ring
    const ringGeo = new THREE.TorusGeometry(2.2, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: ringColor,
      transparent: true,
      opacity: theme === 'dark' ? 0.6 : 0.4
    });
    const outerRing = new THREE.Mesh(ringGeo, ringMat);
    apertureGroup.add(outerRing);

    // Inner orange focus reticle ring
    const innerRingGeo = new THREE.TorusGeometry(1.6, 0.02, 16, 64);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: orangeColor,
      transparent: true,
      opacity: 0.85
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    apertureGroup.add(innerRing);

    // 8 Aperture Blades forming an artistic mechanical iris
    const bladeCount = 8;
    const bladeGroup = new THREE.Group();
    apertureGroup.add(bladeGroup);

    for (let i = 0; i < bladeCount; i++) {
      const angle = (i / bladeCount) * Math.PI * 2;
      const bladeGeo = new THREE.BufferGeometry();
      
      // Points for an elongated curved aperture blade
      const points = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(1.4, 0.4, 0.05 * (i % 2 === 0 ? 1 : -1)),
        new THREE.Vector3(1.2, 1.1, 0),
        new THREE.Vector3(0.2, 0.9, 0),
      ];
      bladeGeo.setFromPoints(points);

      const bladeMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? orangeColor : (theme === 'dark' ? 0xffffff : 0x111111),
        transparent: true,
        opacity: i % 2 === 0 ? 0.75 : 0.25,
        linewidth: 1
      });
      const bladeLine = new THREE.LineLoop(bladeGeo, bladeMat);
      bladeLine.rotation.z = angle;
      bladeLine.position.set(Math.cos(angle) * 0.7, Math.sin(angle) * 0.7, 0);
      bladeGroup.add(bladeLine);
    }

    // Abstract geometric lens prism (Icosahedron wireframe)
    const prismGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const prismMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x1a1816 : 0xf0ece4,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });
    const prismMesh = new THREE.Mesh(prismGeo, prismMat);
    apertureGroup.add(prismMesh);

    // Subtle lighting for 3D depth
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const orangePointLight = new THREE.PointLight(0xff5500, 2.5, 10);
    orangePointLight.position.set(3, 2, 4);
    scene.add(orangePointLight);

    const bluePointLight = new THREE.PointLight(0x2563eb, 1.8, 10);
    bluePointLight.position.set(-3, -2, 2);
    scene.add(bluePointLight);

    // Mouse tracking for parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous slow elegant rotation
        apertureGroup.rotation.z = elapsedTime * 0.15;
        prismMesh.rotation.x = elapsedTime * 0.3;
        prismMesh.rotation.y = elapsedTime * 0.25;

        // Smooth mouse parallax easing
        targetRotationX = mouseY * 0.4;
        targetRotationY = mouseX * 0.4;

        apertureGroup.rotation.x += (targetRotationX - apertureGroup.rotation.x) * 0.05;
        apertureGroup.rotation.y += (targetRotationY - apertureGroup.rotation.y) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      ringGeo.dispose();
      innerRingGeo.dispose();
      prismGeo.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
