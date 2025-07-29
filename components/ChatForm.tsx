"use client";
import React from 'react'

const Chatform = ({onSendMessage,}:{onSendMessage:(message:string)=>void;}) => {
  const [message, setMessage] = React.useState(""); 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== ""){
      onSendMessage(message); // Call the onSendMessage function passed as a prop
      setMessage(""); // Clear the input field after sending
    }; 
    console.log("Message sent");
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input type="text" onChange={(e)=> setMessage(e.target.value)} className='flex-1 px-4 border-2 py-2 rounded-lg focus:outline-none' placeholder='Type your message here...' />
      <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>Send</button>
    </form>
  )
}

export default Chatform
