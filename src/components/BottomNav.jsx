import { NavLink } from 'react-router-dom';
import { Home, BookOpen, FileQuestion, BarChart3, ClipboardList } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="nav-logo">NEET Cracker</div>
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Home />
        <span>Home</span>
      </NavLink>
      <NavLink to="/study" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <BookOpen />
        <span>Study</span>
      </NavLink>
      <NavLink to="/practice" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <FileQuestion />
        <span>Practice</span>
      </NavLink>
      <NavLink to="/mock-test" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <ClipboardList />
        <span>Tests</span>
      </NavLink>
      <NavLink to="/progress" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <BarChart3 />
        <span>Progress</span>
      </NavLink>
    </nav>
  );
}
