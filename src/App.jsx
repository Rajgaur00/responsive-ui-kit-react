import React from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Card from './components/Card';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="hero">
        <h1>Responsive UI Kit</h1>
        <p>Built with React + CSS, ready for your next project.</p>
        <Button>Get Started</Button>
      </main>
      <section className="cards">
        <Card title="Mobile First" icon="📱" description="Responsive from the ground up." />
        <Card title="Reusable Components" icon="🔁" description="Plug-n-play components." />
        <Card title="Easy Customization" icon="🎨" description="Style with your own theme." />
      </section>
      <footer className="footer">
        <p>© 2025 XoWeb UI Kit</p>
      </footer>
    </>
  );
}

export default App;
