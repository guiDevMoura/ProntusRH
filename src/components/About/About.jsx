import './About.css';
import { aboutText, leadershipText } from '../../content/text';

export default function About() {
  return (
    <section id="about" className="about">
        <div className="about__background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className="container about__content">
            <div className="container">
                <h2 className="h2">{aboutText.title}</h2>

                {aboutText.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
                ))}

                <h3>{leadershipText.title}</h3>

                <div className="about__people">
                {leadershipText.people.map((person, i) => (
                    <div key={i}>
                    <h4>{person.name}</h4>
                    <p>{person.description}</p>
                    </div>
                ))}
                </div>

                <p className="about__closing">{leadershipText.closing}</p>
            </div>
        </div>
    </section>
  );
}
