import React from "react";

export default function OnboardingForm({ onFinish }) {
  const [name, setName] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onFinish({ name });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-8 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Welcome! Let’s get started</h2>
      <div>
        <label className="block mb-1 font-medium">Your Name</label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Start
      </button>
    </form>
  );
}
