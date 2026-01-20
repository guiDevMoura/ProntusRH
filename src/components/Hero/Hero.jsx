import './Hero.css';
import { heroText } from '../../content/text';

export default function Hero() {

  return (
    <section className="hero">
      <div className="container hero__content">
        <h1 className="h1">{heroText.title}</h1>
        <p className="hero__subtitle">{heroText.subtitle}</p>
        <p className="hero__highlight">{heroText.highlight}</p>
        <a
            href="#contact"
            className="btn-primary"
        >
            {heroText.cta}
        </a>
      </div>
    </section>
  );
}
