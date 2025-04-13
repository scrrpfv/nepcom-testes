import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Início</Link></li>
        <li><Link href="/portfolio">Portfólio</Link></li>
        <li><Link href="/about">Sobre</Link></li>
        <li><Link href="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
