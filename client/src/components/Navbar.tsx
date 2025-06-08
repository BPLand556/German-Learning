import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Conversation', path: '/conversation' },
  { name: 'Vocabulary', path: '/vocabulary' },
  { name: 'Progress', path: '/progress' },
  { name: 'Profile', path: '/profile' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-primary-700">GermanImmersion</Link>
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `text-gray-700 hover:text-primary-600 font-medium transition-colors ${isActive ? 'text-primary-700 underline' : ''}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <button
        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col md:hidden z-50">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-3 border-b border-gray-100 text-gray-700 hover:text-primary-600 font-medium transition-colors ${isActive ? 'text-primary-700 underline' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
} 