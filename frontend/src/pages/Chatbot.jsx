import { useState } from "react";

export default function Chatbot() {
  // Hardcoded Q&A logic
  const getBotResponse = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("hello") || lower.includes("hi")) {
      return "Hello! I’m GreenEarth Assistant. How can I help?";
    }
    if (lower.includes("volunteer") || lower.includes("join")) {
      return "Thank you for your interest! Please fill out the Feedback Form — we’ll contact you soon.";
    }
    if (
      lower.includes("donate") ||
      lower.includes("money") ||
      lower.includes("payment")
    ) {
      return "You can donate via UPI: greenearth@upi. Every ₹100 plants 10 trees!";
    }
    if (
      lower.includes("contact") ||
      lower.includes("email") ||
      lower.includes("phone")
    ) {
      return "Email us at contact@greenearth.org or call +91 98765 43210.";
    }
    if (
      lower.includes("mission") ||
      lower.includes("work") ||
      lower.includes("what do you do")
    ) {
      return "We plant trees, clean rivers, and run eco-education programs in schools.";
    }
    return "I didn't understand. Try asking about volunteering, donations, or contact.";
  };

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I’m GreenEarth Assistant. Ask me anything about our NGO.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: trimmed }]);
    setInput("");

    // Simulate bot thinking
    setTimeout(() => {
      const reply = getBotResponse(trimmed);
      setMessages((prev) => [...prev, { type: "bot", text: reply }]);
    }, 600);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow p-4">
        <h1 className="text-xl font-bold">NGO Assistant</h1>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs p-3 rounded-lg ${
              msg.type === "user" ? "bg-blue-100 ml-auto" : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about volunteering, donations, contact..."
          className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </form>
    </div>
  );
}
