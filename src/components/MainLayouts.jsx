import React from "react";

export default function MainLayout({ side, children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block">{side}</div>
      <main className="flex-1 overflow-hidden flex flex-col">{children}</main>
    </div>
  );
}
