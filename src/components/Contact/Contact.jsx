import './Contact.css';
import whatsappIcon from '../../assets/icons/whatsapp.png';

export default function Contact() {
  const whatsappLink =
    'https://wa.me/5584996644000?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Prontus%20RH%20sobre%20recrutamento%20e%20seleção.';

  return (
    <section id="contact" className="contact">
      <div className="container contact__content">

        {/* Texto introdutório */}
        <div className="contact__intro">
          <h2 className="h2">Fale com a Prontus</h2>

          <p>
            Prefere falar direto com a gente?
            Clique no botão abaixo e converse com a Prontus pelo WhatsApp.
            Nosso atendimento é rápido e humanizado.
          </p>

          {/* CTA WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__whatsapp"
          >
            <img src={whatsappIcon} alt="" />
            Falar pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
