import './HowItWorks.css';
import { howItWorksText } from '../../content/text';

export default function HowItWorks() {
  return (
    <section id="how" className="how">
      <div className="container">
        <h2 className="h2">{howItWorksText.title}</h2>
        <p className="how__subtitle">{howItWorksText.subtitle}</p>

        <div className="how__grid">
          {howItWorksText.steps.map((step, index) => (
            <div className="how__card" key={index}>
              <span className="how__number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
