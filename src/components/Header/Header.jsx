import { useState } from 'react';
import './Header.css';
import { useTheme } from '../../hooks/useTheme';

import logoPurple from '../../assets/images/prontus - purple no bg.png';
import logoWhite from '../../assets/images/prontus - white no bg.png';

import sunIcon from '../../assets/icons/brilho-do-sol.png';
import moonIcon from '../../assets/icons/forma-de-fase-da-lua-crescente-com-duas-estrelas.png';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const logo = theme === 'dark' ? logoWhite : logoPurple;

  // Ícone correto por tema
  const themeIcon = theme === 'dark' ? moonIcon : sunIcon;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header__content">

        {/* Logo */}
        <img src={logo} alt="Prontus RH" className="header__logo" />

        {/* Desktop actions */}
        <div className="header__actions">
          <nav className="header__nav">
            <a href="#how">Como funciona</a>
            <a href="#about">Sobre</a>
          </nav>

          <a href="#contact" className="btn-primary">
            Quero contratar agora
          </a>

          {/* Toggle tema */}
          <button
            className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`}
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            <span className="toggle-track">
              <span className="toggle-thumb">
                <img
                  src={themeIcon}
                  alt=""
                  className="theme-icon"
                />
              </span>
            </span>
          </button>

          {/* Botão menu mobile */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ===== Menu Mobile ===== */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="mobile-menu__close"
          onClick={closeMenu}
          aria-label="Fechar menu"
        >
          ✕
        </button>

        <nav className="mobile-menu__nav">
          <a href="#how" onClick={closeMenu}>Como funciona</a>
          <a href="#about" onClick={closeMenu}>Sobre</a>
          <a href="#contact" className="btn-primary" onClick={closeMenu}>
            Quero contratar agora
          </a>
        </nav>

        {/* Toggle também no mobile */}
        <button
          className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`}
          onClick={toggleTheme}
          aria-label="Alternar tema"
        >
          <span className="toggle-track">
            <span className="toggle-thumb">
              <img
                src={themeIcon}
                alt=""
                className="theme-icon"
              />
            </span>
          </span>
        </button>
      </div>
    </header>
  );
}
