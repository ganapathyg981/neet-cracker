import { useNavigate } from 'react-router-dom';
import { subjects } from '../data/physicsData';

export default function Study() {
  const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    if (!subject.comingSoon) {
      navigate(`/study/${subject.id}`);
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Select Subject</h1>
        <p className="page-subtitle">Choose a subject to start studying</p>
      </div>

      <div className="cards-grid">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className={`card ${subject.comingSoon ? 'disabled' : ''}`}
            onClick={() => handleSubjectClick(subject)}
          >
            <div className="card-icon">{subject.icon}</div>
            <div className="card-header">
              <div>
                <div className="card-title">{subject.name}</div>
                <div className="card-subtitle">
                  {subject.comingSoon ? 'Coming soon' : 'Start learning'}
                </div>
              </div>
              {subject.comingSoon && <span className="tag coming-soon">Soon</span>}
            </div>
            {!subject.comingSoon && (
              <div className="progress-bar-container">
                <div className="progress-bar-label">
                  <span>Progress</span>
                  <span>12%</span>
                </div>
                <div className="progress-bar-track">
                  <div className="progress-bar-fill" style={{ width: '12%' }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
