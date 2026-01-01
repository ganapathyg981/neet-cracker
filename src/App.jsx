import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Dashboard from './pages/Dashboard';
import Study from './pages/Study';
import Chapters from './pages/Chapters';
import Topics from './pages/Topics';
import TopicDetail from './pages/TopicDetail';
import FormulaDetail from './pages/FormulaDetail';
import Practice from './pages/Practice';
import MockTest from './pages/MockTest';
import Progress from './pages/Progress';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/study" element={<Study />} />
          <Route path="/study/:subjectId" element={<Chapters />} />
          <Route path="/study/:subjectId/:chapterId" element={<Topics />} />
          <Route path="/study/:subjectId/:chapterId/:topicId" element={<TopicDetail />} />
          <Route path="/study/:subjectId/:chapterId/:topicId/formula/:formulaId" element={<FormulaDetail />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/mock-test" element={<MockTest />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </div>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
