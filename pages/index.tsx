import Header from '../components/Header';

export default function Home() {
  return (
    <div className='font-roboto'>
      <Header />
      <main className='px-[20px] py-[60px]'>
        <h1 className='font-semibold text-4xl ml-[30px]'>Bem-vindo ao NUPCOM</h1>
        <p className='mt-[20px] text-xl'>Somos uma equipe dedicada ao desenvolvimento em TI, freelancing e soluções tecnológicas inovadoras, formada por estudantes de graduação do Centro de Informática da UFPE (CIn). Unimos conhecimento cintífico, habilidades técnicas e criatividade para entregar projetos de alta qualidade, sempre alinhados às necessidades do mercado e às demandas reais dos nossos clientes.</p>
      </main>
    </div>
  );
}
