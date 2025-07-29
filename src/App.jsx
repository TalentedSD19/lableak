import { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, onValue, set } from "firebase/database";

function App() {
  const slug = window.location.pathname.slice(1) || "default";
  const [content, setContent] = useState("");

  // Fetch content from Firebase for non-root pages
  useEffect(() => {
    if (slug === "default") return; // Skip for root page
    if (!/^[a-zA-Z0-9-]+$/.test(slug)) {
      console.error("Invalid slug:", slug);
      return;
    }

    const contentRef = ref(db, `pages/${slug}`);
    const unsubscribe = onValue(contentRef, (snapshot) => {
      const data = snapshot.val();
      if (data?.content !== undefined && data.content !== content) {
        setContent(data.content);
      }
    });

    return () => unsubscribe();
  }, [slug, content]);

  // Handle textarea changes and update Firebase for non-root pages
  const handleChange = (e) => {
    const text = e.target.value;
    setContent(text);

    const contentRef = ref(db, `pages/${slug}`);
    const data = {
      content: text,
      timestamp: Date.now(),
    };
    console.log("Writing to Firebase:", data);
    set(contentRef, data).catch((error) => {
      console.error("Firebase write error:", error);
    });
  };

  // Root page: Static "How to Use" instructions
  if (slug === "default") {
    return (
      <div style={{ position: "relative" }}>
      <textarea
  value={`🧬 Welcome to LabLeak, you stupid code goblin 💻👹

Ever tried copying your friend's lab code but your eyesight said “nah”?
Tired of screenshots, PDFs, and begging on WhatsApp?
Now you can copy live. Welcome to the digital bathroom wall for your labs.

💡 How to operate this cursed site:
Smack a random word after the slash like:
👉 https://lab-leak.web.app/ratking
(yes, that’s your room now. you own it. congrats.)

Dump your code into the big empty void.
No rules. No autosave guilt. Just raw spaghetti.

Yeet the link to a friend (or your worst enemy).
They join your code cult instantly. No signup. No soul-binding ritual.*.

Want a fresh room?
Change the slug:
👉 /brainrot420, /pls-pass, /zombie, whatever fuels your existential dread.

⚠️ Real Talk:
Everything you type syncs in real time.

No takebacks. No version control. Only consequences.

If you write cursed code, we display it proudly.

🚨 Also watch out for lab assistants! 🚨


🧃 TL;DR:
Type code

Share link

Gaslight, submit your work, put back your chair

Escape responsibility

Return to মাচা

🚨 Happy Leaking. You’re the problem now.  🫡`}
  readOnly
  style={{
    width: "100vw",
          height: "100vh",
          padding: "20px",
          fontSize: "16px",
          border: "none",
          outline: "none",
          boxSizing: "border-box",
          resize: "none",
  }}
/>

      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "20px",
          fontSize: "12px",
          color: "#999",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <a
          href="https://github.com/TalentedSD19"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#999",
            textDecoration: "none",
            pointerEvents: "auto",
          }}
        >
          Made by @TalentedSD19
        </a>
      </div>
    </div>
    );
  }

  // Non-root pages: Existing editable textarea
  return (
    <div style={{ position: "relative" }}>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Start typing..."
        style={{
          width: "100vw",
          height: "100vh",
          padding: "20px",
          fontSize: "16px",
          border: "none",
          outline: "none",
          boxSizing: "border-box",
          resize: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "20px",
          fontSize: "12px",
          color: "#999",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <a
          href="https://github.com/TalentedSD19"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#999",
            textDecoration: "none",
            pointerEvents: "auto",
          }}
        >
          Made by @TalentedSD19
        </a>
      </div>
    </div>
  );
}

export default App;