import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Simple Regex-based Syntax Highlighter for Python
const CodeHighlighter = ({ code }) => {
    // Basic Python syntax rules
    const rules = [
        { regex: /#(.*)/g, color: '#6a9955' }, // Comments (Green)
        { regex: /('.*?'|".*?")/g, color: '#ce9178' }, // Strings (Orange/Brown)
        { regex: /\b(def|class|import|from|return|if|else|elif|while|for|in|try|except|print|input|with|as|pass|break|continue)\b/g, color: '#c586c0' }, // Keywords (Pink/Purple)
        { regex: /\b(True|False|None)\b/g, color: '#569cd6' }, // Booleans/None (Blue)
        { regex: /\b(\d+)\b/g, color: '#b5cea8' }, // Numbers (Light Green)
        { regex: /\b(self)\b/g, color: '#569cd6' }, // Self (Blue)
    ];

    // We need to match and wrap parts of the string.
    // A simple way for a "fun" task without libraries is to split and map, but regex overlapping is tricky.
    // For this complexity, we'll try a simpler approach: strict tokenizing is hard, but we can do a multi-pass or just use a few key colors.

    // Safer approach for this context: Split by tokens and colorize known matches.
    const tokens = code.split(/((?:#.*)|(?:"(?:[^"\\]|\\.)*")|(?:'(?:[^'\\]|\\.)*')|\b(?:\d+)\b|\b(?:def|class|import|from|return|if|else|elif|while|for|in|try|except|print|input|with|as|pass|break|continue|True|False|None|self)\b|\s+)/g);

    return (
        <code>
            {tokens.map((token, i) => {
                let style = { color: '#d4d4d4' }; // Default

                if (token.startsWith('#')) style.color = '#6a9955';
                else if (token.startsWith('"') || token.startsWith("'")) style.color = '#ce9178';
                else if (/^\d+$/.test(token)) style.color = '#b5cea8';
                else if (['def', 'class', 'import', 'from', 'return', 'if', 'else', 'elif', 'while', 'for', 'in', 'try', 'except', 'print', 'input', 'with', 'as', 'pass', 'break', 'continue'].includes(token)) style.color = '#c586c0';
                else if (['True', 'False', 'None'].includes(token)) style.color = '#569cd6';

                return <span key={i} style={style}>{token}</span>;
            })}
        </code>
    );
};

// Helper to get engaging icons for Python features
const getFeatureIcon = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('read') || lower.includes('learn')) return '📖';
    if (lower.includes('standard library') || lower.includes('portable')) return '📦';
    if (lower.includes('modules')) return '🧩';
    if (lower.includes('database')) return '🗄️';
    if (lower.includes('windows')) return '🪟';
    if (lower.includes('object-oriented')) return '🏗️';
    if (lower.includes('garbage')) return '🧹';
    if (lower.includes('dynamic')) return '⚡';
    return '✨';
};

// Helper to simple markdown parsing (Bold and Inline Code)
const formatText = (text) => {
    if (!text) return null;
    // Split by **bold** or `code`
    // Regex captures formatting groups
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);

    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
            return (
                <code key={index} style={{
                    fontFamily: 'monospace',
                    background: 'var(--sidebar-active-bg)',
                    color: 'var(--sidebar-active-text)',
                    padding: '0.1rem 0.3rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.9em'
                }}>
                    {part.slice(1, -1)}
                </code>
            );
        }
        return part;
    });
};

const TopicViewer = () => {
    const { topicId } = useParams();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        window.scrollTo(0, 0);
        fetch(`/api/topic/${topicId}`)
            .then(res => res.json())
            .then(data => {
                setContent(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load topic", err);
                setLoading(false);
            });
    }, [topicId]);

    if (loading) return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading your lesson...</p>
        </div>
    );
    if (!content) return <div className="error">Topic not found</div>;

    return (
        <div className="topic-content-wrapper fade-in">
            <h1 className="topic-heading-display">{content.title}</h1>
            <div className="topic-divider"></div>

            {content.sections.map((section, idx) => {
                // Special handling based on heading to choose specific layouts (e.g. Features = Grid)
                const isFeaturesHeading = section.heading === 'Features';
                const isDataTypesHeading = section.heading === 'Standard Data Types';
                const isGrid = isFeaturesHeading || isDataTypesHeading;

                switch (section.type) {
                    case 'text':
                        // Split content by newlines to creat separate paragraphs
                        const paragraphs = section.body.split('\n').filter(p => p.trim() !== '');
                        return (
                            <div key={idx} className="content-section text-section">
                                {section.heading && <h2 className="section-title-display">{section.heading}</h2>}
                                <div className="section-text-display">
                                    {paragraphs.map((para, pIdx) => (
                                        <p key={pIdx} style={{ marginBottom: paragraphs.length > 1 ? '1em' : 0 }}>
                                            {formatText(para)}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        );
                    case 'list':
                        return (
                            <div key={idx} className="content-section list-section">
                                {section.heading && <h2 className="section-title-display">{section.heading}</h2>}
                                {isGrid ? (
                                    <div className="features-grid">
                                        {section.items.map((item, i) => {
                                            // Check for pipe delimiter to split Type | Example
                                            const parts = item.includes('|') ? item.split('|') : [item];
                                            const title = parts[0].trim();
                                            const example = parts[1] ? parts[1].trim() : null;

                                            return (
                                                <div key={i} className={`feature-card ${isDataTypesHeading ? 'datatype-card' : 'python-feature-card'}`}>
                                                    {isFeaturesHeading && <div className="feature-icon">{getFeatureIcon(title)}</div>}
                                                    {isDataTypesHeading ? (
                                                        <>
                                                            <div className="datatype-header">{formatText(title)}</div>
                                                            {example && <div className="datatype-example">{formatText(example)}</div>}
                                                        </>
                                                    ) : (
                                                        <p className="feature-text">{formatText(title)}</p>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <ul className="section-list-styled">
                                        {section.items.map((item, i) => (
                                            <li key={i}>
                                                <span className="list-bullet">Checking...</span> {/* Will use CSS to make this a checkmark */}
                                                <span>{formatText(item)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    case 'list-ordered':
                        return (
                            <div key={idx} className="content-section list-section">
                                {section.heading && <h2 className="section-title-display">{section.heading}</h2>}
                                <ol className="section-list-ordered-display">
                                    {section.items.map((item, i) => (
                                        <li key={i}>
                                            <span className="step-number">{i + 1}</span>
                                            <span className="step-content">{formatText(item)}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        );
                    case 'code':
                        return (
                            <div key={idx} className="code-section">
                                {section.heading && <h3 className="code-heading">{section.heading}</h3>}
                                <div className="terminal-window">
                                    <div className="terminal-header">
                                        <div className="terminal-controls">
                                            <span className="control red"></span>
                                            <span className="control yellow"></span>
                                            <span className="control green"></span>
                                        </div>
                                        <div className="terminal-title">{section.language || 'python'}</div>
                                    </div>
                                    <pre className="terminal-body">
                                        <CodeHighlighter code={section.code} />
                                    </pre>
                                </div>
                            </div>
                        );
                    case 'table':
                        return (
                            <div key={idx} className={`content-section table-section ${section.className || ''}`}>
                                {section.heading && <h2 className="section-title-display">{section.heading}</h2>}
                                <div className="table-container">
                                    <table className="topic-table">
                                        <thead>
                                            <tr>
                                                {section.headers.map((header, hIdx) => (
                                                    <th key={hIdx}>{header}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section.rows.map((row, rIdx) => (
                                                <tr key={rIdx}>
                                                    {row.map((cell, cIdx) => (
                                                        <td key={cIdx}>{formatText(cell)}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default TopicViewer;
