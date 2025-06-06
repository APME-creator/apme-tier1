export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to APME-TIER1</h1>
      <p>This is your GPT-4o enabled interface.</p>
      <form method="POST" action="/api/chat">
        <textarea name="message" rows="4" cols="50" placeholder="Type your message here..."></textarea><br/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
