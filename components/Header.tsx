// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>NEPCOM</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/portfolio">Portfólio</Link>
        <Link href="/contact">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
