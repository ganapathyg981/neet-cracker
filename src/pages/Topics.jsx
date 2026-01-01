import { useNavigate, Link, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { getTopicsForChapter, getChapter } from '../data/physicsData';
import { getQuestionsByTopic } from '../data/questionBank';

export default function Topics() {
  const navigate = useNavigate();
  const { subjectId, chapterId } = useParams();
  
  const chapter = getChapter(chapterId);
  const topics = getTopicsForChapter(chapterId);
  const chapterName = chapter?.name || 'Chapter';

  return (
    <div className="page">
      <Link to={`/study/${subjectId}`} className="back-btn">
        <ChevronLeft size={20} />
        Back to Chapters
      </Link>

      <div className="breadcrumb">
        <Link to="/study">Study</Link>
        <span>›</span>
        <Link to={`/study/${subjectId}`}>Physics</Link>
        <span>›</span>
        <span>{chapterName}</span>
      </div>

      <div className="page-header">
        <h1 className="page-title">{chapterName}</h1>
        <p className="page-subtitle">
          {topics.length} topics • {chapter?.weightage || 0}% weightage in NEET
        </p>
      </div>

      {topics.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📚</div>
          <p>No topics available for this chapter yet</p>
        </div>
      ) : (
        <div className="cards-grid">
          {topics.map((topic) => {
            const topicQuestions = getQuestionsByTopic(topic.id);
            return (
              <div
                key={topic.id}
                className="card"
                onClick={() => navigate(`/study/${subjectId}/${chapterId}/${topic.id}`)}
              >
                <div className="card-header">
                  <div>
                    <div className="card-title">{topic.name}</div>
                    <div className="card-subtitle">
                      {topic.formulas?.length || 0} formulas • {topicQuestions.length} questions
                    </div>
                  </div>
                </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                {topic.weightage > 0 && (
                  <span className="tag weightage">{topic.weightage}% weightage</span>
                )}
                <span className={`tag ${topic.difficulty}`}>{topic.difficulty}</span>
              </div>
            </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
