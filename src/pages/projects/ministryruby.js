import { Link } from 'react-router-dom';

export default function MinistryRuby() {
    return (
        <section id="project-ministry-ruby">
            <div className="reveal">
                <h2>MinistryRuby</h2>
            </div>
            <div className="project-detail reveal">
                <div className="project-hero">
                    <img
                        src="https://via.placeholder.com/1200x500/f8f0e8/6a432d?text=MinistryRuby"
                        alt="Pictures placeholder"
                    />
                </div>
                <p>
                    MinistryRuby is a Ruby gem for managing design tokens across Figma and codebases.
                </p>
                <div className="project-specs">
                    <div><strong>Role</strong> Ruby gem development, Figma integration</div>
                    <div><strong>Timeline</strong> 2 months</div>
                </div>
                <h3>Tech stack</h3>
                <ul className="project-tech">
                    <li>Go</li>
                    <li>Kafka</li>
                    <li>Grafana</li>
                    <li>Prometheus</li>
                </ul>
                <div className="project-links">
                    <a href="https://github.com/example/pulsealert" target="_blank" rel="noreferrer">View source</a>
                    <a href="https://example.com/pulsealert" target="_blank" rel="noreferrer">Live demo</a>
                </div>
                <div className="project-detail-back">
                    <Link to="/projects" className="btn">← Back to projects</Link>
                </div>
            </div>
        </section>
    );
}
