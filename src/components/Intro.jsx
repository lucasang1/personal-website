import Typewriter from './Typewriter'
import headshot from '../assets/headshot.jpeg';

export default function Intro() {
    const dynamic = Typewriter(
        ['machine learning.', 'financial technology.', 'Liverpool FC.', 'predictive analytics.', 'local football.', 'data visualisation.', 'stock trading.', 'Formula 1.'],
    )
    return (
        <section className = "intro">
            <img
                src = {headshot}
                alt = "Lucas Ang Photo"
                className = "profile-photo"
            />
            <h1 className = "h1-greeting">
            <span className = "text-dimmed">Hi! I'm Lucas Ang.</span>{' '}A Business Analytics student at NUS, with a strong passion for{' '}
            <span className = "inline-block border-r-2 border-current pr-1"> {dynamic}</span>
            </h1>
            <div className = "cta">
                <span className = "cta-body">Open for new roles</span>
                <a
                    href = 'https://www.linkedin.com/in/lucasang/'
                    className = 'cta-button'
                    target="_blank"
                >
                    Let's Chat
                </a>
            </div>
        </section>
    );
}