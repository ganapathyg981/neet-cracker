import { useNavigate, Link, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { physicsChapters } from '../data/physicsData';

export default function Chapters() {
  const navigate = useNavigate();
  const { subjectId } = useParams();

  // Group chapters by class
  const class11Chapters = physicsChapters.filter(c => c.class === 11);
  const class12Chapters = physicsChapters.filter(c => c.class === 12);

  const renderChapterCard = (chapter) => (
    <div
      key={chapter.id}
      className="card"
      onClick={() => navigate(`/study/${subjectId}/${chapter.id}`)}
    >
      <div className="card-header">
        <div>
          <div className="card-title">{chapter.name}</div>
          <div className="card-subtitle">{chapter.totalTopics} topics</div>
        </div>
        <span className="tag weightage">{chapter.weightage}%</span>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-label">
          <span>{chapter.completedTopics}/{chapter.totalTopics} completed</span>
          <span>{Math.round((chapter.completedTopics / chapter.totalTopics) * 100)}%</span>
        </div>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${(chapter.completedTopics / chapter.totalTopics) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="page">
      <Link to="/study" className="back-btn">
        <ChevronLeft size={20} />
        Back to Subjects
      </Link>

      <div className="breadcrumb">
        <Link to="/study">Study</Link>
        <span>›</span>
        <span>Physics</span>
      </div>

      <div className="page-header">
        <h1 className="page-title">Physics</h1>
        <p className="page-subtitle">
          {physicsChapters.length} chapters covering the complete NEET syllabus
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">📘 Class 11 ({class11Chapters.length} chapters)</h2>
        <div className="cards-grid">
          {class11Chapters.map(renderChapterCard)}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">📗 Class 12 ({class12Chapters.length} chapters)</h2>
        <div className="cards-grid">
          {class12Chapters.map(renderChapterCard)}
        </div>
      </div>
    </div>
  );
}
