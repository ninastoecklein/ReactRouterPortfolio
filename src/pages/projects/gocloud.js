import { Link } from 'react-router-dom';

export default function GoCloud() {
    return (
        <section id="project-gocloud">
            <div className="reveal">
                <h2>GoCloud</h2>
            </div>
            <div className="project-detail reveal">
                <div className="project-hero">
                    <img
                        src="https://via.placeholder.com/1200x500/e9f4f3/1f5c5c?text=GoCloud"
                        alt="Pictures placeholder"
                    />
                </div>
                <p>
                    GoCloud is an open-source cloud infrastructure management tool for automating repetitive cloud workflows.
                </p>
                <div className="project-specs">
                    <div><strong>Role</strong> CLI design, developer experience</div>
                    <div><strong>Timeline</strong> 2 months</div>
                </div>
                <h3>Tech stack</h3>
                <ul className="project-tech">
                    <li>Node.js</li>
                    <li>Shell</li>
                    <li>npm</li>
                    <li>Open Source</li>
                </ul>
                <div className="project-links">
                    <a href="https://github.com/example/fastlane-cli" target="_blank" rel="noreferrer">View source</a>
                    <a href="https://example.com/fastlane-cli" target="_blank" rel="noreferrer">Live demo</a>
                </div>
                <div className="project-detail-back">
                    <Link to="/projects" className="btn">← Back to projects</Link>
                </div>
            </div>
        </section>
    );
}
