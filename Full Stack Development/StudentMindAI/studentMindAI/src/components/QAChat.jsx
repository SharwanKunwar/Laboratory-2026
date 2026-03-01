import { useState } from "react";

function QAChat({ session }) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);

  const handleAsk = () => {
    if (!question) return;

    // Mock AI response
    const answer = "This is a mock answer based on uploaded PDF content.";

    setAnswers([...answers, { question, answer }]);
    setQuestion("");
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Ask Questions</h2>
      <div className="space-y-4 mb-4">
        {answers.map((qa, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <p className="font-semibold">Q: {qa.question}</p>
            <p>A: {qa.answer}</p>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleAsk}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ask
        </button>
      </div>
    </div>
  );
}

export default QAChat;