import './FAQ.css';
import { faqText } from '../../content/text';

export default function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="h2">{faqText.title}</h2>

        {faqText.items.map((item, i) => (
          <details key={i}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
