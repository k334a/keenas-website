import './App.css';

function App() {
  return (
    <div className="scrapbook-container">
      {/* Title Section */}
      <header className="scrapbook-header">
        <h1>My Personal Scrapbook</h1>
      </header>

      {/* Main Content Area with 3 Sections */}
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
  );
}

export default App;