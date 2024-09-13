import React, { useState } from 'react';
import './App.css';

const experts = [
  { name: "Alice Johnson", expertise: "Web Development", rating: 4.9, image: "https://via.placeholder.com/100" },
  { name: "Bob Smith", expertise: "UX Design", rating: 4.8, image: "https://via.placeholder.com/100" },
  { name: "Carol Williams", expertise: "Data Science", rating: 4.7, image: "https://via.placeholder.com/100" },
];

const categories = [
  { name: "Web Development", icon: "💻" },
  { name: "UX/UI Design", icon: "🎨" },
  { name: "Data Science", icon: "📊" },
  { name: "Digital Marketing", icon: "📱" },
];

const openSourceProjects = [
  { name: "Project A", description: "A cutting-edge web framework", stars: 1200, forks: 300 },
  { name: "Project B", description: "Machine learning library for Python", stars: 3500, forks: 800 },
  { name: "Project C", description: "Cross-platform mobile app development toolkit", stars: 2800, forks: 600 },
];

const freelanceJobs = [
  { title: "React Developer Needed", description: "Build a responsive web app", budget: "$2000-$3000", deadline: "2 weeks" },
  { title: "Data Visualization Expert", description: "Create interactive dashboards", budget: "$1500-$2500", deadline: "1 week" },
  { title: "Mobile App UI Designer", description: "Design UI for iOS app", budget: "$1000-$1500", deadline: "3 days" },
];

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const LoginForm = () => (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <button onClick={() => setShowLogin(false)} className="popup-close">Close</button>
      </div>
    </div>
  );

  const RegisterForm = () => (
    <div className="popup-overlay">
    <div className="popup-content">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => setShowRegister(false)} className="popup-close">Close</button>
    </div>
  </div>

  );

  return (
    <div>
      <header className="header">
        <div></div>
        <nav>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button onClick={() => setShowLogin(true)} className="btn-login">Login</button>
          <button onClick={() => setShowRegister(true)} className="btn-register">Register</button>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <h1>Empower Your Development Journey</h1>
          <p>
            Connect with expert creators, leverage AI assistance, contribute to open-source projects, and find freelance opportunities.
          </p>
          <form className="search-form">
            <input type="text" placeholder="Search for experts, projects, or freelance jobs" className="input-field" />
            <button type="submit" className="btn-primary">Search</button>
          </form>
        </section>

        <section className="section-light">
          <h2 className="section-title">Featured Experts</h2>
          <div className="card-grid">
            {experts.map((expert, index) => (
              <div key={index} className="card">
                <img src={expert.image} alt={expert.name} className="card-image" />
                <h3>{expert.name}</h3>
                <p>{expert.expertise}</p>
                <p>⭐ {expert.rating}</p>
                <button className="btn-primary">Connect</button>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title"style={{color:"white"}}>Explore Categories</h2>
          <div className="card-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <button className="btn-primary" >Explore</button>
              </div>
            ))}
          </div>
        </section>

        <section className="section-light">
          <h2 className="section-title">AI-Powered Development Assistant</h2>
          <div className="assistant-box" style={{color:"black"}}>
            <h3>🤖 AI Assistant</h3>
            <p>Get instant help with your development questions</p>
            <div className="question-box">
              <p>How can I optimize my React component's performance?</p>
            </div>
            <div className="answer-box">
              <p>To optimize your React component's performance, consider the following:</p>
              <ul>
                <li>Use React.memo for functional components</li>
                <li>Implement shouldComponentUpdate for class components</li>
                <li>Utilize useMemo and useCallback hooks</li>
                <li>Avoid unnecessary re-renders</li>
                <li>Optimize state updates</li>
              </ul>
            </div>
            <form className="assistant-form">
              <input type="text" placeholder="Ask the AI assistant..." className="input-field" />
              <button type="submit" className="btn-primary">Send</button>
            </form>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title" style={{color:"white"}}>Open Source Contributions</h2>
          <div className="card-grid">
            {openSourceProjects.map((project, index) => (
              <div key={index} className="open-source-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="stats">
                  <span>⭐ {project.stars}</span>
                  <span>🍴 {project.forks}</span>
                </div>
                <button className="btn-primary">Contribute</button>
              </div>
            ))}
          </div>
        </section>

        <section className="section-light">
          <h2 className="section-title">Freelance Opportunities</h2>
          <div className="card-grid">
            {freelanceJobs.map((job, index) => (
              <div key={index} className="freelance-job-card">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <p><strong>Budget:</strong> {job.budget}</p>
                <p><strong>Deadline:</strong> {job.deadline}</p>
                <button className="btn-success">Apply</button>
              </div>
            ))}
          </div>
        </section>

        <section className="call-to-action">
          <h2>Ready to Elevate Your Development Skills?</h2>
          <p>Join our platform today to connect with experts, leverage AI assistance, contribute to exciting open-source projects, and find freelance opportunities.</p>
          <button onClick={() => setShowRegister(true)} className="btn-primary call-to-action-btn">Sign Up Now</button>
        </section>
      </main>

      <footer className="footer">
        <p>© 2023 Acme Inc. All rights reserved.</p>
        <nav>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy</a>
        </nav>
      </footer>

      {showLogin && <LoginForm />}
      {showRegister && <RegisterForm />}
    </div>
  );
}