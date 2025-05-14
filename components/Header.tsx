// components/Header.tsx
import Link from 'next/link';
import Button from './Button';

const Header = () => {
  return (
    <header className='flex justify-between align-center py-[40px] px-[80px] rounded-none bg-(--color-secondary)'>
      <h1 className='font-semibold text-white text-5xl mb-0 uppercase tracking-[3px]'>&lt;NUPCOM/&gt;</h1>
      <nav className='flex content-right'>
        <Link href="/">
          <Button text="Home" styles="nav" />
        </Link>
        <Link href="/about">
          <Button text="Sobre" styles="nav" />
        </Link>
        {/*<Link href="/portfolio">
          <Button text="Portfólio" styles="nav" />
        </Link>*/}
        <Link href="/contact">
          <Button text="Contato" styles="nav" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
