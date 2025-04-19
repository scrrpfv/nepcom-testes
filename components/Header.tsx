// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1 className='font-semibold'>NEPCOM</h1>
      <nav>
        <Link href="/">
          {/* <button className='text-neutral-50 transition-color hover:text-neutral-900'> */}
            Home
          {/* </button> */}
        </Link>
        <Link href="/about">Sobre</Link>
        <Link href="/portfolio">Portfólio</Link>
        <Link href="/contact">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
