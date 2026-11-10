import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const NODE_CONFIGS = {
  student: {
    id: 'student',
    label: 'Student Node',
    sublabel: 'Attendance · Roadmaps · ATS KYC',
    pos: [-3.2, 0.4, 0.8],
    color: 0xd9381e, // Vermilion accent
    secondaryColor: 0xff6b4a,
    geometryType: 'icosahedron',
  },
  faculty: {
    id: 'faculty',
    label: 'Faculty Node',
    sublabel: 'SSR Inputs · Timetables · Analytics',
    pos: [3.2, 1.2, -0.6],
    color: 0x22262d,
    secondaryColor: 0x4a5568,
    geometryType: 'octahedron',
  },
  institute: {
    id: 'institute',
    label: 'Institute Node',
    sublabel: 'NAAC Criteria · AISHE · Branding',
    pos: [1.8, -2.4, 1.2],
    color: 0x111215,
    secondaryColor: 0x333842,
    geometryType: 'dodecahedron',
  },
  authority: {
    id: 'authority',
    label: 'Central Authority',
    sublabel: 'Regulatory · Oversight · Grievances',
    pos: [-1.4, 2.8, -1.2],
    color: 0xb52b14,
    secondaryColor: 0xd9381e,
    geometryType: 'tetrahedron',
  },
};

function checkWebGLSupport() {
  if (typeof window === 'undefined') return false;
  try {
    const testCanvas = document.createElement('canvas');
    return Boolean(testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
}

export default function CampusScene3D({
  activeRole = 'student',
  onSelectRole,
  isNoticeBroadcasting = false,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isSupported] = useState(checkWebGLSupport);
  const [hoveredNode, setHoveredNode] = useState(null);
  const hoveredNodeRef = useRef(null);

  useEffect(() => {
    if (!isSupported) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = null; // transparent

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xf5f3ee, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight1.position.set(5, 8, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xd9381e, 0.8);
    dirLight2.position.set(-6, -4, -4);
    scene.add(dirLight2);

    // Group for entire campus mesh
    const campusGroup = new THREE.Group();
    scene.add(campusGroup);

    // Build Nodes
    const nodeMeshes = {};
    const nodeWireframes = {};

    Object.values(NODE_CONFIGS).forEach((cfg) => {
      let geom;
      if (cfg.geometryType === 'icosahedron') geom = new THREE.IcosahedronGeometry(0.85, 0);
      else if (cfg.geometryType === 'octahedron') geom = new THREE.OctahedronGeometry(0.85, 0);
      else if (cfg.geometryType === 'dodecahedron') geom = new THREE.DodecahedronGeometry(0.85, 0);
      else geom = new THREE.TetrahedronGeometry(0.9, 0);

      const mat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        roughness: 0.35,
        metalness: 0.15,
        flatShading: true,
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(...cfg.pos);
      mesh.userData = { id: cfg.id };

      // Surrounding wireframe ring / cage
      const wireGeom = new THREE.WireframeGeometry(geom);
      const wireMat = new THREE.LineBasicMaterial({
        color: cfg.id === 'student' ? 0xd9381e : 0x8a857d,
        transparent: true,
        opacity: 0.45,
      });
      const wire = new THREE.LineSegments(wireGeom, wireMat);
      wire.scale.set(1.22, 1.22, 1.22);
      mesh.add(wire);

      campusGroup.add(mesh);
      nodeMeshes[cfg.id] = mesh;
      nodeWireframes[cfg.id] = wireMat;
    });

    // Central institutional datum axis (thin orbital rings)
    const ringGeom = new THREE.RingGeometry(4.2, 4.22, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xd9381e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22,
    });
    const centerRing = new THREE.Mesh(ringGeom, ringMat);
    centerRing.rotation.x = Math.PI / 2.4;
    campusGroup.add(centerRing);

    const innerRingGeom = new THREE.RingGeometry(2.4, 2.41, 48);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0x111215,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
    });
    const innerRing = new THREE.Mesh(innerRingGeom, innerRingMat);
    innerRing.rotation.x = Math.PI / 3;
    campusGroup.add(innerRing);

    // Build Interconnection Curves
    const connections = [
      ['student', 'faculty'],
      ['student', 'institute'],
      ['faculty', 'institute'],
      ['institute', 'authority'],
      ['student', 'authority'],
      ['faculty', 'authority'],
    ];

    const curveObjects = [];
    connections.forEach(([idA, idB]) => {
      const posA = new THREE.Vector3(...NODE_CONFIGS[idA].pos);
      const posB = new THREE.Vector3(...NODE_CONFIGS[idB].pos);
      const mid = new THREE.Vector3()
        .addVectors(posA, posB)
        .multiplyScalar(0.5)
        .add(new THREE.Vector3((Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8, 0.6));

      const curve = new THREE.QuadraticBezierCurve3(posA, mid, posB);
      const points = curve.getPoints(40);
      const curveGeom = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: 0x8a857d,
        transparent: true,
        opacity: 0.28,
      });
      const line = new THREE.Line(curveGeom, curveMat);
      campusGroup.add(line);
      curveObjects.push({ curve, idA, idB, line, curveMat });
    });

    // Luminous Data Packet Pulses
    const packetCount = 14;
    const packetGeom = new THREE.SphereGeometry(0.09, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({
      color: 0xd9381e,
      transparent: true,
      opacity: 0.95,
    });

    const packets = [];
    for (let i = 0; i < packetCount; i++) {
      const mesh = new THREE.Mesh(packetGeom, packetMat);
      const conn = curveObjects[i % curveObjects.length];
      packets.push({
        mesh,
        curve: conn.curve,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
      });
      campusGroup.add(mesh);
    }

    // Interactive Raycasting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-100, -100);

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const targets = Object.values(nodeMeshes);
      const intersects = raycaster.intersectObjects(targets);

      if (intersects.length > 0) {
        const id = intersects[0].object.userData.id;
        hoveredNodeRef.current = id;
        setHoveredNode(id);
        canvas.style.cursor = 'pointer';
      } else {
        hoveredNodeRef.current = null;
        setHoveredNode(null);
        canvas.style.cursor = 'default';
      }
    };

    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const targets = Object.values(nodeMeshes);
      const intersects = raycaster.intersectObjects(targets);

      if (intersects.length > 0) {
        const id = intersects[0].object.userData.id;
        if (onSelectRole) onSelectRole(id);
      }
    };

    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('click', onClick);

    // Target Camera Targets according to activeRole
    const cameraTargets = {
      student: { x: -0.6, y: -0.2, z: 9.8, rotY: 0.14 },
      faculty: { x: 0.7, y: 0.3, z: 9.6, rotY: -0.16 },
      institute: { x: 0.3, y: -0.35, z: 10.0, rotY: 0.08 },
      authority: { x: -0.4, y: 0.8, z: 9.2, rotY: 0.2 },
      overview: { x: 0, y: 0, z: 11, rotY: 0 },
    };

    // Scroll progression & Hero visibility tracking
    let scrollProgress = 0;
    let isPastHero = false;

    const checkHeroScrollState = () => {
      const heroEl = document.getElementById('hero-section') || container.closest('section');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        // Once the bottom of the hero section is at or above the viewport, user has scrolled past it
        isPastHero = rect.bottom <= 0;
      } else {
        isPastHero = window.scrollY > 600;
      }

      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollMax > 0) {
        scrollProgress = Math.min(Math.max(window.scrollY / scrollMax, 0), 1);
      }
    };

    const onScroll = () => {
      checkHeroScrollState();
      // If user scrolls back up into hero, resume animation loop if stopped
      if (!isPastHero && isVisible && !animationFrameId && !prefersReducedMotion) {
        animate();
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    checkHeroScrollState();

    // Render loop and IntersectionObserver
    let animationFrameId = null;
    let isVisible = true;
    let clock = new THREE.Clock();

    const heroEl = document.getElementById('hero-section') || container;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !isPastHero && !animationFrameId && !prefersReducedMotion) {
          animate();
        } else if (!isVisible || isPastHero) {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        }
      },
      { threshold: 0.0 }
    );
    observer.observe(heroEl);

    const animate = () => {
      checkHeroScrollState();

      // Stop mesh components rotation and rendering once scrolled past hero section or not visible
      if (!isVisible || isPastHero) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
        return;
      }

      const elapsed = clock.getElapsedTime();

      // Dynamic camera distance based on aspect ratio to guarantee all 4 nodes, orbit ring & pulses
      // stay fully inside the canvas with at least ~8% padding around the outermost node across any aspect ratio
      const aspect = (container.clientWidth || 600) / Math.max(container.clientHeight || 500, 1);
      const baseDistance = Math.max(10.6, 4.65 / (Math.max(aspect, 0.25) * 0.38386));

      // Camera smooth damping towards target
      const targetCfg = cameraTargets[activeRole] || cameraTargets.student;
      const targetZ = baseDistance + (targetCfg.z - 11);

      camera.position.x += (targetCfg.x - camera.position.x) * 0.05;
      camera.position.y += (targetCfg.y - camera.position.y) * 0.05;
      camera.position.z += (targetZ - camera.position.z) * 0.05;
      camera.lookAt(0, 0, 0);

      // Subtle gentle rotation of entire campus group with scroll influence
      if (!prefersReducedMotion && !isPastHero) {
        campusGroup.rotation.y = Math.sin(elapsed * 0.18) * 0.18 + targetCfg.rotY + (scrollProgress * 0.4);
        campusGroup.rotation.x = Math.cos(elapsed * 0.15) * 0.08 + (scrollProgress * 0.12);

        // Node rotations
        Object.values(nodeMeshes).forEach((mesh) => {
          mesh.rotation.x += 0.007;
          mesh.rotation.y += 0.009;
        });

        // Packets travel along curves (speed boost during notice broadcast)
        const speedMultiplier = isNoticeBroadcasting ? 4.2 : 1.0;
        packets.forEach((p) => {
          p.progress += p.speed * speedMultiplier;
          if (p.progress > 1) p.progress = 0;
          const pt = p.curve.getPoint(p.progress);
          p.mesh.position.copy(pt);
        });
      }

      // Highlight active node
      Object.entries(nodeWireframes).forEach(([id, wireMat]) => {
        const isActive = id === activeRole || id === hoveredNodeRef.current;
        wireMat.opacity = isActive ? 0.95 : 0.25;
        wireMat.color.setHex(isActive ? 0xd9381e : 0x8a857d);
      });

      // Highlight active connections
      curveObjects.forEach(({ idA, idB, curveMat }) => {
        const touchesActive = idA === activeRole || idB === activeRole;
        curveMat.opacity = touchesActive ? 0.65 : 0.2;
        curveMat.color.setHex(touchesActive ? 0xd9381e : 0x8a857d);
      });

      renderer.render(scene, camera);

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth <= 0 || newHeight <= 0) return;

      const newAspect = newWidth / newHeight;
      camera.aspect = newAspect;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      if (prefersReducedMotion) renderer.render(scene, camera);
    };

    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('click', onClick);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      // Clean disposal
      renderer.dispose();
      scene.clear();
    };
  }, [isSupported, activeRole, isNoticeBroadcasting, onSelectRole]);

  if (!isSupported) {
    return (
      <div className="w-full h-full min-h-[380px] flex items-center justify-center bg-[#F4EFEB] border border-[#E3DDD4] p-6 text-center">
        <div className="max-w-xs">
          <p className="font-mono-code text-xs uppercase tracking-wider text-[#8A857D] mb-2">
            System Topology // Static
          </p>
          <p className="text-sm text-[#111215]">
            4-node mesh connected: Student, Faculty, Institute & Authority.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-0 select-none">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="w-full h-full block"
      />

      {/* Floating HUD Node Callouts */}
      <div className="absolute top-3 left-4 pointer-events-none flex items-center gap-2 z-10">
        <span className="inline-block w-2 h-2 rounded-full bg-[#D9381E] animate-pulse" />
        <span className="font-mono-code text-[11px] uppercase tracking-widest text-[#504D48] whitespace-nowrap">
          Mesh State: {activeRole.toUpperCase()} CONNECTED
        </span>
      </div>

      <div className="absolute bottom-3 right-4 pointer-events-none text-right z-10">
        <p className="font-mono-code text-[10px] text-[#8A857D] tracking-wider uppercase whitespace-nowrap">
          4 Nodes
        </p>
      </div>

      {hoveredNode && (
        <div className="absolute bottom-4 left-4 bg-[#111215] text-[#FBF9F5] px-3 py-1.5 rounded-none border border-[#2A2A2E] shadow-sm pointer-events-none">
          <p className="font-mono-code text-xs font-semibold uppercase text-[#D9381E]">
            {NODE_CONFIGS[hoveredNode]?.label}
          </p>
          <p className="text-[11px] text-[#A09D96]">
            {NODE_CONFIGS[hoveredNode]?.sublabel}
          </p>
        </div>
      )}
    </div>
  );
}
