export default function Projects() {
    return (
        <section id="projects">
            <div className="reveal">
                <h2>Things I've built</h2>
            </div>
            <div className="projects-timeline">
                <div className="timeline-marker"></div>

                <li className="project-card reveal">
                    <h3>GreenTrack</h3>
                    <p>
                        A carbon footprint tracker that helps households understand and reduce their environmental
                        impact with personalised weekly insights.
                    </p>
                    <div className="tags">
                        <span className="tag">React</span>
                        <span className="tag">Node.js</span>
                        <span className="tag">PostgreSQL</span>
                    </div>
                </li>
                <div className="timeline-marker"></div>


                <div className="project-card reveal">
                    <h3>ShelfMate</h3>
                    <p>
                        A reading companion app that tracks your book list, suggests your next read using ML, and
                        connects you with friends' libraries.
                    </p>
                    <div className="tags">
                        <span className="tag">Next.js</span>
                        <span className="tag">Python</span>
                        <span className="tag">OpenAI API</span>
                    </div>
                </div>
                <div className="timeline-marker"></div>


                <div className="project-card reveal">
                    <h3>PulseAlert</h3>
                    <p>
                        Real-time infrastructure monitoring with smart alert deduplication — reduced alert fatigue by
                        70% for a mid-sized SaaS company.
                    </p>
                    <div className="tags">
                        <span className="tag">Go</span>
                        <span className="tag">Kafka</span>
                        <span className="tag">Grafana</span>
                    </div>
                </div>
                <div className="timeline-marker"></div>

                <div className="project-card reveal">
                    <h3>Paletto</h3>
                    <p>
                        A design-token management tool for teams. Sync your colour palettes, typography, and spacing
                        across Figma and your codebase.
                    </p>
                    <div className="tags">
                        <span className="tag">TypeScript</span>
                        <span className="tag">Figma API</span>
                        <span className="tag">CLI</span>
                    </div>
                </div>
                <div className="timeline-marker"></div>

                <div className="project-card reveal">
                    <h3>Hearth</h3>
                    <p>
                        A community forum platform built for small neighbourhoods — hyperlocal, low-noise, and genuinely
                        useful for neighbours.
                    </p>
                    <div className="tags">
                        <span className="tag">Ruby on Rails</span>
                        <span className="tag">Hotwire</span>
                        <span className="tag">Redis</span>
                    </div>
                </div>
                <div className="timeline-marker"></div>

                <div className="project-card reveal">
                    <h3>Fastlane CLI</h3>
                    <p>
                        An open-source developer utility for automating repetitive git workflows. Over 2,000 downloads on npm.
                    </p>
                    <div className="tags">
                        <span className="tag">Node.js</span>
                        <span className="tag">Shell</span>
                        <span className="tag">Open Source</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
