import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeDashboard from './pages/HomeDashboard';
import GoalFoodInput from './pages/GoalFoodInput';
import NearbyHealthyOptions from './pages/NearbyHealthyOptions';
import AiAnalysisResults from './pages/AiAnalysisResults';
import ProfileSettings from './pages/ProfileSettings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h2>NutriSense AI</h2>
          <nav className="mobile-first-dock">
            <Link to="/">Home</Link>
            <Link to="/input">Input</Link>
            <Link to="/nearby">Nearby</Link>
            <Link to="/analysis">Analysis</Link>
            <Link to="/profile">Profile</Link>
          </nav>
        </header>

        <main className="content-area">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/input" element={<GoalFoodInput />} />
            <Route path="/nearby" element={<NearbyHealthyOptions />} />
            <Route path="/analysis" element={<AiAnalysisResults />} />
            <Route path="/profile" element={<ProfileSettings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
