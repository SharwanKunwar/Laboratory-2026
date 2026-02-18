import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import axios from "axios";

function AiModal({ isAiOpen, setIsAiOpen }) {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful AI assistant." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Send message to AI
  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: newMessages,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
          },
        }
      );

      const aiMessage = response.data.choices[0].message.content;
      setMessages([...newMessages, { role: "assistant", content: aiMessage }]);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { role: "assistant", content: "Error: AI request failed." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={isAiOpen}
      footer={null}
      onCancel={() => setIsAiOpen(false)}
      width="97vw"
        style={{ top: '5vh', left: '0vw' }}
        bodyStyle={{height: "78vh", padding:"20px", }}
        centered
      
    >
        <div className="bg-red-400 h-full w-full h-[500px] overflow-y-scroll">
            
                <div className="bg-yellow-400 h-[300px]">box</div>
                <div className="bg-yellow-400 h-[300px]">box</div>
                <div className="bg-yellow-400 h-[300px]">box</div>
            
        </div>
    </Modal>
  );
}

export default AiModal;
