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
Click “Commit changes”

🟢 FILE 2: chat.js
Where it goes:
bash
Copy
Edit
/pages/api/chat.js
How to upload it:
In GitHub:

Click “Add file → Create new file”

Name it:

bash
Copy
Edit
pages/api/chat.js
Paste this code:

js
Copy
Edit
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { message } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [{ role: "user", content: message }],
    }),
  });

  const data = await response.json();
  res.status(200).json({ reply: data.choices[0].message.content });
}
