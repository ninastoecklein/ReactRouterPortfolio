import { Link } from 'react-router-dom';

export default function Upstock() {
    return (
        <section id="project-upstock">
            <div className="reveal">
                <h2>Upstock</h2>
            </div>
            <div className="project-detail reveal">
                <div className="project-hero">
                    <img
                        src="https://via.placeholder.com/1200x500/f5f0ea/6b452a?text=Upstock"
                        alt="Pictures placeholder"
                    />
                </div>
                <p>
                    Upstock is a community forum platform built for small neighbourhoods — hyperlocal and low-noise.
                </p>
                <div className="project-specs">
                    <div><strong>Role</strong> Full-stack community product</div>
                    <div><strong>Timeline</strong> 3 months</div>
                </div>
                <h3>Tech stack</h3>
                <ul className="project-tech">
                    <li>Ruby on Rails</li>
                    <li>Hotwire</li>
                    <li>Redis</li>
                    <li>Stimulus</li>
                </ul>
                <div className="project-links">
                    <a href="https://github.com/example/hearth" target="_blank" rel="noreferrer">View source</a>
                    <a href="https://example.com/hearth" target="_blank" rel="noreferrer">Live demo</a>
                </div>
                <div className="project-detail-back">
                    <Link to="/projects" className="btn">← Back to projects</Link>
                </div>
            </div>
        </section>
    );
}
