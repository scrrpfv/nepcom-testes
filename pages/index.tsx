import Header from '../components/Header';

export default function Home() {
  return (
    <div className='font-roboto'>
      <Header />
      <main className='px-[20px] py-[60px]'>
        <h1 className='font-semibold text-size-[4rem]'>Bem-vindo ao NEPCOM</h1>
        <p className='mt-[20px]'>Somos uma equipe de desenvolvimento em TI, freelancing e soluções tecnológicas.</p>
      </main>
    </div>
  );
}
