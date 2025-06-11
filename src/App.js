import './App.css';
import myPhoto from './LimPhoto.jpeg';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>

      <section className="profile-section">
        <img 
          src={myPhoto} 
          alt="John Odysseus O. Lim" 
          className="profile-img"
        />
        <h2>Lim, John Odysseus O.</h2>
        <h4>4th Year BS in Computer Engineering</h4>
        <p>
          I'm a Computer Engineering student specializing in Data Science. I'm passionate about Artificial Intelligence, Machine Learning, and solving real-world problems using technology. This portfolio showcases my work, skills, and aspirations.
        </p>
      </section>

      <section className="projects-section">
        <h3>Projects</h3>
        <ul>
          <li>
            <strong>Malaria Trend Analysis:</strong> Analyzes and predicts malaria cases (2000–2021) using supervised and unsupervised learning. Uses WHO data to cluster countries by trends and forecast case counts with KMeans and regression.
          </li>
          <li>
            <strong>BananaLyze:</strong> Detects banana plant diseases using hyperspectral imaging + machine learning for early detection and targeted intervention in the Philippines.
          </li>
          <li>
            <strong>CPU-GPU Case Study:</strong> Investigates optimal hardware combinations for machine learning workloads by benchmarking various CPU-GPU setups.
          </li>
        </ul>
      </section>

      <section className="skills-section">
        <h3>Skills</h3>
        <ul>
          <li>Python, C++, JavaScript, Verilog</li>
          <li>TensorFlow, scikit-learn, OpenCV</li>
          <li>React, Node.js</li>
          <li>Packet Tracer, Wireshark</li>
        </ul>
      </section>

      <section className="contact-section">
        <h3>Contact</h3>
        <p>Email: johnodysseuslim@example.com</p>
        <p>
          GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a>
        </p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a>
        </p>
      </section>
    </div>
  );
}

export default App;
