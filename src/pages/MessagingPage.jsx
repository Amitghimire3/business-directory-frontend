import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessagingPage = () => {
  const currentUserId = "user123"; // replace with actual logged-in user
  const [receiverId, setReceiverId] = useState("user456"); // can be another user or business
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/messages?user1=${currentUserId}&user2=${receiverId}`);
      setMessages(res.data);
    } catch (err) {
      console.error("Error fetching messages", err);
    }
  };

  const sendMessage = async () => {
    if (!text.trim()) return;
    try {
      await axios.post(`http://localhost:5000/api/messages`, {
        senderId: currentUserId,
        receiverId,
        content: text
      });
      setText("");
      fetchMessages(); // refresh chat
    } catch (err) {
      console.error("Error sending message", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [receiverId]);

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
