import TestVision from './screens/TestVision';
import LandingPage from './screens/LandingPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/test-vision" element={<TestVision />} />
    </Routes>
  );
}

export default App;
