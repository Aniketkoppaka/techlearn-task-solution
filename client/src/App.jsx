import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import TopicViewer from './components/TopicViewer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/topic/1" replace />} />
                    <Route path="topic/:topicId" element={<TopicViewer />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
