import { useEffect, useState } from 'react';

export function useTheme() {
  const getInitialTheme = () => {
    // Prioridade 1: preferência salva
    const stored = localStorage.getItem('theme');
    if (stored) return stored;

    // Prioridade 2: DARK como padrão do site
    return 'dark';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
