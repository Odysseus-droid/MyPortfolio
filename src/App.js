import './App.css';
import myPhoto from './LimPhoto.jpeg';

function App() {
  return (
    <div className="App">
      <header style={{ marginTop: '2rem' }}>
        <h1>HI! Welcome To My Portfolio</h1>
      </header>
      <main style={{ marginTop: '2rem' }}>
        <img 
          src={myPhoto} 
          alt="My Profile" 
          style={{ borderRadius: '50%', width: '150px', height: '150px' }} 
        />
        <h2>Lim, John Odysseus O.</h2>
        <h4>BS in Computer Engineering, 4th Year</h4>
        <p>
          Hi! I'm a Computer Engineering student in the Data Science track. I'm interested in AI and Machine Learning. 
          This portfolio is a simple representation of who I am.
        </p>
      </main>
    </div>
  );
}

export default App;