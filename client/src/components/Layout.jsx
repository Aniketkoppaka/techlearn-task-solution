
import React, { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Moon, Sun, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

const Layout = () => {
    const [courseData, setCourseData] = useState(null);
    const [theme, setTheme] = useState('light');
    const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleTheme = () => {
        // Toggle simple light/dark mode
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [window.location.pathname]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        fetch('/api/course/python-101')
            .then(res => res.json())
            .then(data => setCourseData(data))
            .catch(err => console.error("Failed to load course", err));
    }, []);

    return (
        <div className="app-container">
            <header className="app-header">
                <div className="header-left">
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Menu size={24} color="var(--text-nav)" />
                    </button>
                    <div className="logo">
                        <img src="/logo.png" alt="TechLearn Solutions" className="logo-image" />
                    </div>
                </div>
                <nav className="top-nav">
                    <a href="#" className="nav-link active">Learn</a>
                    <a href="#" className="nav-link">Build</a>
                    <a href="#" className="nav-link">Dashboard</a>
                    <a href="#" className="nav-link">Log In</a>
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'light' ? <Moon size={20} fill="currentColor" /> : <Sun size={20} fill="currentColor" />}
                    </button>
                </nav>
            </header>

            <div className="main-layout">
                {/* Mobile Overlay */}
                <div
                    className={`mobile-overlay ${isMobileMenuOpen ? 'visible' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>

                <aside className={`sidebar ${isSidebarMinimized ? 'minimized' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <div className="sidebar-header">
                        <h2>Course Topics</h2>
                        <button
                            className="bg-transparent border-none cursor-pointer text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            onClick={() => setIsSidebarMinimized(!isSidebarMinimized)}
                            aria-label={isSidebarMinimized ? "Expand Sidebar" : "Minimize Sidebar"}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--text-secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {isSidebarMinimized ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
                        </button>
                    </div>
                    <div className="topic-list">
                        {courseData?.topics.map((topic, index) => (
                            <NavLink
                                key={topic.id}
                                to={`/topic/${topic.id}`}
                                className={({ isActive }) => `topic-item ${isActive ? 'active' : ''}`}
                                title={isSidebarMinimized ? topic.title : ''}
                            >
                                <span className="topic-number">{index + 1}</span>
                                <span className="topic-title">{topic.title}</span>
                            </NavLink>
                        ))}
                    </div>
                </aside>

                <main className={`content-area ${isSidebarMinimized ? 'expanded' : ''}`}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};


export default Layout;
