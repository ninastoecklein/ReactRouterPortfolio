import { Link } from 'react-router-dom';

export default function ShelfMate() {
    return (
        <section id="project-shelfmate">
            <div className="reveal">
                <h2>ShelfMate</h2>
            </div>
            <div className="project-detail reveal">
                <div className="project-hero">
                    <img
                        src="https://via.placeholder.com/1200x500/f2eef8/3e2d65?text=ShelfMate"
                        alt="Pictures placeholder"
                    />
                </div>
                <p>
                    ShelfMate is a reading companion app that tracks your book list, suggests your next read using ML,
                    and connects you with friends' libraries.
                </p>
                <div className="project-specs">
                    <div><strong>Role</strong> Full-stack, UX, recommendation engine</div>
                    <div><strong>Timeline</strong> 5 months</div>
                </div>
                <h3>Tech stack</h3>
                <ul className="project-tech">
                    <li>Next.js</li>
                    <li>Python</li>
                    <li>TensorFlow</li>
                    <li>Tailwind CSS</li>
                </ul>
                <div className="project-links">
                    <a href="https://github.com/example/shelfmate" target="_blank" rel="noreferrer">View source</a>
                    <a href="https://example.com/shelfmate" target="_blank" rel="noreferrer">Live demo</a>
                </div>
                <div className="project-detail-back">
                    <Link to="/projects" className="btn">← Back to projects</Link>
                </div>
            </div>
        </section>
    );
}
