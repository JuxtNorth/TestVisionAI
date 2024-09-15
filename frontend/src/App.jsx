import TestVision from "./pages/test-vision";
import LandingPage from "./pages/landing-page";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test-vision" element={<TestVision />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
