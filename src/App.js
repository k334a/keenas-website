import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  
  const [typedText, setTypedText] = useState('');
  
  const fullText = "> Initializing system...\n> Loading defenses...\n> Fetching Rust API endpoints...\n> Welcome.";

  useEffect(() => {
    if (!showIntro) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length - 1) {
        setTypedText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowIntro(false), 2000);
      }
    }, 50); 

    return () => clearInterval(typingInterval);
  }, [showIntro]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { 
        setShowIntro(false);
      }
    };

    if (showIntro) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showIntro]);

  return (
    <>
      {showIntro && (
        <div 
          className="terminal-overlay" 
          onClick={() => setShowIntro(false)} // Dismiss on click
        >
          <div className="terminal-text">
            {typedText}
            <span className="cursor">_</span>
          </div>
        </div>
      )}

      <div className="scrapbook-container">
        <header className="scrapbook-header">
          <h1>My Personal Scrapbook</h1>
        </header>

        <main className="scrapbook-body">
          <section className="scrapbook-panel left">
            <h2>Left Section</h2>
            <p>Add stickers or notes here.</p>
          </section>

          <section className="scrapbook-panel middle">
            <h2>Middle Section</h2>
            <p>This is your main showcase area.</p>
          </section>

          <section className="scrapbook-panel right">
            <h2>Right Section</h2>
            <p>Add photos or links here.</p>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;