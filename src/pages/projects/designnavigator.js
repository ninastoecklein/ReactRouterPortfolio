import { Link } from 'react-router-dom';

export default function DesignNavigator() {
    return (
        <section id="project-design-navigator">
            <div className="reveal">
                <h2>Design Navigator Ltd</h2>
            </div>
            <div className="project-detail reveal">
                <div className="project-hero">
                    <img
                        src="https://via.placeholder.com/1200x500/eff7ec/2f5a2f?text=GreenTrack"
                        alt="Pictures placeholder"
                    />
                </div>
                <p>
                    <h4>Building Compliance Specialist / Application Support Developer (VBA)</h4>
                    <ul>
                        <li>Produced building consent documentation for energy efficiency compliance for residential and commercial buildings, including McDonald's restaurants.</li>
                        <li>Developed Excel VBA ETL macros to standardize and convert complex building material data into JSON, enabling automated ingestion into downstream systems and reducing manual handling time.</li>
                    </ul>
                </p>
                <h3>Tech stack</h3>
                <ul className="project-tech">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                    <li>Chart.js</li>
                </ul>
                <div className="project-links">
                    <a href="https://github.com/example/greentrack" target="_blank" rel="noreferrer">View source</a>
                    <a href="https://example.com/greentrack" target="_blank" rel="noreferrer">Live demo</a>
                </div>
                <div className="project-detail-back">
                    <Link to="/projects" className="btn">← Back to projects</Link>
                </div>
            </div>
        </section>
    );
}
