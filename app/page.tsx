"use client";
import Chatform from "@/components/ChatForm";
import Image from "next/image";

export default function Home() {
  const handleSendMessage = (message: string) => {
    console.log("Message sent:", message);
    // Here you can add logic to send the message to your chat server or handle it as needed
  };
  return (
    <div className="flex mt-24 justify-center w-full">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Room: 1</h1>
        <div>
          TODO add chat Room
        </div>
        <Chatform onSendMessage= {handleSendMessage}/>
      </div>
    </div>
  );
}
