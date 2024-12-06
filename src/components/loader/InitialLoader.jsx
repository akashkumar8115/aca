import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../../assets/home/logo.png'
const InitialLoader = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2200)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-white"
                >
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-center"
                    >
                        <motion.img
                            src={Logo} // Add your logo path here
                            // alt="Career Academy"
                            // className="w-32 h-32"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default InitialLoader
