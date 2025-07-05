import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

export default function Header() {
    const icons = [
        { href: 'https://www.linkedin.com/in/lucasang/', src: linkedin, alt: 'LinkedIn link'},
        { href: 'https://github.com/lucasang1', src: github, alt: 'GitHub link'},
    ]

    return (
        <header>
            <div className = "social-icons">
                <ul>
                    {icons.map((icon, i) => (
                        <li key = {i}>
                            <a href = {icon.href} target="_blank" rel = "noopener noreferrer">
                            <img 
                                src = {icon.src} 
                                alt = {icon.alt} 
                                width = {24} 
                                height = {24}
                            />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}