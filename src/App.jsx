import { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, onValue, set } from "firebase/database";

function App() {
  const slug = window.location.pathname.slice(1) || "default";
  const [content, setContent] = useState("");

  // Fetch content from Firebase
  useEffect(() => {
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

  // Handle textarea changes and update Firebase
  const handleChange = (e) => {
    const text = e.target.value;
    setContent(text);

    const contentRef = ref(db, `pages/${slug}`);
    const data = {
      content: text,
      timestamp: Date.now(),
    };
    console.log("Writing to Firebase:", data); // Log for debugging
    set(contentRef, data).catch((error) => {
      console.error("Firebase write error:", error); // Log errors
    });
  };

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