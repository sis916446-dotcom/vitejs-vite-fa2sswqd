import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [draft, setDraft] = useState<string>('');

  // ገጹ ሲከፈት የተቀመጠውን ረቂቅ መጫን
  useEffect(() => {
    const savedDraft = localStorage.getItem('socialDraft');
    if (savedDraft) setDraft(savedDraft);
  }, []);

  // ረቂቁን ማስቀመጥ
  const saveDraft = () => {
    localStorage.setItem('socialDraft', draft);
    alert('ረቂቁ ተቀምጧል!');
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>የእኔ ሶሻል ሚዲያ ዳሽቦርድ</h1>
      </header>

      <main>
        {/* የስታቲስቲክስ ካርዶች */}
        <div className="stats-grid">
          <div className="card instagram">
            <h3>Instagram</h3>
            <p>Followers: 1,200</p>
          </div>
          <div className="card tiktok">
            <h3>TikTok</h3>
            <p>Followers: 3,400</p>
          </div>
          <div className="card youtube">
            <h3>YouTube</h3>
            <p>Subscribers: 850</p>
          </div>
        </div>

        {/* ፖስት መስሪያ ክፍል */}
        <div className="post-creator">
          <h2>አዲስ ፖስት ፍጠር</h2>
          <textarea 
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="እዚህ ጽሑፍህን ጻፍ..." 
          />
          <button onClick={saveDraft}>ረቂቅ (Draft) አስቀምጥ</button>
        </div>
      </main>
    </div>
  );
}

export default App;