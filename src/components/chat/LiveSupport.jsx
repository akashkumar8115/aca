import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LiveSupport = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, {
                id: Date.now(),
                text: newMessage,
                sender: 'user'
            }])
            setNewMessage('')

            // Simulate counselor response
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    text: "Thanks for your message. A counselor will respond shortly.",
                    sender: 'counselor'
                }])
            }, 1000)
        }
    }

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
            >
                Chat with Counselor
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl"
                    >
                        <div className="p-4 border-b">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">Live Support</h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        <div className="h-96 overflow-y-auto p-4 space-y-4">
                            {messages.map(message => (
                                <div
                                    key={message.id}
                                    className={`p-3 rounded-lg ${message.sender === 'user'
                                            ? 'bg-indigo-600 text-white ml-auto'
                                            : 'bg-gray-100 mr-auto'
                                        }`}
                                >
                                    {message.text}
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 p-2 border rounded"
                                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                />
                                <button
                                    onClick={sendMessage}
                                    className="bg-indigo-600 text-white px-4 py-2 rounded"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default LiveSupport
