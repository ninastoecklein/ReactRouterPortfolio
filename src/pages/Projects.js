import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <section id="projects">
            <div className="reveal">
                <h2>Things I've built</h2>
            </div>
            <div className="projects-timeline">
                <div className="timeline-marker"></div>
                <Link to="/projects/designnavigator" className="project-card reveal">
                    <h3>Design Navigator Ltd</h3>
                    <div className="project-specs">
                        <strong>Building Compliance Specialist/Application Support Developer</strong>
                        <span className="project-date"><strong>July 2025 - Current</strong></span>
                    </div>
                    <p>
                        A carbon footprint tracker that helps households understand and reduce their environmental
                        impact with personalised weekly insights.
                    </p>
                    <div className="tags">
                        <span className="tag">VBA</span>
                        <span className="tag">Node.js</span>
                        <span className="tag">PostgreSQL</span>
                    </div>

                </Link>

                <div className="timeline-marker"></div>
                <Link to="/projects/pulsealert" className="project-card reveal">
                    <div className="project-title-date">
                        <h3>The Ministry of Social Development</h3>
                        <span className="project-date">Aug 2022 - May 2024</span>
                    </div>

                    <p>
                        Real-time infrastructure monitoring with smart alert deduplication — reduced alert fatigue by
                        70% for a mid-sized SaaS company.
                    </p>
                    <div className="project-specs">
                        <div><strong>Role</strong> Backend, alerts, operations UX</div>
                        <div><strong>Timeline</strong> 3 months</div>
                    </div>
                    <h4>Software Engineer (Ruby on Rails, Bootstrap)</h4>
                    <ul>
                        <li>Developed external-facing forms and enhancements for an internal platform to help staff assist individuals accessing financial services.</li>
                        <li>Executed a large-scale data transformation affecting 10,000+ records, de-funding Training Incentive Allowance payments and reallocating significant annual funding.</li>
                        <li>Re-branded websites using Bootstrap to ensure consistent, accessible, responsive UIs across platforms.</li>
                    </ul>

                    <div className="tags">
                        <span className="tag">Go</span>
                        <span className="tag">Kafka</span>
                        <span className="tag">Grafana</span>
                    </div>
                </Link>

                <div className="timeline-marker"></div>
                <Link to="/projects/paletto" className="project-card reveal">
                    <div className="project-title-date">
                        <h3>Paletto</h3>
                        <span className="project-date">2023</span>
                    </div>
                    <p>
                        A design-token management tool for teams. Sync your colour palettes, typography, and spacing
                        across Figma and your codebase.
                    </p>
                    <div className="project-specs">
                        <div><strong>Role</strong> UI tooling, Figma integration</div>
                        <div><strong>Timeline</strong> 4 months</div>
                    </div>
                    <div className="tags">
                        <span className="tag">TypeScript</span>
                        <span className="tag">Figma API</span>
                        <span className="tag">CLI</span>
                    </div>
                </Link>

                <div className="timeline-marker"></div>
                <Link to="/projects/hearth" className="project-card reveal">
                    <div className="project-title-date">
                        <h3>Hearth</h3>
                        <span className="project-date">2023</span>
                    </div>
                    <p>
                        A community forum platform built for small neighbourhoods — hyperlocal, low-noise, and genuinely
                        useful for neighbours.
                    </p>
                    <div className="project-specs">
                        <div><strong>Role</strong> Full-stack community product</div>
                        <div><strong>Timeline</strong> 3 months</div>
                    </div>
                    <div className="tags">
                        <span className="tag">Ruby on Rails</span>
                        <span className="tag">Hotwire</span>
                        <span className="tag">Redis</span>
                    </div>
                </Link>

                <div className="timeline-marker"></div>
                <Link to="/projects/fastlane-cli" className="project-card reveal">
                    <div className="project-title-date">
                        <h3>Fastlane CLI</h3>
                        <span className="project-date">2023</span>
                    </div>
                    <p>
                        An open-source developer utility for automating repetitive git workflows. Over 2,000 downloads on npm.
                    </p>
                    <div className="project-specs">
                        <div><strong>Role</strong> CLI design, developer experience</div>
                        <div><strong>Timeline</strong> 2 months</div>
                    </div>
                    <div className="tags">
                        <span className="tag">Node.js</span>
                        <span className="tag">Shell</span>
                        <span className="tag">Open Source</span>
                    </div>
                </Link>
            </div>

        </section >
    );
}
