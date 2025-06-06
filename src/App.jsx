import React from "react";
import MainLayout from "./components/MainLayout";
import SidePanel from "./components/SidePanel";
import ChatBox from "./components/ChatBox";
import OnboardingForm from "./components/OnboardingForm";

const NAV_ITEMS = [
  { id: "chat", label: "Chat" },
  { id: "onboarding", label: "Onboarding" },
];

export default function App() {
  const [selected, setSelected] = React.useState("chat");
  const [messages, setMessages] = React.useState([
    { role: "assistant", content: "Hi! How can I help you today?" },
  ]);
  const [onboarded, setOnboarded] = React.useState(false);

  function handleSend(msg) {
    setMessages((msgs) => [
      ...msgs,
      { role: "user", content: msg },
      { role: "assistant", content: "This is a demo response." },
    ]);
  }

  return (
    <MainLayout
      side={
        <SidePanel
          navItems={NAV_ITEMS}
          selected={selected}
          onSelect={setSelected}
        />
      }
    >
      <div className="h-full flex flex-1 flex-col">
        {selected === "onboarding" || !onboarded ? (
          <OnboardingForm
            onFinish={() => {
              setOnboarded(true);
              setSelected("chat");
            }}
          />
        ) : (
          <ChatBox messages={messages} onSend={handleSend} />
        )}
      </div>
    </MainLayout>
  );
}
