import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#111111]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
        <Routes>
          <Route path="/" element={<><Home /><About /></>} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
