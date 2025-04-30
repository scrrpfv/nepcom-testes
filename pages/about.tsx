import Header from '../components/Header';

export default function About() {
  return (
    <div className='font-roboto'>
      <Header />
      <main className='px-[20px] py-[60px]'>
        <h1 className='font-semibold text-size-[4rem]'>Sobre o NEPCOM</h1>
        <p className='mt-[20px]'>Somos estudantes, não somos pacifistas, e viva a luta antiimperialista.</p>
      </main>
    </div>
  );
}