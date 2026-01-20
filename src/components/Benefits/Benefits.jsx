import { benefitsText } from '../../content/text';
import './Benefits.css';

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <h2 className="h2">{benefitsText.title}</h2>

        <div className="benefits__grid">
          {benefitsText.items.map((item, i) => (
            <div key={i}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
