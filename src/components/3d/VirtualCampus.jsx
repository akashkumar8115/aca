import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'

const VirtualCampus = () => {
    return (
        <div className="h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-10 left-10 z-10 text-white"
            >
                <h2 className="text-4xl font-bold mb-4">Virtual Campus Tour</h2>
                <p className="text-xl">Explore our facilities in 3D</p>
            </motion.div>

            <Canvas camera={{ position: [0, 2, 10] }}>
                <Suspense fallback={null}>
                    <Environment preset="sunset" />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <OrbitControls />
                    {/* Add your 3D campus models here */}
                </Suspense>
            </Canvas>
        </div>
    )
}

export default VirtualCampus
