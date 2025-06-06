import React from "react";

export default function ChatBox({ messages, onSend }) {
  const [input, setInput] = React.useState("");

  function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.role === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-white text-gray-800 self-start border"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSend}
        className="flex items-center p-2 border-t bg-white"
      >
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded focus:outline-none"
          placeholder="Type your message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
