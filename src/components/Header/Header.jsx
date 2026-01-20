import { useState } from 'react';
import './Header.css';
import logo from '../../assets/images/prontus - purple no bg.png';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__content">
        {/* Logo */}
        <div className="header__logo">
          <img src={logo} alt="Prontus RH" />
        </div>

        {/* Botão mobile */}
        <button
          className="header__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* Navegação */}
        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          <a href="#how" onClick={() => setOpen(false)}>Como funciona</a>
          <a href="#about" onClick={() => setOpen(false)}>Sobre</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a
            href="#contact"
            className="btn-primary"
            onClick={() => setOpen(false)}
          >
            Contrate agora
          </a>
        </nav>
      </div>
    </header>
  );
}
