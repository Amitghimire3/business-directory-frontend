import React, { useState, useEffect } from 'react';

const MessagingPage = () => {
  const currentUserId = "user123";
  const [receiverId] = useState("Business Support");
  const [messages, setMessages] = useState([
    { senderId: receiverId, content: "Hello! How can we help you today?" }
  ]);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { 
      senderId: currentUserId, 
      content: text 
    }]);
    
    setText("");
    
    // Auto-reply after 1 second
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        senderId: receiverId, 
        content: "Thanks for your message! Our team will get back to you soon." 
      }]);
    }, 1000);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">📩 Chat with: {receiverId}</h2>

      <div className="h-64 overflow-y-auto border p-4 mb-4 bg-gray-100 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-sm ${msg.senderId === currentUserId ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-1 rounded ${msg.senderId === currentUserId ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </div>
    </div>
  );
};

export default MessagingPage;
