import { Link } from 'react-router-dom';

export default function Ministry() {
    return (
        <section id="project-ministry">
            <div className="reveal">
                <h2>Ministry</h2>
            </div>
            <div className="project-detail reveal">
                <div className="project-hero">
                    <img
                        src="https://via.placeholder.com/1200x500/f8f0e8/6a432d?text=Ministry"
                        alt="Pictures placeholder"
                    />
                </div>
                <p>
                    Ministry is a design-token management tool for teams to sync colour palettes, typography, and spacing
                    across Figma and codebases.
                </p>
                <div className="project-specs">
                    <div><strong>Role</strong> UI tooling, Figma integration</div>
                    <div><strong>Timeline</strong> 4 months</div>
                </div>
                <h3>Tech stack</h3>
                <ul className="project-tech">
                    <li>TypeScript</li>
                    <li>Figma API</li>
                    <li>Node.js</li>
                    <li>CLI</li>
                </ul>
                <div className="project-links">
                    <a href="https://github.com/example/paletto" target="_blank" rel="noreferrer">View source</a>
                    <a href="https://example.com/paletto" target="_blank" rel="noreferrer">Live demo</a>
                </div>
                <div className="project-detail-back">
                    <Link to="/projects" className="btn">← Back to projects</Link>
                </div>
            </div>
        </section>
    );
}
