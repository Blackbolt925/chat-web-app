import React from 'react'

const ChatMessage = () => {
  return (
    <div className={`flex ${isSystemMessage ? 'justify-center' : isOwnMessage ? 'justify-end' : 'justify-start'} mb-3 gap-2 py-4 px-4 rounded-lg bg-gray-100 text-gray-700`}>
      <div className="flex-1 w-full">
        <p className="text-sm font-medium">
          {isSystemMessage ? 'System Message' : 'User Message'}
        </p>
        <p className="text-sm text-gray-300">{message}</p>
      </div>
      
    </div>
  )
}

export default ChatMessage
