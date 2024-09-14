import TestVision from "./screens/TestVision";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test-vision" element={<TestVision />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
