import React from "react";

export default function SidePanel({ navItems, onSelect, selected }) {
  return (
    <aside className="h-full w-56 bg-gray-900 text-white flex flex-col">
      <div className="px-4 py-6 font-bold text-lg">Edu Assistant</div>
      <nav className="flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`w-full text-left px-4 py-2 hover:bg-gray-800 ${
              selected === item.id ? "bg-gray-800" : ""
            }`}
            onClick={() => onSelect(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
